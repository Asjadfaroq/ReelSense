import axios from 'axios';

// Use runtime environment variable (injected by env.sh script) or relative URLs for Kubernetes
// Relative URLs go through nginx proxy, avoiding CORS issues
const apiUrl = (typeof window !== 'undefined' && window.env?.API_URL) 
    ? window.env.API_URL 
    : import.meta.env.VITE_API_URL || '';  // Empty string = relative URLs (goes through nginx proxy)

const axiosInstance = axios.create({
    baseURL: apiUrl, // Empty string = relative URLs (goes through nginx proxy)
});

// Dedicated client for refresh requests so we can ensure the correct
// backend baseURL even when frontend + backend are on different domains.
const refreshAxios = axios.create({
    baseURL: apiUrl,
});

let refreshPromise: Promise<string> | null = null;

const refreshAccessToken = async (): Promise<string> => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
        throw new Error('No refresh token');
    }

    const res = await refreshAxios.post('/api/refreshtoken', { token: refreshToken });

    const newAccessToken = res.data.token as string;
    const newRefreshToken = (res.data.refreshToken as string) || refreshToken;

    localStorage.setItem('token', newAccessToken);
    localStorage.setItem('refreshToken', newRefreshToken);

    // Update default header so future requests use the fresh access token.
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
    return newAccessToken;
};

// Attach access token to every request
axiosInstance.interceptors.request.use(
    (config : any) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error : any) => Promise.reject(error)
);

// Handle expired tokens
axiosInstance.interceptors.response.use(
    (response : any) => response,
    async (error : any) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                if (!refreshPromise) {
                    refreshPromise = refreshAccessToken().finally(() => {
                        refreshPromise = null;
                    });
                }

                const newToken = await refreshPromise;

                // update headers
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
                originalRequest.headers = originalRequest.headers || {};
                originalRequest.headers.Authorization = `Bearer ${newToken}`;

                return axiosInstance(originalRequest); // retry request
            } catch (refreshError) {
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                setTimeout(() => {
                    window.location.href = '/login';
                }, 1000); // wait 1s so logs stay visible
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;

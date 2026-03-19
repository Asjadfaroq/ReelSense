import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import AuthContext from '../authContext/authcontext';

const Login = () => {
  // Get auth context
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  // Form state
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  // Handle input changes
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({...prev, [name]: value}));
  };

  // Handle form submission
  const handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();
    auth?.login({
      email: input.email,
      password: input.password
    });
  };

  // Clear auth status when component unmounts
  useEffect(() => {
    return () => {
      if (auth?.clearAuthStatus) {
        auth.clearAuthStatus();
      }
    };
  }, []);

  // If already logged in, prevent access to /login and redirect to home.
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode<{ exp?: number }>(token);
        // If token is expired, let the user authenticate again (refresh flow will handle API calls).
        if (decoded?.exp && decoded.exp * 1000 < Date.now()) {
          return;
        }
      } catch {
        // If token can't be decoded, fall back to redirect behavior.
      }

      navigate('/', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-neutral-950 text-slate-100">
      {/* Premium luxury backdrop (no blue tones) */}
        <div className="absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18),transparent_60%)]" />
        <div className="absolute top-20 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.16),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 right-0 h-[34rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.10),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.88))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left supporting glass card */}
          <section className="hidden lg:block rounded-3xl border border-white/10 bg-white/4 backdrop-blur-xl p-10 shadow-[0_0_70px_rgba(249,115,22,0.08)]">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              </span>
              <div>
                <div className="text-xs font-semibold tracking-widest text-amber-200/90 uppercase">
                  ReelSense
                </div>
                <div className="text-sm text-slate-300/90">AI movie search with premium taste matching</div>
              </div>
            </div>

              <h1 className="mt-10 text-4xl font-bold leading-tight">
              Find the vibe.
              <span className="block bg-gradient-to-r from-orange-200 via-amber-200 to-yellow-200 bg-clip-text text-transparent">
                Watch the right pick.
              </span>
            </h1>

            <p className="mt-5 text-slate-300/90 leading-relaxed">
              Search instantly and get AI recommendations that feel personal—built for your next movie night.
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-semibold">Smart search</div>
                <div className="mt-1 text-sm text-slate-300/90">Real-time results with clean, fast UX.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-semibold">AI insights</div>
                <div className="mt-1 text-sm text-slate-300/90">Similar titles explained in plain language.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-semibold">Secure sessions</div>
                <div className="mt-1 text-sm text-slate-300/90">Short-lived access tokens with 7-day refresh.</div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-black/15 p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-300/70">
                Premium experience
              </div>
              <div className="mt-2 text-sm text-slate-300/90">
                Sign in and your recommendations get smarter.
              </div>
            </div>
          </section>

          {/* Right main login glass card */}
          <div className="flex flex-col items-center">
          <section className="rounded-3xl border border-white/10 bg-white/4 backdrop-blur-xl p-6 shadow-[0_0_70px_rgba(249,115,22,0.09)] sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-xs font-semibold tracking-widest text-orange-200/90 uppercase">
                  Secure sign in
                </div>
                <h2 className="mt-2 text-3xl font-bold">Login to ReelSense</h2>
                <p className="mt-2 text-sm text-slate-300/90">
                  Continue to your AI movie discovery experience.
                </p>
              </div>
              <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              </div>
            </div>

            {/* Error / success */}
            {auth?.authStatus?.iserror && (
              <div className="mt-6 rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-200">
                {auth.authStatus.message}
              </div>
            )}
            {auth?.authStatus?.issuccess && (
              <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4 text-sm text-amber-200">
                {auth.authStatus.message}
              </div>
            )}

            <form className="mt-8 space-y-5" onSubmit={handlesubmit}>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-200/90">
                  Email or Username
                </label>
                <input
                  id="email"
                  type="text"
                    className="w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-orange-300/40"
                  placeholder="Email or Username"
                  value={input.email}
                  onChange={handlechange}
                  name="email"
                  autoComplete="username"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-slate-200/90">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                    className="w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-orange-300/40"
                  placeholder="Password"
                  value={input.password}
                  onChange={handlechange}
                  name="password"
                  autoComplete="current-password"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <label className="flex items-center gap-2 text-sm text-slate-300/90 select-none">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-slate-950/40 text-orange-200 focus:ring-orange-300/40"
                  />
                  Remember me
                </label>
                <div className="text-sm text-slate-400">
                  Forgot password?
                </div>
              </div>

              <button
                type="submit"
                disabled={auth?.authStatus?.isloading || !input.password}
                  className={`w-full rounded-2xl bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-300 text-slate-950 py-3 font-semibold shadow-lg shadow-orange-500/12 transition-all duration-200 ${
                  auth?.authStatus?.isloading || !input.password
                    ? 'opacity-60 cursor-not-allowed'
                    : 'hover:brightness-110 hover:shadow-orange-500/30'
                }`}
              >
                {auth?.authStatus?.isloading ? 'Signing in...' : 'Sign In'}
              </button>

              <div className="mt-2 rounded-2xl border border-white/10 bg-black/15 p-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-300/70">
                  Demo access
                </div>
                <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-400">User</div>
                    <div className="font-mono text-slate-100">asjad_farooq</div>
                  </div>
                  <div>
                    <div className="text-slate-400">Password</div>
                    <div className="font-mono text-slate-100">abc123</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center text-sm text-slate-400">
                Don&apos;t have an account?{' '}
                <Link
                  to="/signup"
                  className="font-semibold text-amber-200 hover:text-amber-100 underline underline-offset-4"
                >
                  Create one
                </Link>
              </div>

            </form>
          </section>
          <div className="mt-6 text-center text-[12px] leading-relaxed text-slate-500">
            © 2026 ReelSense
            <br />
            Developed by Asjad Farooq
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
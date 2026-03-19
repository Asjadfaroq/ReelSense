<p align="center">
  <img src="public/cineverse-logo.svg" alt="ReelSense Logo" width="80" height="80" />
</p>

<h1 align="center">ReelSense</h1>

<p align="center">
  <strong>AI‑enhanced, premium movie discovery experience</strong><br/>
  MERN + Gemini + TMDB · Modern glassmorphism UI · Secure JWT auth
</p>

<p align="center">
  <a href="https://reel-sense.vercel.app/login"><strong>▶ Live App</strong></a> ·
  <a href="https://linkedin.com/in/asjadfarooqconnect"><strong>LinkedIn</strong></a> ·
  <a href="https://asjadfarooq.netlify.app/"><strong>Portfolio</strong></a>
</p>

---

## 📝 Overview

ReelSense is an AI‑driven movie and TV discovery platform built with the **MERN** stack.  
It combines **TMDB** data with **Gemini** to generate human‑readable explanations for why each title matches the user’s taste, wrapped in a clean, cinematic UI.

The project is designed for:
- **Security** – proper JWT access + refresh tokens, rotation, and server‑side API key usage.
- **Performance** – React Query caching, pagination, and carefully optimized scroll/UI behaviour.
- **Experience** – bright glassmorphism design, responsive layout, and polished micro‑interactions.

---

## ✨ Key Features

- **AI‑enhanced suggestions** powered by Gemini with clear “why this fits” reasoning.
- **Real‑time search** with debounced queries and rich TMDB data.
- **Secure authentication** using access + refresh JWTs, rotation, and concurrency‑safe refresh logic.
- **Protected content** (Top Rated TV Shows, Popular Movies, detailed pages) behind auth.
- **Performance‑oriented UI** with React Query, memoized components, and smooth scroll behaviour.
- **Responsive, premium design**: orange/amber glassmorphism theme optimized for desktop and mobile.

---

## 🛠 Tech Stack

### Frontend
- **React + TypeScript** (Vite)
- **React Router DOM**
- **@tanstack/react-query**
- **Tailwind CSS**
- **Framer Motion**, **lucide‑react**
- Context providers for **auth** and **LLM suggestions**

### Backend
- **Node.js + Express**
- **MongoDB Atlas + Mongoose**
- **JWT / bcrypt** for auth
- **Axios** for TMDB + Gemini integration
- **Helmet / CORS** hardening

### Deployment
- **Frontend**: Vercel – `https://reel-sense.vercel.app`
- **Backend**: Render Web Service (Node)

---

## 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/Asjadfaroq/ReelSense.git
cd ReelSense
```

### 1. Backend

Create `backend/.env`:

```env
MONGODB_URI=<your MongoDB Atlas connection string>
GEMINI_API_KEY=<your Gemini API key>
JWT_SECRET=<strong random secret>
JWT_REFRESH_SECRET=<strong random secret>
PORT=5001
```

Install and start:

```bash
cd backend
npm install
npm start
```

The API health check will be available at: `http://localhost:5001/api/health`.

### 2. Frontend

In another terminal from the project root:

```bash
npm install
npm run dev
```

Then open: `http://localhost:5173`.

---

## 🌐 Production Setup (Vercel + Render)

- **Backend (Render)**  
  - Environment variables: `MONGODB_URI`, `GEMINI_API_KEY`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `PORT`,  
    `CORS_ORIGINS=https://reel-sense.vercel.app`

- **Frontend (Vercel)**  
  - Build command: `npm run build`  
  - Output directory: `dist`  
  - Env: `VITE_API_URL=https://<your-render-backend-url>`

CI/CD is handled via **GitHub Actions + Render deploy hook**, so pushes to `main` automatically redeploy the backend.

---

## 🤝 Contribution

Suggestions, issues, and pull requests are welcome.  
If you have ideas to improve the UI, performance, or security model, feel free to open a discussion or PR.

---

## 👤 Author

**Asjad Farooq**  
- Portfolio: <https://asjadfarooq.netlify.app/>  
- LinkedIn: <https://linkedin.com/in/asjadfarooqconnect>

Feel free to reach out for collaboration, feedback, or opportunities.

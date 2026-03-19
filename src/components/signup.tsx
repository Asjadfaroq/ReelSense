import { useContext, useState } from "react"
import AuthContext from "../authContext/authcontext"
import { Link } from "react-router-dom"

const Signup = () => {

  let [input, setInput] = useState({
    username: "",
    email: "",
    password: ""
  })

  // Validation state
  const [isEmailValid, setIsEmailValid] = useState(false);

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  let handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({...prev, [name]: value}))

    // Validate email on change
    if (name === 'email') {
      setIsEmailValid(validateEmail(value));
    }
  }

  let handlesubmit = (e:any) => {
    e.preventDefault()
    auth?.signup(input)
  }

  let auth = useContext(AuthContext)

  return (
    <div className="min-h-screen relative overflow-hidden bg-neutral-950 text-slate-100">
      {/* Premium luxury backdrop (orange/amber/rose) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.22),transparent_60%)]" />
        <div className="absolute top-20 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 right-0 h-[34rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.10),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.88))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left supporting glass card */}
          <section className="hidden lg:block rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-[0_0_70px_rgba(249,115,22,0.10)]">
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
              Create your account.
              <span className="block bg-gradient-to-r from-orange-200 via-amber-200 to-rose-200 bg-clip-text text-transparent">
                Start discovering.
              </span>
            </h1>

            <p className="mt-5 text-slate-300/90 leading-relaxed">
              Build a watchlist and unlock personalized recommendations powered by AI.
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-semibold">Smart onboarding</div>
                <div className="mt-1 text-sm text-slate-300/90">Tell us your taste once, we keep it sharp.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-semibold">Clean UX</div>
                <div className="mt-1 text-sm text-slate-300/90">Fast sign up, zero distractions.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-semibold">Secure sessions</div>
                <div className="mt-1 text-sm text-slate-300/90">Short-lived access token with 7-day refresh.</div>
              </div>
            </div>
          </section>

          {/* Right main signup card + footer */}
          <div className="flex flex-col items-center">
            <section className="w-full rounded-3xl border border-white/10 bg-white/4 backdrop-blur-xl p-6 shadow-[0_0_70px_rgba(249,115,22,0.10)] sm:p-8 lg:max-w-md">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-amber-200/90 uppercase">
                    Create your account
                  </div>
                  <h2 className="mt-2 text-3xl font-bold">ReelSense Signup</h2>
                  <p className="mt-2 text-sm text-slate-300/90">Join to unlock personalized AI recommendations.</p>
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
                  <label htmlFor="username" className="block text-sm font-medium text-slate-200/90">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={input.username}
                    onChange={handlechange}
                    name="username"
                    className="w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-orange-300/40"
                    autoComplete="username"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200/90">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={input.email}
                    onChange={handlechange}
                    name="email"
                    className="w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-orange-300/40"
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-slate-200/90">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={input.password}
                    onChange={handlechange}
                    name="password"
                    className="w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-orange-300/40"
                    autoComplete="new-password"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full rounded-2xl bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-300 text-slate-950 py-3 font-semibold shadow-lg shadow-orange-500/12 transition-all duration-200 ${
                    !isEmailValid || !input.password || !input.username || auth?.authStatus?.isloading ? 'opacity-60 cursor-not-allowed' : 'hover:brightness-110 hover:shadow-orange-500/30'
                  }`}
                  disabled={!isEmailValid || !input.password || !input.username || auth?.authStatus?.isloading}
                >
                  {auth?.authStatus?.isloading ? 'Creating Account...' : 'Sign Up'}
                </button>
              </form>

              <div className="pt-2 text-center text-sm text-slate-400">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-amber-200 hover:text-amber-100 underline underline-offset-4">
                  Sign in
                </Link>
              </div>
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
  )
}

export default Signup

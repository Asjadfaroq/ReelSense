import { useState } from 'react';
import Navbar from './Navbar';
import { Calendar, Clock3, Film, MapPin, Mail, Phone, Search, ShieldCheck, Sparkles, Star, Tag, Wand2 } from 'lucide-react';

const About = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-neutral-950 text-slate-100 font-sans">
      <Navbar />

      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,rgba(249,115,22,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.10)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute -top-28 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.22),transparent_60%)]" />
          <div className="absolute top-24 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.18),transparent_60%)] blur-2xl" />
          <div className="absolute bottom-0 right-0 h-[34rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.10),transparent_60%)] blur-2xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.85))]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-[1px] bg-gradient-to-r from-orange-400/35 via-amber-300/25 to-yellow-200/10 shadow-[0_0_80px_rgba(249,115,22,0.06)]">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_90px_rgba(249,115,22,0.08)]">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-orange-400/20 bg-orange-500/10 text-orange-200 text-sm font-semibold">
                  <Sparkles size={16} />
                  ReelSense
                </div>

                <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                  About ReelSense
                  <span className="block bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-200 bg-clip-text text-transparent">
                    premium AI movie discovery
                  </span>
                </h1>

                <p className="mt-3 text-slate-300/90 max-w-2xl leading-relaxed">
                  Search fast. Get AI insights. Discover confidently. Designed as a clean, modern movie search experience.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border border-orange-400/25 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-200">
                    Top Rated TV Shows
                  </span>
                  <span className="inline-flex items-center rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
                    Popular Movies
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                    Taste-match UX
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:w-[460px]">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Taste</div>
                  <div className="mt-2 text-2xl font-bold text-orange-200">Tailored</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-widest">UX</div>
                  <div className="mt-2 text-2xl font-bold text-amber-200">Instant</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Session</div>
                  <div className="mt-2 text-2xl font-bold text-yellow-200">7 Days</div>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Value cards */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_70px_rgba(249,115,22,0.06)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-400/20">
                <Wand2 size={20} className="text-orange-200" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">Our Mission</h2>
              <p className="mt-2 text-slate-300/90 leading-relaxed">
                Match movies to your taste with AI explanations that feel clear and useful—not random.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_70px_rgba(249,115,22,0.06)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-400/20">
                <Film size={20} className="text-orange-200" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">What We Offer</h2>
              <p className="mt-2 text-slate-300/90 leading-relaxed">
                Premium sections like Top Rated TV Shows and Popular Movies, plus AI-driven recommendations.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_70px_rgba(249,115,22,0.06)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-400/20">
                <ShieldCheck size={20} className="text-orange-200" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">Secure by Design</h2>
              <p className="mt-2 text-slate-300/90 leading-relaxed">
                Auth tokens + refresh support to keep your session smooth and protected.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-2xl bg-orange-500/10 border border-orange-400/20">
                <Film size={18} className="text-orange-200" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
                Our Story
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-orange-300/50 via-amber-200/20 to-transparent" />

              <div className="space-y-8">
                <div className="relative pl-10">
                  <div className="absolute left-3 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500/10 border border-orange-400/30 text-xs font-bold text-orange-200">
                    2023
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                        <Calendar size={14} className="text-amber-200" />
                        Founded with a catalog idea
                      </div>
                    </div>
                    <p className="mt-3 text-slate-300/90 leading-relaxed">
                      ReelSense began with a simple goal: make discovering movies and TV feel effortless and instantly rewarding.
                    </p>
                  </div>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-3 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500/10 border border-orange-400/30 text-xs font-bold text-orange-200">
                    AI
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-200">
                      <Wand2 size={14} />
                      Taste-match intelligence
                    </div>
                    <p className="mt-3 text-slate-300/90 leading-relaxed">
                      We focus on clarity: recommendations that feel understandable, not overwhelming.
                    </p>
                  </div>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-3 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500/10 border border-orange-400/30 text-xs font-bold text-orange-200">
                    UX
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
                      <ShieldCheck size={14} />
                      Secure, premium sessions
                    </div>
                    <p className="mt-3 text-slate-300/90 leading-relaxed">
                      Refresh-token support and polished UI patterns keep your experience smooth and professional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-2xl bg-orange-500/10 border border-orange-400/20">
                <Search size={18} className="text-orange-200" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
                Key Features
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-orange-500/10 blur-2xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-200">
                    <Tag size={14} />
                    Premium clarity
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-slate-100">
                    Cinematic glass UX,
                    <span className="block bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-200 bg-clip-text text-transparent">
                      designed for confidence
                    </span>
                  </h3>
                  <p className="mt-3 text-slate-300/90 leading-relaxed max-w-xl">
                    ReelSense keeps the important sections visible and makes discovery feel fast, clean, and professional.
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
                      <span className="text-slate-200">Top Rated TV Shows</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                      <span className="text-slate-200">Popular Movies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-200" />
                      <span className="text-slate-200">AI-driven taste matching</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 grid sm:grid-cols-2 gap-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:shadow-[0_0_70px_rgba(249,115,22,0.08)] transition-shadow">
                  <Star size={20} className="text-amber-200" />
                  <h3 className="mt-3 font-semibold">Curated Sections</h3>
                  <p className="mt-2 text-slate-300/90">Top Rated and Popular lists that never disappear.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:shadow-[0_0_70px_rgba(249,115,22,0.08)] transition-shadow">
                  <Sparkles size={20} className="text-orange-200" />
                  <h3 className="mt-3 font-semibold">AI Explanations</h3>
                  <p className="mt-2 text-slate-300/90">You’ll understand why each suggestion fits.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:shadow-[0_0_70px_rgba(249,115,22,0.08)] transition-shadow">
                  <Tag size={20} className="text-orange-200" />
                  <h3 className="mt-3 font-semibold">Rich Metadata</h3>
                  <p className="mt-2 text-slate-300/90">Genres, runtime, year, and more.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:shadow-[0_0_70px_rgba(249,115,22,0.08)] transition-shadow">
                  <Calendar size={20} className="text-amber-200" />
                  <h3 className="mt-3 font-semibold">Fast Discovery</h3>
                  <p className="mt-2 text-slate-300/90">Search UX designed to feel instant.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:shadow-[0_0_70px_rgba(249,115,22,0.08)] transition-shadow">
                  <ShieldCheck size={20} className="text-orange-200" />
                  <h3 className="mt-3 font-semibold">Protected Sessions</h3>
                  <p className="mt-2 text-slate-300/90">Refresh token support for longer use.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:shadow-[0_0_70px_rgba(249,115,22,0.08)] transition-shadow">
                  <Wand2 size={20} className="text-amber-200" />
                  <h3 className="mt-3 font-semibold">Taste Matching</h3>
                  <p className="mt-2 text-slate-300/90">Recommendations feel personal, not generic.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_70px_rgba(249,115,22,0.06)]">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
                Get in touch
              </h2>
              <p className="mt-2 text-slate-300/90 leading-relaxed">
                Questions, feedback, or suggestions? Send a message—we’ll review it.
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm text-slate-300/90">Name</span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoComplete="name"
                      className="mt-2 w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-orange-300/40"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm text-slate-300/90">Email</span>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      inputMode="email"
                      className="mt-2 w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-orange-300/40"
                      placeholder="you@example.com"
                      type="email"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm text-slate-300/90">Message</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    required
                    autoComplete="off"
                    className="mt-2 w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-orange-300/40"
                    placeholder="Write your message..."
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-orange-400 to-amber-300 text-slate-950 py-3 font-semibold shadow-lg shadow-orange-500/12 hover:shadow-orange-500/20 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <h2 className="text-2xl font-bold">Contact info</h2>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                <Clock3 size={14} className="text-amber-200" />
                Reply within 24 hours
              </div>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Mail className="text-orange-200 mt-0.5" size={18} />
                  <div>
                    <div className="text-sm text-slate-300/90">Email</div>
                    <div className="font-semibold">{'asjadfarooq22@gmail.com'}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Phone className="text-orange-200 mt-0.5" size={18} />
                  <div>
                    <div className="text-sm text-slate-300/90">Phone</div>
                    <div className="font-semibold">{'+966 50 8630876'}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <MapPin className="text-orange-200 mt-0.5" size={18} />
                  <div>
                    <div className="text-sm text-slate-300/90">Location</div>
                    <div className="font-semibold">Hollywood, CA</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/15 p-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-300/70">
                  Social
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  <span className="px-3 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 text-sm">Facebook</span>
                  <span className="px-3 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 text-sm">Twitter</span>
                  <span className="px-3 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 text-sm">Instagram</span>
                  <span className="px-3 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 text-sm">LinkedIn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

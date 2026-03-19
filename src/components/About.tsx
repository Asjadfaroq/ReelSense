import { useState } from 'react';
import Navbar from './Navbar';
import { Calendar, Film, Mail, Phone, Search, ShieldCheck, Sparkles, Star, Tag, Wand2 } from 'lucide-react';

const About = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-neutral-950 text-slate-100 font-sans">
      <Navbar />

      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-28 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.22),transparent_60%)]" />
          <div className="absolute top-24 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.18),transparent_60%)] blur-2xl" />
          <div className="absolute bottom-0 right-0 h-[34rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.10),transparent_60%)] blur-2xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.85))]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:w-[460px]">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-widest">AI</div>
                  <div className="mt-2 text-2xl font-bold text-orange-200">Smart</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-widest">UX</div>
                  <div className="mt-2 text-2xl font-bold text-amber-200">Clean</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Security</div>
                  <div className="mt-2 text-2xl font-bold text-yellow-200">Safe</div>
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

          {/* Features */}
          <div className="mt-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-2xl bg-orange-500/10 border border-orange-400/20">
                <Search size={18} className="text-orange-200" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
                Key Features
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <Star size={20} className="text-amber-200" />
                <h3 className="mt-3 font-semibold">Curated Sections</h3>
                <p className="mt-2 text-slate-300/90">Top Rated and Popular lists that never disappear.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <Sparkles size={20} className="text-orange-200" />
                <h3 className="mt-3 font-semibold">AI Explanations</h3>
                <p className="mt-2 text-slate-300/90">You’ll understand why each suggestion fits.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <Tag size={20} className="text-orange-200" />
                <h3 className="mt-3 font-semibold">Rich Metadata</h3>
                <p className="mt-2 text-slate-300/90">Genres, runtime, year, and more.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <Calendar size={20} className="text-amber-200" />
                <h3 className="mt-3 font-semibold">Fast Discovery</h3>
                <p className="mt-2 text-slate-300/90">Search UX designed to feel instant.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <ShieldCheck size={20} className="text-orange-200" />
                <h3 className="mt-3 font-semibold">Protected Sessions</h3>
                <p className="mt-2 text-slate-300/90">Refresh token support for longer use.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <Wand2 size={20} className="text-amber-200" />
                <h3 className="mt-3 font-semibold">Taste Matching</h3>
                <p className="mt-2 text-slate-300/90">Recommendations feel personal, not generic.</p>
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
                      className="mt-2 w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-orange-300/40"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm text-slate-300/90">Email</span>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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

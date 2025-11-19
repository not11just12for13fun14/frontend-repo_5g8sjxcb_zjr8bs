import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Aurora / Gradient layers */}
      <div className="pointer-events-none absolute -inset-20 blur-3xl">
        <div className="absolute top-10 left-1/4 w-[40rem] h-[40rem] rounded-full bg-purple-600/20 mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[36rem] h-[36rem] rounded-full bg-fuchsia-500/20 mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 right-10 w-[28rem] h-[28rem] rounded-full bg-cyan-400/20 mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs text-purple-100">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open for collaborations & exciting ideas
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] drop-shadow-[0_0_40px_rgba(168,85,247,0.35)]">
            Crafting immersive, futuristic web experiences
          </h1>
          <p className="mt-6 text-lg md:text-xl text-purple-100/90 max-w-2xl mx-auto">
            A portfolio that blends 3D, motion, and elegant UI to showcase projects, skills, and stories.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white transition-colors shadow-lg shadow-fuchsia-600/20">
              Explore Projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 backdrop-blur bg-white/10 text-white hover:bg-white/20 transition-colors">
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* Glowing stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left"
        >
          {[
            { k: 'Projects', v: '12+' },
            { k: 'Technologies', v: '25+' },
            { k: 'Experience', v: '3+ yrs' },
            { k: 'Testimonials', v: '5★' },
          ].map((it) => (
            <div key={it.k} className="rounded-2xl border border-white/10 bg-white/5/50 backdrop-blur p-4">
              <div className="text-2xl font-semibold text-white">{it.v}</div>
              <div className="text-sm text-purple-200/90">{it.k}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient mask */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
    </section>
  );
}

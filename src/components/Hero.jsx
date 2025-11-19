import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 text-center px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]">
          Futuristic Portfolio
        </h1>
        <p className="mt-6 text-lg md:text-xl text-purple-100/90 max-w-2xl mx-auto">
          Neon aesthetics, glassmorphism, and smooth motion. Explore projects, skills, and more.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#projects" className="px-5 py-3 rounded-xl bg-purple-500/90 hover:bg-purple-400 text-white transition-colors">
            View Projects
          </a>
          <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 backdrop-blur bg-white/10 text-white hover:bg-white/20 transition-colors">
            Contact
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
    </section>
  );
}

import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/60 backdrop-blur border-b border-white/10">
        <nav className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold">Neon.Portfolio</a>
          <div className="hidden sm:flex gap-6 text-sm text-purple-100/90">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#certificates" className="hover:text-white">Certificates</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <Hero />
        <div className="mx-auto max-w-6xl">
          <Projects />
          <Skills />
          <Testimonials />
          <Certificates />

          <section id="contact" className="py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact</h2>
            <ContactForm />
          </section>
        </div>
      </main>

      <footer className="px-6 py-10 border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-6xl flex items-center justify-between text-sm text-purple-200/80">
          <p>© {new Date().getFullYear()} Neon Portfolio</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ContactForm() {
  const API = import.meta.env.VITE_BACKEND_URL || '';
  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    };
    const res = await fetch(`${API}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (res.ok) {
      alert('Thanks! I will get back to you.');
      e.currentTarget.reset();
    } else {
      alert('Please try again later.');
    }
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
      <input name="name" required placeholder="Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500" />
      <input type="email" name="email" required placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500" />
      <textarea name="message" required placeholder="Message" rows={4} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500" />
      <button className="justify-self-start px-5 py-3 rounded-xl bg-purple-500/90 hover:bg-purple-400 text-white">Send</button>
    </form>
  );
}

export default App
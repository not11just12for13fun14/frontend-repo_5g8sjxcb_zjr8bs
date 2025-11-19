import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || '';

export default function Testimonials() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${API}/api/testimonials`).then(r => r.json()).then(d => setItems(d.items || [])).catch(console.error);
  }, []);

  return (
    <section id="testimonials" className="relative py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Testimonials</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t) => (
          <blockquote key={t.id} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <p className="text-purple-50/90">“{t.quote}”</p>
            <footer className="mt-4 text-purple-200 text-sm">{t.name}{t.role ? ` • ${t.role}` : ''}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

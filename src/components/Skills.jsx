import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || '';

export default function Skills() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${API}/api/skills`).then(r => r.json()).then(d => setItems(d.items || [])).catch(console.error);
  }, []);

  return (
    <section id="skills" className="relative py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((s) => (
          <div key={s.id} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">{s.name}</h3>
              <span className="text-purple-200 text-sm">{s.category}</span>
            </div>
            <div className="mt-3 h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500" style={{ width: `${s.level || 0}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

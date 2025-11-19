import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || '';

export default function Certificates() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${API}/api/certificates`).then(r => r.json()).then(d => setItems(d.items || [])).catch(console.error);
  }, []);

  return (
    <section id="certificates" className="relative py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Certificates</h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {items.map((c) => (
          <a key={c.id} href={c.image || '#'} target="_blank" className="mb-6 inline-block w-full break-inside-avoid">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              {c.image && <img src={c.image} alt={c.title} className="w-full" />}
              <div className="p-4">
                <h3 className="text-white font-semibold">{c.title}</h3>
                <p className="text-purple-200 text-sm">{c.issuer} • {c.issueDate}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

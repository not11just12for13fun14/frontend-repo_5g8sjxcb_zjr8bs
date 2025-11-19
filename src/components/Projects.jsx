import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || '';

export default function Projects() {
  const [data, setData] = useState({ items: [], total: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API}/api/projects?published=true`);
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="projects" className="relative py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Projects</h2>
      {loading ? (
        <div className="text-purple-200">Loading...</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 hover:border-purple-400/40 transition-all">
              {p.images?.[0] && (
                <img src={p.images[0]} alt={p.title} className="rounded-xl aspect-video object-cover mb-3" />
              )}
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-purple-100/80 text-sm mt-1 line-clamp-3">{p.shortDesc}</p>
              <div className="mt-4 flex gap-3">
                {p.liveDemoUrl && (
                  <a href={p.liveDemoUrl} target="_blank" className="px-3 py-2 rounded-lg bg-purple-500/80 hover:bg-purple-500 text-white text-sm">Live Demo</a>
                )}
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" className="px-3 py-2 rounded-lg border border-white/20 text-white/90 hover:bg-white/10 text-sm">View Source</a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

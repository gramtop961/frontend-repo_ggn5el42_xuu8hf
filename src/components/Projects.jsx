import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Dashboard Analitik',
    desc: 'Visualisasi data real-time dengan chart interaktif dan tema gelap.',
    tags: ['React', 'Tailwind', 'Recharts'],
    link: '#',
  },
  {
    title: 'Landing Page Startup',
    desc: 'Desain berani dengan efek parallax dan framer-motion yang halus.',
    tags: ['Vite', 'Framer Motion', 'SEO'],
    link: '#',
  },
  {
    title: 'E-commerce Mini',
    desc: 'Katalog produk, keranjang, dan checkout sederhana dengan integrasi API.',
    tags: ['React Router', 'REST API'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="work" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Proyek Pilihan
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6 relative z-10">
                <h3 className="text-white font-semibold text-xl mb-2">{p.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

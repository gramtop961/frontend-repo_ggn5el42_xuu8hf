import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Tentang Saya</h2>
          <p className="text-slate-300 leading-relaxed">
            Saya fokus pada pembuatan antarmuka yang cepat, estetis, dan dapat diakses.
            Saya gemar mengintegrasikan animasi yang bermakna untuk memperkaya pengalaman pengguna tanpa mengorbankan performa.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Di waktu luang, saya bereksperimen dengan WebGL, Spline, dan motion design untuk membawa interaktivitas ke level berikutnya.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-purple-500/10 p-6"
        >
          <ul className="grid grid-cols-2 gap-3 text-slate-200">
            {['UI Engineering','Animation','3D & WebGL','Performance','Accessibility','Design Systems'].map(s => (
              <li key={s} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">{s}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

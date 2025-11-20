import { motion } from 'framer-motion'
import { Code2, Library, Rocket, Zap } from 'lucide-react'

const skills = [
  { icon: <Code2 size={20} />, title: 'Front-end', items: ['React', 'Vite', 'TypeScript', 'Tailwind'] },
  { icon: <Library size={20} />, title: 'UI/UX', items: ['Design System', 'A11y', 'Figma', 'Motion'] },
  { icon: <Rocket size={20} />, title: 'Tools', items: ['Git', 'CI/CD', 'Vite', 'Testing'] },
  { icon: <Zap size={20} />, title: 'Extras', items: ['Spline', 'Three.js', 'Framer Motion', 'GSAP'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-slate-950">
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Keahlian
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-2 text-slate-200 mb-3">
                <span className="p-2 rounded-lg bg-white/10 border border-white/10">{s.icon}</span>
                <h3 className="text-white font-semibold">{s.title}</h3>
              </div>
              <ul className="text-slate-300 text-sm space-y-1">
                {s.items.map(i => <li key={i}>• {i}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

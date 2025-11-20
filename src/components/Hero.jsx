import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-slate-200">Tersedia untuk freelance</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
            Portofolio Interaktif dengan Sentuhan 3D
          </h1>
          <p className="mt-5 text-lg text-slate-200/90 max-w-xl">
            Saya seorang developer front-end yang suka menggabungkan estetika dan performa. Gulir ke bawah untuk melihat proyek, teknologi favorit, dan cara menghubungi saya.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/30 transition-colors">
              Lihat Proyek
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/10 backdrop-blur-sm transition-colors">
              Hubungi Saya
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <div className="h-[480px] rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-purple-500/20 border border-white/10 backdrop-blur-md p-6">
            <div className="text-slate-200">
              <p className="font-medium">Interaktif, modern, dan responsif</p>
              <p className="text-sm opacity-80">Scene 3D di belakang bisa diinteraksi: klik, drag, dan eksplorasi.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-300 text-sm animate-bounce">
        Gulir ke bawah
      </div>
    </section>
  )
}

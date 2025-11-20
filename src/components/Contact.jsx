import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 p-8 bg-white/5"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Mari Berkolaborasi</h2>
          <p className="text-slate-300 mb-6">Punya ide proyek atau butuh bantuan membangun antarmuka? Kirimkan pesan, saya akan segera membalas.</p>

          <form className="grid sm:grid-cols-2 gap-4">
            <input placeholder="Nama" className="bg-slate-800/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input placeholder="Email" className="bg-slate-800/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Pesan" rows={4} className="sm:col-span-2 bg-slate-800/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="button" onClick={() => alert('Terima kasih! Pesan demo terkirim.')} className="sm:col-span-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/30 transition-colors">Kirim Pesan</button>
          </form>
        </motion.div>

        <p className="text-center text-slate-400 text-sm mt-6">© 2025 Nama Anda. Dibuat dengan cinta dan animasi.</p>
      </div>
    </section>
  )
}

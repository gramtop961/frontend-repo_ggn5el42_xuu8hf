import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-slate-200 hover:text-white/90 transition-colors px-3 py-2 rounded-md"
  >
    {children}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 shadow-lg shadow-blue-500/20" />
          <span className="text-white font-semibold tracking-tight">My Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink href="#work">Proyek</NavLink>
          <NavLink href="#about">Tentang</NavLink>
          <NavLink href="#skills">Keahlian</NavLink>
          <NavLink href="#contact">Kontak</NavLink>
          <div className="w-px h-6 bg-white/10 mx-2" />
          <a href="mailto:hello@example.com" className="text-slate-200 hover:text-white transition-colors p-2" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-white transition-colors p-2" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-white transition-colors p-2" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </nav>

        <button className="md:hidden text-white p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 space-y-1">
            <NavLink href="#work" onClick={close}>Proyek</NavLink>
            <NavLink href="#about" onClick={close}>Tentang</NavLink>
            <NavLink href="#skills" onClick={close}>Keahlian</NavLink>
            <NavLink href="#contact" onClick={close}>Kontak</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

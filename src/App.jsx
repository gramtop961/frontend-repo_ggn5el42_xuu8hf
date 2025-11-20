import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.06),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(168,85,247,0.06),transparent_35%)]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App

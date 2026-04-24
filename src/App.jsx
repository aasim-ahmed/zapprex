import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustElements from './components/TrustElements'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

/* ─── Shared background layer ────────────────────────────── */
function Background() {
  return (
    <>
      {/* Grid */}
      <div className="fixed inset-0 pointer-events-none bg-grid opacity-100" />

      {/* Orb top-center */}
      <div
        className="fixed pointer-events-none float-orb"
        style={{
          top: '-180px', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)',
          filter: 'blur(56px)',
        }}
      />

      {/* Orb bottom-right */}
      <div
        className="fixed pointer-events-none float-orb-alt"
        style={{
          bottom: '-80px', right: '-80px',
          width: '480px', height: '480px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.11) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
      />

      {/* Orb left */}
      <div
        className="fixed pointer-events-none"
        style={{
          bottom: '25%', left: '-60px',
          width: '340px', height: '340px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </>
  )
}

/* ─── Section divider ────────────────────────────────────── */
function Divider() {
  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-5">
      <div className="section-divider" />
    </div>
  )
}

/* ─── Root App ───────────────────────────────────────────── */
export default function App() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden flex flex-col items-center"
      style={{ background: 'linear-gradient(160deg, #03071a 0%, #060d1f 45%, #0a1628 100%)' }}
    >
      <Background />
      <Navbar />

      <main className="w-full flex flex-col items-center">
        <Hero />

        <Divider />

        <Services />
        <Divider />

        {/* <Portfolio /> */}
        <Divider />

        <HowItWorks />
        <Divider />

        <Pricing />
        <Divider />

        <FAQ />
        <Divider />

        <FinalCTA />
        
      </main>

      <Footer />
      <FloatingContact />
    </div>
  )
}

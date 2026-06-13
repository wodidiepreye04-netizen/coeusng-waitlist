import { motion } from 'framer-motion'
import MeshGradient from './components/MeshGradient'
import Logo from './components/Logo'
import HeroSection from './components/HeroSection'
import WaitlistForm from './components/WaitlistForm'
import SoothingVisual from './components/SoothingVisual'
import AboutSection from './components/AboutSection'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'
import BreathingOrb from './components/BreathingOrb'
import SectionDivider from './components/SectionDivider'

export default function App() {
  return (
    <>
      {/* Animated background layer */}
      <MeshGradient />

      {/* Main UI Container */}
      <div className="relative z-10 flex flex-col items-center min-h-screen w-full overflow-x-hidden">
        
        {/* Top Header - Centralized Logo */}
        <header className="w-full flex justify-center pt-12 sm:pt-20 pb-6">
          <Logo />
        </header>

        {/* Hero Section - Fully Centralized with ambient background glow */}
        <main className="relative flex-1 w-full flex flex-col items-center px-8 sm:px-16 md:px-20 lg:px-24 pt-4 sm:pt-8 pb-24">
          
          {/* Ambient soothing glow behind hero content */}
          <SoothingVisual />

          <div className="relative z-10 flex flex-col items-center text-center w-full max-w-xl mx-auto space-y-10">
            
            {/* Hero Copy (Centered Headline & Subheadline) */}
            <HeroSection />
            
            {/* Inline Waitlist Form */}
            <div className="w-full max-w-md mx-auto">
              <WaitlistForm />
            </div>

            {/* Animated scroll-down indicator */}
            <motion.a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-white/30 hover:text-turquoise transition-colors duration-500 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <span className="text-xs font-medium tracking-widest uppercase">Learn more</span>
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </motion.svg>
            </motion.a>

          </div>
        </main>

        <SectionDivider />

        {/* Warm Human Illustration Accent */}
        <motion.div
          className="flex justify-center px-8 py-6 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/illustrations/hero-accent.png"
            alt="Calm connection illustration"
            className="w-full max-w-xs sm:max-w-sm h-auto object-contain rounded-3xl shadow-2xl shadow-amber-soft"
          />
        </motion.div>

        <SectionDivider />

        {/* Breathing Orb Section */}
        <section className="w-full py-8 flex justify-center">
          <BreathingOrb />
        </section>

        <SectionDivider />

        {/* Scroll Section: About */}
        <section id="about" className="w-full flex justify-center px-8 sm:px-16 md:px-20 lg:px-24 py-24 relative">
          <div className="w-full max-w-2xl">
            <AboutSection />
          </div>
        </section>

        <SectionDivider />

        {/* Scroll Section: Social Proof */}
        <section className="w-full flex justify-center px-8 sm:px-16 md:px-20 lg:px-24 py-24 relative">
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SocialProof />
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  )
}

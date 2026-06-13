import { motion } from 'framer-motion'

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function HeroSection() {
  return (
    <div className="mb-4 text-center w-full">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={0.15}
      >
        You've been{' '}
        <span className="relative inline-block">
          <span className="relative z-10 text-gradient-amber">"Fine"</span>
          <motion.span
            className="absolute bottom-0.5 left-0 w-full h-2.5 bg-amber/25 rounded-full -z-0 blur-xs"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
          />
        </span>
        <br />
        <span className="text-emotional font-normal text-white/90">for too long.</span>
      </motion.h1>

      <motion.p
        className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-md mx-auto font-medium"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={0.35}
      >
        COEUS gives you someone to talk to, anytime, and a real therapist when you need more. Built for Africans and Nigerians who are tired of pretending they're fine.
      </motion.p>
    </div>
  )
}

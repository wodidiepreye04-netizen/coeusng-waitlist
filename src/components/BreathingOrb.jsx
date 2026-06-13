import { motion } from 'framer-motion'

export default function BreathingOrb() {
  return (
    <div className="relative flex flex-col items-center justify-center p-8 rounded-3xl glass-panel w-48 h-48 mx-auto overflow-hidden">
      {/* Outer pulsing glow ring */}
      <motion.div
        className="absolute inset-2 border-2 border-dashed rounded-full"
        animate={{
          scale: [0.9, 1.15, 0.9],
          borderColor: [
            'rgba(78, 224, 211, 0.2)',
            'rgba(245, 193, 108, 0.25)',
            'rgba(78, 224, 211, 0.2)'
          ],
          rotate: 360,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main pulsing orb */}
      <div className="relative flex items-center justify-center w-20 h-20">
        {/* Soft background glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-radial from-turquoise/40 to-transparent blur-md"
          animate={{
            scale: [0.8, 1.4, 0.8],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Core solid circle */}
        <motion.div
          className="w-8 h-8 rounded-full bg-gradient-to-tr from-turquoise to-[#2AF0DF] shadow-[0_0_20px_var(--color-turquoise-glow-strong)]"
          animate={{
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Breathing Guide text */}
      <motion.span
        className="mt-4 text-xs font-semibold tracking-widest uppercase"
        animate={{
          opacity: [0.4, 1, 0.4],
          color: [
            'rgba(78, 224, 211, 0.8)',
            'rgba(245, 193, 108, 0.9)',
            'rgba(78, 224, 211, 0.8)'
          ]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        Breathe.
      </motion.span>
    </div>
  )
}

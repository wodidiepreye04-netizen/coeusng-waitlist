import { motion } from 'framer-motion'

/**
 * Ambient background visual — positioned absolutely behind the hero content.
 * Creates a soft, calming glow that provides atmosphere without occupying layout space.
 */
export default function SoothingVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Primary pulsing glow */}
      <motion.div 
        className="w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-teal-deep to-turquoise blur-[120px] opacity-20 absolute"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      {/* Secondary offset glow for depth */}
      <motion.div 
        className="w-[20rem] h-[20rem] rounded-full bg-turquoise/10 blur-[100px] absolute translate-y-20"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}

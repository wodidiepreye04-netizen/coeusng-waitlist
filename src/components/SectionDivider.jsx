import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-8 select-none pointer-events-none" aria-hidden="true">
      <div className="relative w-32 h-[1px]">
        {/* Background gradient line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-turquoise/30 to-transparent" />
        
        {/* Secondary warm gradient line layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber/20 to-transparent mix-blend-screen" />
        
        {/* Soft glowing point at the center */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-radial from-amber/45 to-transparent blur-xs"
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  )
}

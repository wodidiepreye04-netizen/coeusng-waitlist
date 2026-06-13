import { motion } from 'framer-motion'

export default function MagneticButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      onClick={onClick}
      className={`waitlist-btn w-full sm:w-auto px-8 py-4 rounded-full text-lg shadow-[0_0_40px_rgba(78,224,211,0.3)] hover:shadow-[0_0_60px_rgba(78,224,211,0.5)] transition-shadow ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

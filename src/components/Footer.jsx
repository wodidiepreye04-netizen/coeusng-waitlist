import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="text-center py-8 mt-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      <p className="text-xs sm:text-sm text-white/30 font-medium">
        © {new Date().getFullYear()} COEUSng · Built with care in Port Harcourt 🇳🇬
      </p>
    </motion.footer>
  )
}

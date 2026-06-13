import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src="/logo.png"
        alt="COEUSng — Mind growth logo"
        className="w-24 h-24 sm:w-28 sm:h-28 object-contain shrink-0 drop-shadow-2xl"
        width="112"
        height="112"
      />
    </motion.div>
  )
}

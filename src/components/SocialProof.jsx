import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * CUSTOMIZATION:
 * 
 * 1. Replace avatar images: drop your photos into /public/avatars/ as avatar-1.png, avatar-2.png, etc.
 * 2. Replace testimonials: update the `testimonials` array below with your actual quotes.
 */

// Avatar config — replace src with your actual image paths
const avatars = [
  { src: '/avatars/avatar-1.png', initial: 'A', color: 'var(--color-teal-deep)' },
  { src: '/avatars/avatar-2.png', initial: 'C', color: 'var(--color-amber)' },
  { src: '/avatars/avatar-3.png', initial: 'K', color: 'var(--color-teal-mid)' },
  { src: '/avatars/avatar-4.png', initial: 'O', color: 'rgba(245, 193, 108, 0.4)' },
  { src: '/avatars/avatar-5.png', initial: 'E', color: 'var(--color-turquoise)' },
]

// Placeholder testimonials — replace with your actual quotes
const testimonials = [
  { quote: "I didn't know I needed this until I saw it.", name: "Amara", city: "Lagos" },
  { quote: "Finally, something that feels like it was made for us.", name: "Chidi", city: "Abuja" },
  { quote: "A safe space? Count me in.", name: "Kemi", city: "Port Harcourt" },
]

const ROTATION_INTERVAL = 5000

function Avatar({ src, initial, color }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="avatar-fallback flex items-center justify-center text-xs font-semibold text-white/95"
        style={{ backgroundColor: color }}
      >
        {initial}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt=""
      onError={() => setFailed(true)}
    />
  )
}

export default function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, ROTATION_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="text-center flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Avatar stack + counter wrapped in a subtle glass pill */}
      <div className="inline-flex items-center justify-center gap-3 mb-6 px-5 py-2 glass-panel rounded-full">
        <div className="avatar-stack">
          {avatars.map((avatar, i) => (
            <Avatar key={i} {...avatar} />
          ))}
        </div>
        <p className="text-sm sm:text-base font-medium text-white/70">
          <span className="text-turquoise font-semibold">100+</span> people already waiting
        </p>
      </div>

      {/* Rotating testimonial */}
      <div className="h-14 sm:h-12 flex items-center justify-center overflow-hidden w-full">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeIndex}
            className="text-sm sm:text-base text-white/80 max-w-sm mx-auto text-emotional"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            "{testimonials[activeIndex].quote}"
            <span className="font-sans not-italic text-xs sm:text-sm text-white/40 ml-1.5 block sm:inline mt-1 sm:mt-0 tracking-wide font-normal">
              — {testimonials[activeIndex].name}, {testimonials[activeIndex].city}
            </span>
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

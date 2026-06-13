import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        Why we're building this
      </motion.h2>

      <div className="glass-panel border border-white/5 rounded-3xl p-8 sm:p-12 w-full relative overflow-hidden shadow-2xl">
        {/* Soft, soothing background glows */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-turquoise/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-deep/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 space-y-8 text-white/70 text-sm sm:text-base md:text-lg leading-relaxed font-medium text-left">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Most young Nigerians have never had a real conversation about how they're actually doing. Not because they don't want to. Because therapy is expensive, conversations about mental health still carry shame, and most people don't even know where to start.
          </motion.p>
          
          <motion.p
            className="text-white font-bold text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            COEUS exists to close that gap.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            It combines an AI companion you can talk to whenever you need it, with access to licensed therapists when things go beyond what a conversation can hold. <span className="text-emotional text-white/90 font-normal">No judgment. No waiting weeks for an appointment. No pretending you have it all figured out.</span>
          </motion.p>
          
          <motion.p
            className="pt-6 border-t border-white/10 text-emotional text-gradient-amber text-base sm:text-lg md:text-xl font-normal leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            We built this because we believe support shouldn't be a luxury, and asking for help shouldn't be a confession.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

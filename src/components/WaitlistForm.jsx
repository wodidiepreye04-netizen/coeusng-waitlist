import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { submitEmail } from '../lib/mailchimp'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isValidEmail || status === 'loading') return
    setStatus('loading')
    setErrorMsg('')
    try {
      await submitEmail(email)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="w-full flex flex-col items-center text-center">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            className="w-full py-4 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-center gap-2.5 mb-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-turquoise/20 text-turquoise text-sm font-bold">
                ✓
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">You're in.</h3>
            </div>
            <p className="text-white/60 text-sm sm:text-base max-w-sm mx-auto">
              Welcome to the beginning of something important. We'll be in touch soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="w-full flex flex-col space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="waitlist-pill-container w-full">
              <input
                type="email"
                className="waitlist-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === 'error') setStatus('idle')
                }}
                required
              />
              <button
                type="submit"
                className="waitlist-btn shrink-0"
                disabled={!isValidEmail || status === 'loading'}
              >
                {status === 'loading' ? <div className="spinner mx-auto" /> : 'Join Waitlist'}
              </button>
            </div>

            <AnimatePresence>
              {status === 'error' && (
                <motion.p
                  className="text-sm text-red-400 text-center font-medium"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {errorMsg}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        )}
      </AnimatePresence>

      <div className="mt-5 w-full">
        <p className="text-xs sm:text-sm text-white/50 mb-2">
          Early access is limited. We'll let you know the moment it opens.
        </p>
        <p className="text-xs sm:text-sm font-semibold text-turquoise/90 flex items-center justify-center gap-1.5">
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Your privacy is a priority.
        </p>
      </div>
    </div>
  )
}

const MAILCHIMP_URL = null

export async function submitEmail(email) {
  if (!MAILCHIMP_URL) {
    await new Promise(resolve => setTimeout(resolve, 1200))
    return { success: true }
  }
  return new Promise((resolve, reject) => {
    const callbackName = `mc_cb_${Date.now()}`
    const url = `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email)}&c=${callbackName}`
    window[callbackName] = (data) => {
      delete window[callbackName]
      document.head.removeChild(script)
      if (data.result === 'success') resolve({ success: true })
      else reject(new Error(data.msg || 'Subscription failed'))
    }
    const script = document.createElement('script')
    script.src = url
    script.onerror = () => {
      delete window[callbackName]
      document.head.removeChild(script)
      reject(new Error('Network error'))
    }
    document.head.appendChild(script)
  })
}

import { useState } from 'react'
import { EMAIL_REGEX } from '../constants'

// In-memory store — swap for API call when backend is ready
const emailStore = []

export function useEmailSubmit() {
  const [email,     setEmail]     = useState('')
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    if (!EMAIL_REGEX.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)

    // Simulate network latency — replace with: await api.post('/waitlist', { email })
    await new Promise((res) => setTimeout(res, 1400))

    emailStore.push({ email: email.trim(), timestamp: new Date().toISOString() })
    console.log('📧 Email captured:', email.trim())
    console.log('📋 All emails on waitlist:', emailStore)

    setLoading(false)
    setEmail('')
    setSubmitted(true)
  }

  const reset = () => {
    setSubmitted(false)
    setEmail('')
    setError('')
  }

  return {
    email, setEmail,
    loading,
    error, setError,
    submitted,
    handleSubmit,
    reset,
  }
}

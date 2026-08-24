import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase/client'

const cleanRecoveryUrl = () => {
  window.history.replaceState({}, document.title, '/reset-password')
}

export default function ResetPassword() {
  const [status, setStatus] = useState('checking')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.slice(1))
    const authError = hash.get('error_description')

    if (authError) {
      setMessage(authError.replace(/\+/g, ' '))
      setStatus('invalid')
      cleanRecoveryUrl()
      return undefined
    }

    const makeReady = (session) => {
      if (!session) return
      cleanRecoveryUrl()
      setStatus('ready')
    }

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY' || session) makeReady(session)
    })

    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        setMessage(error.message)
        setStatus('invalid')
        return
      }
      if (data.session) makeReady(data.session)
      else {
        setMessage('This password reset link is invalid or has expired. Please request a new one.')
        setStatus('invalid')
      }
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setMessage('')

    if (password.length < 8) {
      setMessage('Use at least 8 characters for your new password.')
      return
    }
    if (password !== confirmPassword) {
      setMessage('The passwords do not match.')
      return
    }

    setStatus('saving')
    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setMessage(error.message)
      setStatus('ready')
      return
    }

    await supabase.auth.signOut({ scope: 'local' })
    setStatus('success')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <section className="w-full max-w-md border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <a href="/" className="text-xl font-semibold tracking-tight text-slate-950">Naizon</a>
        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-slate-950">Reset your password</h1>

        {status === 'checking' && <p className="mt-4 text-sm text-slate-600">Checking your reset link…</p>}

        {status === 'invalid' && (
          <div className="mt-6">
            <p role="alert" className="border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">{message}</p>
            <a href="/data" className="btn-primary mt-5 w-full">Request a new reset link</a>
          </div>
        )}

        {(status === 'ready' || status === 'saving') && (
          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-slate-700">
              New password
              <input type="password" autoComplete="new-password" minLength="8" required value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full border border-slate-300 px-3 py-3 text-slate-950 outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Confirm new password
              <input type="password" autoComplete="new-password" minLength="8" required value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="mt-2 w-full border border-slate-300 px-3 py-3 text-slate-950 outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700" />
            </label>
            {message && <p role="alert" className="text-sm text-red-700">{message}</p>}
            <button type="submit" disabled={status === 'saving'} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">{status === 'saving' ? 'Updating password…' : 'Update password'}</button>
          </form>
        )}

        {status === 'success' && (
          <div className="mt-6">
            <p className="border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800">Your password has been updated. You can now sign in with the new password.</p>
            <a href="/data" className="btn-primary mt-5 w-full">Continue to sign in</a>
          </div>
        )}
      </section>
    </main>
  )
}

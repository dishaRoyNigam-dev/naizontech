import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../utils/supabase/client'

const formatDate = (value) => new Intl.DateTimeFormat('en-IN', {
  dateStyle: 'medium',
  timeStyle: 'short',
}).format(new Date(value))

export default function EnquiriesData() {
  const [session, setSession] = useState(null)
  const [checkingSession, setCheckingSession] = useState(true)
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [loginError, setLoginError] = useState('')
  const [loginNotice, setLoginNotice] = useState('')
  const [loggingIn, setLoggingIn] = useState(false)
  const [enquiries, setEnquiries] = useState([])
  const [loading, setLoading] = useState(false)
  const [dataError, setDataError] = useState('')

  const loadEnquiries = useCallback(async () => {
    setLoading(true)
    setDataError('')
    const { data, error } = await supabase
      .from('enquiries')
      .select('id,name,email,phone,service,budget,details,created_at')
      .order('created_at', { ascending: false })

    if (error) {
      setDataError('Could not load enquiries. Check that the authenticated read policy has been applied.')
      setEnquiries([])
    } else {
      setEnquiries(data ?? [])
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setCheckingSession(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (session) loadEnquiries()
    else setEnquiries([])
  }, [session, loadEnquiries])

  const login = async (event) => {
    event.preventDefault()
    setLoggingIn(true)
    setLoginError('')
    const { error } = await supabase.auth.signInWithPassword({
      email: credentials.email.trim(),
      password: credentials.password,
    })
    if (error) {
      const messages = {
        invalid_credentials: 'Email or password is incorrect. Use an account listed in Supabase Authentication → Users.',
        email_not_confirmed: 'Confirm this email address before signing in.',
        over_request_rate_limit: 'Too many login attempts. Wait a few minutes and try again.',
      }
      setLoginError(messages[error.code] ?? error.message)
    }
    setLoggingIn(false)
  }

  const sendMagicLink = async () => {
    const email = credentials.email.trim()
    setLoginError('')
    setLoginNotice('')
    if (!email) {
      setLoginError('Enter your admin email first.')
      return
    }

    setLoggingIn(true)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/data`,
        shouldCreateUser: false,
      },
    })

    if (error) setLoginError(error.message)
    else setLoginNotice('Login link sent. Open the email on this device to access the dashboard.')
    setLoggingIn(false)
  }

  const sendPasswordReset = async () => {
    const email = credentials.email.trim()
    setLoginError('')
    setLoginNotice('')
    if (!email) {
      setLoginError('Enter your admin email first.')
      return
    }

    setLoggingIn(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })

    if (error) setLoginError(error.message)
    else setLoginNotice('Password reset email sent. Open the link in the email to choose a new password.')
    setLoggingIn(false)
  }

  if (checkingSession) {
    return <main className="flex min-h-screen items-center justify-center bg-slate-50 text-sm text-slate-600">Checking access…</main>
  }

  if (!session) {
    return <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4"><section className="w-full max-w-md border border-slate-200 bg-white p-7 shadow-sm sm:p-9"><a href="/" className="text-sm font-semibold text-blue-700">← Back to website</a><p className="eyebrow mt-8">Private area</p><h1 className="text-3xl font-semibold tracking-tight text-slate-950">Contact enquiries</h1><p className="mt-3 text-sm leading-6 text-slate-600">Sign in with your Supabase admin account to view submitted contact data.</p><form onSubmit={login} className="mt-7 space-y-5"><label className="block text-sm font-medium text-slate-800">Email<input type="email" required autoComplete="email" value={credentials.email} onChange={(event) => setCredentials((current) => ({ ...current, email: event.target.value }))} className="mt-2 w-full border border-slate-300 px-3.5 py-2.5 outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"/></label><label className="block text-sm font-medium text-slate-800">Password<input type="password" required autoComplete="current-password" value={credentials.password} onChange={(event) => setCredentials((current) => ({ ...current, password: event.target.value }))} className="mt-2 w-full border border-slate-300 px-3.5 py-2.5 outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"/></label><button type="submit" disabled={loggingIn} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">{loggingIn ? 'Please wait…' : 'Sign in'}</button><button type="button" onClick={sendPasswordReset} disabled={loggingIn} className="w-full text-sm font-semibold text-blue-700 hover:underline disabled:opacity-60">Forgot password?</button><div className="flex items-center gap-3"><span className="h-px flex-1 bg-slate-200"/><span className="text-xs uppercase tracking-wider text-slate-400">or</span><span className="h-px flex-1 bg-slate-200"/></div><button type="button" onClick={sendMagicLink} disabled={loggingIn} className="btn-secondary w-full disabled:cursor-not-allowed disabled:opacity-60">Email me a login link</button>{loginError && <p role="alert" className="text-sm text-red-700">{loginError}</p>}{loginNotice && <p role="status" className="text-sm leading-6 text-emerald-700">{loginNotice}</p>}</form></section></main>
  }

  return <main className="min-h-screen bg-slate-50"><header className="border-b border-slate-200 bg-white"><div className="shell flex flex-wrap items-center justify-between gap-4 py-5"><div><p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Admin</p><h1 className="mt-1 text-2xl font-semibold text-slate-950">Contact enquiries</h1><p className="mt-1 text-xs text-slate-500">Signed in as {session.user.email}</p></div><div className="flex items-center gap-3"><button type="button" onClick={loadEnquiries} disabled={loading} className="btn-secondary">Refresh</button><button type="button" onClick={() => supabase.auth.signOut()} className="btn-primary">Sign out</button></div></div></header><section className="shell py-8"><div className="mb-5 flex items-center justify-between"><p className="text-sm text-slate-600">{enquiries.length} {enquiries.length === 1 ? 'enquiry' : 'enquiries'}</p><a href="/" className="text-link">View website</a></div>{loading && <p className="border border-slate-200 bg-white p-6 text-sm text-slate-600">Loading enquiries…</p>}{dataError && <p role="alert" className="border border-red-200 bg-red-50 p-4 text-sm text-red-700">{dataError}</p>}{!loading && !dataError && enquiries.length === 0 && <div className="border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900"><p className="font-semibold">No enquiries are visible to this account.</p><p className="mt-1 leading-6">If you already submitted the form, apply the authenticated read policy in Supabase and then select Refresh.</p></div>}{!loading && enquiries.length > 0 && <div className="overflow-x-auto border border-slate-200 bg-white"><table className="w-full min-w-[1050px] border-collapse text-left text-sm"><thead className="bg-slate-100 text-xs uppercase tracking-wider text-slate-600"><tr><th className="px-4 py-3">Received</th><th className="px-4 py-3">Name</th><th className="px-4 py-3">Contact</th><th className="px-4 py-3">Service</th><th className="px-4 py-3">Budget</th><th className="px-4 py-3">Details</th></tr></thead><tbody className="divide-y divide-slate-200">{enquiries.map((enquiry) => <tr key={enquiry.id} className="align-top hover:bg-slate-50"><td className="whitespace-nowrap px-4 py-4 text-slate-500">{formatDate(enquiry.created_at)}</td><td className="px-4 py-4 font-medium text-slate-900">{enquiry.name}</td><td className="px-4 py-4"><a className="block text-blue-700 hover:underline" href={`mailto:${enquiry.email}`}>{enquiry.email}</a><a className="mt-1 block text-blue-700 hover:underline" href={`tel:${enquiry.phone}`}>{enquiry.phone}</a></td><td className="px-4 py-4 text-slate-700">{enquiry.service}</td><td className="px-4 py-4 text-slate-700">{enquiry.budget}</td><td className="max-w-md whitespace-pre-wrap px-4 py-4 leading-6 text-slate-700">{enquiry.details}</td></tr>)}</tbody></table></div>}</section></main>
}

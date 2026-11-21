import ResetPassword from '../../components/ResetPassword'

export const metadata = {
  title: 'Reset Password | NAIZON',
  description: 'Reset your NAIZON account password.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f8f5]">
      <ResetPassword />
    </main>
  )
}

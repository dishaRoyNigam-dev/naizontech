import LegalPage from '../../components/LegalPage'

export const metadata = {
  title: 'Refund Policy | NAIZON',
  description:
    'Read the NAIZON refund and cancellation policy for recurring website plans and custom digital projects.',
  alternates: {
    canonical: 'https://naizon.in/refund-policy',
  },
}

export default function Page() {
  return <LegalPage type="refund" />
}

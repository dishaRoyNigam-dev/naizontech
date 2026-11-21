import LegalPage from '../../components/LegalPage'

export const metadata = {
  title: 'Terms of Service | NAIZON',
  description:
    'Read the terms applying to the NAIZON website and its website, application, game, design and related digital services.',
  alternates: {
    canonical: 'https://naizon.in/terms',
  },
}

export default function Page() {
  return <LegalPage type="terms" />
}

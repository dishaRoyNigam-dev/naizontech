import LegalPage from '../../components/LegalPage'

export const metadata = {
  title: 'Privacy Policy | NAIZON',
  description:
    'Read the NAIZON privacy policy for website enquiries, personal information, storage, retention and your choices.',
  alternates: {
    canonical: 'https://naizon.in/privacy',
  },
}

export default function Page() {
  return <LegalPage type="privacy" />
}

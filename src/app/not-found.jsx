import NotFound from '../components/NotFound'

export const metadata = {
  title: 'Page Not Found | NAIZON',
  description: 'The page you requested could not be found.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFoundPage() {
  return <NotFound />
}

import LocationPage from '../../../components/LocationPage'

const path = '/delhi/website-development'

export const metadata = {
  title: 'Website Development Company in Delhi | NAIZON',
  description:
    'Website development company serving Delhi businesses with responsive design, custom development, ecommerce and ongoing website support.',
  alternates: {
    canonical: `https://naizon.in${path}`,
  },
}

export default function Page() {
  return <LocationPage locationKey="delhi" path={path} />
}

import LocationPage from '../../../components/LocationPage'

const path = '/gurgaon/website-development'

export const metadata = {
  title: 'Website Development Company in Gurgaon | NAIZON',
  description:
    'Website development company serving Gurgaon businesses with custom websites, web applications, ecommerce solutions and responsive design.',
  alternates: {
    canonical: `https://naizon.in${path}`,
  },
}

export default function Page() {
  return <LocationPage locationKey="gurgaon" path={path} />
}

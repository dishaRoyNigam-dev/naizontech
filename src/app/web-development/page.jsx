import ServicePage from '../../components/ServicePage'
import { services } from '../../data/services'

const path = '/web-development'
const service = services[path]

export const metadata = {
  title: service.title,
  description: service.description,
  alternates: {
    canonical: `https://naizon.in${path}`,
  },
}

export default function Page() {
  return <ServicePage service={service} path={path} />
}

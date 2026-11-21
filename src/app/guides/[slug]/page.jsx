import { notFound } from 'next/navigation'
import ResourcePage from '../../../components/ResourcePage'
import { resources } from '../../../data/resources'

export function generateStaticParams() {
  return Object.keys(resources).map((path) => ({
    slug: path.replace('/guides/', ''),
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const path = `/guides/${slug}`
  const resource = resources[path]

  if (!resource) {
    return { title: 'Guide Not Found' }
  }

  return {
    title: resource.title,
    description: resource.description,
    alternates: {
      canonical: `https://naizon.in${path}`,
    },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  const path = `/guides/${slug}`
  const resource = resources[path]

  if (!resource) {
    notFound()
  }

  return <ResourcePage resource={resource} path={path} />
}

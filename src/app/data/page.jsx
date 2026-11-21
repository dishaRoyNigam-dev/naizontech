import EnquiriesData from '../../components/EnquiriesData'

export const metadata = {
  title: 'Contact Enquiries | NAIZON',
  description: 'Private NAIZON administration area.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f8f8f5]">
      <EnquiriesData />
    </main>
  )
}

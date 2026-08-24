import { MessageCircle } from 'lucide-react'

const whatsappUrl = 'https://wa.me/918574774647?text=Hello%20Naizon%20Digital%2C%20I%E2%80%99m%20interested%20in%20discussing%20a%20project%20with%20your%20team.%20Could%20you%20please%20assist%20me%3F'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NAIZON about digital services on WhatsApp"
      className="fixed bottom-5 right-4 z-50 inline-flex min-h-14 items-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus:outline-none focus:ring-2 focus:ring-[#128C7E] focus:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={24} aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}

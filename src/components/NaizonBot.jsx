'use client'

import { useState, useRef, useEffect } from 'react'
import {
  Bot,
  X,
  Send,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Code2,
  Cpu,
  Smartphone,
  ChevronDown,
} from 'lucide-react'

const initialBotMessages = [
  {
    sender: 'bot',
    text: 'Hello! 👋 I am **Naizon Bot**, your AI engineering assistant. How can I help you today?',
  },
  {
    sender: 'bot',
    text: 'What kind of software are you planning to build?',
  },
]

const quickPrompts = [
  { label: '🚀 Custom SaaS Platform', query: 'I want to build a custom SaaS platform.' },
  { label: '💻 Windows Desktop App', query: 'Tell me about your Windows desktop software development.' },
  { label: '📱 Mobile Application', query: 'Do you build native iOS and Android apps?' },
  { label: '🎮 Web Game & 2D Play', query: 'Can you develop interactive web games?' },
  { label: '💰 Project Cost & Timeline', query: 'How do you price software projects?' },
]

export default function NaizonBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(initialBotMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const generateBotReply = (userText) => {
    const text = userText.toLowerCase()

    if (text.includes('saas') || text.includes('cloud')) {
      return 'We build scalable, multi-tenant SaaS platforms with automated subscription billing (Stripe/Razorpay), role-based access control, analytics dashboards, and robust API microservices. Would you like to schedule a technical architecture discussion?'
    }
    if (text.includes('window') || text.includes('desktop') || text.includes('c++') || text.includes('.net')) {
      return 'We specialize in native Windows 11/10 desktop software using C++ and WinUI 3/.NET. We build high-throughput offline utilities, hardware-accelerated processing (DirectX 12), and custom enterprise tools.'
    }
    if (text.includes('game') || text.includes('2d') || text.includes('canvas')) {
      return 'Yes! We engineer HTML5 2D browser games and WebGL experiences with 60FPS fluid touch physics, custom particle systems, sound design, and casual mobile builds.'
    }
    if (text.includes('mobile') || text.includes('ios') || text.includes('android') || text.includes('app')) {
      return 'We build high-performance cross-platform and native mobile applications using Flutter and React Native, featuring real-time data sync, biometric authentication, and push notifications.'
    }
    if (text.includes('price') || text.includes('cost') || text.includes('budget') || text.includes('timeline')) {
      return 'Our pricing is milestone-based and completely transparent with zero hidden fees. Basic web utilities start with fixed sprint quotes, while full custom SaaS/desktop products are scoped during an initial discovery. You can submit your requirements in our contact form for an exact quote!'
    }
    if (text.includes('contact') || text.includes('call') || text.includes('engineer') || text.includes('talk')) {
      return 'You can share your project details directly through our Contact form below, and our senior engineering team will review your scope and get back to you within 24 hours!'
    }

    return 'Thank you for your message! Our engineering team specializes in full-cycle software—including custom SaaS, web apps, mobile apps, Windows desktop software, and web games. Feel free to fill out the contact form below or ask another question!'
  }

  const handleSend = (userText) => {
    const query = userText || input
    if (!query.trim()) return

    const newMessages = [...messages, { sender: 'user', text: query }]
    setMessages(newMessages)
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const reply = generateBotReply(query)
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }])
      setIsTyping(false)
    }, 600)
  }

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-5 right-4 z-50 sm:bottom-6 sm:right-6">
        {!isOpen ? (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open Naizon Bot AI Assistant"
            className="group flex min-h-14 items-center gap-2.5 rounded-full border border-[#fd5001]/40 bg-[#060814] px-4 py-2 text-sm font-bold text-white shadow-[0_12px_32px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#fd5001] hover:shadow-[0_12px_40px_rgba(253,80,1,0.35)] focus:outline-none"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#fd5001] to-[#ff7a3d] text-white shadow-md">
              <Bot size={22} className="transition-transform duration-300 group-hover:rotate-12" />
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[13.5px] font-bold text-white group-hover:text-[#fd5001] transition-colors">
                Naizon Bot
              </span>
              <span className="text-[10.5px] font-medium text-emerald-400">● Online Assistant</span>
            </div>
          </button>
        ) : null}

        {/* Chatbot Window Container */}
        {isOpen && (
          <div className="flex w-[340px] sm:w-[380px] h-[520px] flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0b101c] shadow-[0_24px_64px_rgba(0,0,0,0.85)] animate-in fade-in slide-in-from-bottom-4 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0f172a] px-4 py-3.5">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#fd5001] to-[#ff7a3d] text-white shadow-sm">
                  <Bot size={20} />
                  <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0f172a]" />
                </div>
                <div>
                  <h3 className="text-[14.5px] font-bold text-white flex items-center gap-1.5">
                    <span>Naizon Bot</span>
                    <span className="rounded bg-[#fd5001]/20 px-1.5 py-0.2 text-[9.5px] font-extrabold uppercase text-[#fd5001]">
                      AI
                    </span>
                  </h3>
                  <p className="text-[11px] font-medium text-neutral-400">
                    Software Engineering Assistant
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Naizon Bot"
                className="grid h-8 w-8 place-items-center rounded-lg text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth text-[13.5px]">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-[#fd5001] text-white rounded-br-none shadow-sm font-medium'
                        : 'bg-[#1e293b] text-neutral-200 rounded-bl-none border border-white/5'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-none bg-[#1e293b] px-4 py-3 text-neutral-400 border border-white/5">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 [animation-delay:0.2s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="border-t border-white/5 bg-[#090d18] px-3 py-2.5">
              <p className="mb-2 text-[10.5px] font-bold uppercase tracking-wider text-neutral-500">
                Quick Inquiries
              </p>
              <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar" style={{ scrollbarWidth: 'none' }}>
                {quickPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSend(p.query)}
                    className="flex-shrink-0 rounded-full border border-white/10 bg-[#131d30] px-3 py-1 text-[11.5px] font-semibold text-neutral-300 transition-colors hover:border-[#fd5001] hover:text-[#fd5001]"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex items-center gap-2 border-t border-white/10 bg-[#0f172a] p-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Naizon Bot anything..."
                className="flex-1 rounded-xl border border-white/10 bg-[#070b14] px-3.5 py-2.5 text-[13.5px] text-white placeholder-neutral-500 outline-none transition focus:border-[#fd5001]"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message to Naizon Bot"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#fd5001] text-white transition-all hover:bg-[#e04600] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  )
}

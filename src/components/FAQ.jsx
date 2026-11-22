'use client'

import { useState } from 'react'
import { Plus, X, ChevronRight } from 'lucide-react'
import { faqCategories } from '../data/faq'

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('general')
  const [openIndex, setOpenIndex] = useState(0)

  const activeCategoryData =
    faqCategories.find((cat) => cat.id === selectedCategory) || faqCategories[0]
  const currentQuestions = activeCategoryData.questions

  return (
    <section id="faq" className="section bg-[#f8f8f5]">
      <div className="shell">
        {/* Main Card Container */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-14 shadow-[0_12px_48px_rgba(0,0,0,0.04)]">
          
          {/* Centered Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mx-auto">FAQ</span>
            <h2 className="title">Frequently Asked Questions</h2>
            <p className="copy mt-4 text-slate-600">
              Straight answers to common questions about our website plans, custom development, mobile apps, and technical delivery.
            </p>
          </div>

          {/* 2-Column Content Layout (Category Sidebar + Question Cards) */}
          <div className="mt-10 sm:mt-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
            
            {/* Left Column: Categories List */}
            <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0">
              <div className="flex flex-row overflow-x-auto pb-2 scrollbar-none gap-2 lg:flex-col lg:overflow-visible lg:pb-0 lg:space-y-3">
                {faqCategories.map((category) => {
                  const isSelected = selectedCategory === category.id
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(category.id)
                        setOpenIndex(0) // Default open the first question of selected category
                      }}
                      className={`group flex items-center justify-between whitespace-nowrap rounded-xl px-5 py-3.5 sm:py-4 text-left text-sm sm:text-[15px] transition-all duration-200 ${
                        isSelected
                          ? 'bg-white border-2 border-blue-700 font-semibold text-blue-700 shadow-sm'
                          : 'bg-[#f8f8f6] hover:bg-white text-slate-700 hover:text-slate-950 border border-slate-200/80 font-medium'
                      }`}
                    >
                      <span>{category.name}</span>
                      <ChevronRight
                        size={17}
                        className={`ml-2 shrink-0 transition-transform ${
                          isSelected
                            ? 'text-blue-700 translate-x-0.5'
                            : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right Column: Accordion Question Cards */}
            <div className="flex-1 space-y-3.5 sm:space-y-4">
              {currentQuestions.map((item, idx) => {
                const isOpen = openIndex === idx
                return (
                  <div
                    key={item.q}
                    className={`rounded-xl border transition-all duration-200 ${
                      isOpen
                        ? 'bg-white border-blue-700/40 shadow-[0_4px_20px_rgba(0,0,0,0.05)] ring-1 ring-blue-700/10'
                        : 'bg-[#fcfcfb] hover:bg-white border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-5.5 text-left"
                    >
                      <span
                        className={`text-[15px] sm:text-base font-semibold transition-colors ${
                          isOpen ? 'text-slate-950' : 'text-slate-900'
                        }`}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        {isOpen ? <X size={17} /> : <Plus size={17} />}
                      </span>
                    </button>

                    {/* Expandable Answer Drawer */}
                    <div
                      className={`grid transition-all duration-200 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-slate-100 px-5 pb-5 pt-3.5 sm:px-5.5 sm:pb-5.5">
                          <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

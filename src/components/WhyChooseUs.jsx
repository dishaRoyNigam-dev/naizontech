import SectionHeading from './SectionHeading'
const points=[
  ['Full-cycle software development','From web pages and client SaaS to mobile, Windows apps and web games—we build the entire software stack.'],
  ['Direct communication','Speak directly with engineers about technical requirements, architecture, and sprint progress.'],
  ['Modern, maintainable stack','Engineered using proven tools like Next.js, React, Node.js, Python, C#/.NET, Flutter and cloud databases.'],
  ['SEO & high-performance built-in','Sub-second loading speeds, semantic SEO architecture, and responsive design across all screen sizes.'],
  ['Full source code ownership','Complete source code handover, clear documentation, and zero proprietary lock-in.'],
  ['Dedicated post-launch support','Continuous updates, cloud monitoring, and proactive maintenance to keep your software reliable.']
]
export default function WhyChooseUs(){return <section className="section bg-[#f2f3f1]"><div className="shell grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"><SectionHeading label="Why choose NAIZON?" title="Practical decisions. Reliable software delivery." text="We keep the process understandable and the engineering focused on what your business actually needs."/><div className="border-t border-slate-300">{points.map(([t,d])=><div key={t} className="grid gap-1 border-b border-slate-300 py-5 sm:grid-cols-[190px_1fr] sm:gap-6"><h3 className="text-sm font-semibold text-slate-950">{t}</h3><p className="text-sm leading-6 text-slate-600">{d}</p></div>)}</div></div></section>}

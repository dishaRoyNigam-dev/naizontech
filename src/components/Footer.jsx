const columns = [
  ['Services', [['Website Development', '/#services'], ['Mobile Apps', '/#services'], ['Game Development', '/#services'], ['UI/UX', '/#services']]],
  ['Company', [['About', '/#about'], ['Work', '/#work'], ['Pricing', '/#pricing'], ['Contact', '/#contact']]],
  ['Legal', [['Privacy', '/privacy'], ['Terms', '/terms'], ['Refund Policy', '/refund-policy']]],
]

export default function Footer() {
  return <footer className="bg-[#172033] py-12 text-white"><div className="shell"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]"><div><a href="/" aria-label="Naizon home"><img src="/logo/logo.svg" alt="Naizon Digital" className="h-10 w-auto max-w-[210px] object-contain brightness-0 invert"/></a><p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">Websites, applications, games and design support for practical business needs.</p></div>{columns.map(([title, items]) => <div key={title}><h3 className="text-sm font-semibold">{title}</h3><ul className="mt-4 space-y-2.5">{items.map(([label, href]) => <li key={label}><a href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</a></li>)}</ul></div>)}</div><div className="mt-10 border-t border-white/15 pt-6 text-xs text-slate-500">© 2026 Naizon Digital. All rights reserved.</div></div></footer>
}

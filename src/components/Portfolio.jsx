import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'FileWalaTool',
    category: 'Web application',
    description:
      'A practical online workspace for resizing, compressing, converting and organising image and PDF files.',
    technology: 'Responsive web · File utilities',
    image: '/images/filewalatool.png',
    imageAlt: 'FileWalaTool web application interface',
    imageWidth: 1854,
    imageHeight: 1005,
    status: 'Live product',
  },
  {
    number: '02',
    name: 'Service Application',
    category: 'Mobile application',
    description:
      'A focused mobile workflow for service requests, status updates and customer communication.',
    technology: 'Android · REST API',
    image: '/images/Service%20Application.png',
    imageAlt: 'Service application mobile interface',
    imageWidth: 941,
    imageHeight: 1672,
    imageFit: 'contain',
    status: 'App preview',
  },
  {
    number: '03',
    name: '2D Puzzle Game',
    category: 'Game development',
    description:
      'A considered mobile puzzle game concept with clear mechanics and dependable Android builds.',
    technology: 'Unity · C#',
    image: '/images/game.png',
    imageAlt: 'Color Sort mobile puzzle game screen',
    imageWidth: 292,
    imageHeight: 599,
    imageFit: 'contain',
    status: 'Game preview',
  },
]

function ProjectArtwork({ project }) {
  if (project.image) {
    return (
      <div
        className={`relative aspect-[16/10] overflow-hidden border-b border-slate-200 ${
          project.imageFit === 'contain' ? 'bg-slate-900' : 'bg-slate-100'
        }`}
      >
        <img
          src={project.image}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          decoding="async"
          alt={project.imageAlt}
          className={`h-full w-full transition-transform duration-200 group-hover:scale-[1.008] ${
            project.imageFit === 'contain' ? 'object-contain object-center' : 'object-cover object-top'
          }`}
        />
      </div>
    )
  }

  return (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-slate-200 bg-[#e9ece8]">
      <span className="absolute left-6 top-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        Project visual coming soon
      </span>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-slate-300 bg-white transition-[box-shadow,border-color] duration-150 hover:border-slate-400 hover:shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
      <ProjectArtwork project={project} />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.16em]">
          <span className="text-[#11864b]">{project.number}</span>
          <span className="text-right text-slate-500">{project.status}</span>
        </div>

        <p className="mt-8 text-sm font-medium text-slate-500">{project.category}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-[28px]">
          {project.name}
        </h3>
        <p className="mt-4 text-base leading-7 text-slate-600">{project.description}</p>

        <div className="mt-auto pt-8">
          <div className="flex items-center justify-between gap-5 border-t border-slate-200 pt-5">
            <span className="text-sm font-medium text-slate-700">{project.technology}</span>
            <a
              href="#contact"
              aria-label={`Discuss a project similar to ${project.name}`}
              className="flex h-11 w-11 shrink-0 items-center justify-center bg-slate-950 text-white transition-colors duration-200 hover:bg-[#11864b]"
            >
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Portfolio() {
  return (
    <section id="work" className="scroll-mt-24 bg-[#f5f5f1] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-6 lg:px-8 xl:px-10">
        <header className="grid gap-6 border-b border-slate-300 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#11864b]">
              Selected work
            </p>
            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
              Products built around real needs.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:justify-self-end">
            We design useful digital products with clear interfaces and dependable development. Real product
            screenshots are used where available; early-stage work is clearly labelled.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

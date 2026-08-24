import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { pathToFileURL } from 'node:url'

const root=resolve(process.cwd())
const template=await readFile(resolve(root,'dist/index.html'),'utf8')
const {render}=await import(pathToFileURL(resolve(root,'.ssr/entry-server.js')))
const pages={
  '/':['Website Development Company in Delhi & Gurgaon | NAIZON','NAIZON is a website development company serving Delhi and Gurgaon with professional web design, custom development and ecommerce solutions.'],
  '/about':['About NAIZON | Website Development & Digital Solutions','NAIZON is a website development and digital solutions company providing web design, custom development, ecommerce and mobile app services.'],
  '/website-development':['Website Development Services for Businesses | NAIZON','Custom website development services for fast, responsive and SEO-friendly business websites. Plan your website with NAIZON today.'],
  '/web-development':['Custom Web Development Services | NAIZON','Web development services for responsive websites and custom web applications, with frontend, backend and API integration expertise.'],
  '/website-design':['Professional Website Design Services | NAIZON','Professional website design and UI/UX services for clear, responsive business websites that support trust, usability and conversions.'],
  '/ecommerce-development':['Ecommerce Website Development Services | NAIZON','Ecommerce website development for responsive product discovery, smooth buying journeys and practical store management for growing businesses.'],
  '/mobile-app-development':['Mobile App Development Company | NAIZON','Mobile app development for Android and cross-platform business applications, from product planning and UI/UX to APIs, testing and launch.'],
  '/delhi/website-development':['Website Development Company in Delhi | NAIZON','Website development company serving Delhi businesses with responsive design, custom development, ecommerce and ongoing website support.'],
  '/gurgaon/website-development':['Website Development Company in Gurgaon | NAIZON','Website development company serving Gurgaon businesses with custom websites, web applications, ecommerce solutions and responsive design.'],
  '/guides':['Website Development Guides | NAIZON','Practical NAIZON guides to website development, professional web design, responsive websites, performance and technical SEO.'],
  '/guides/website-development-guide':['Website Development Guide for Businesses | NAIZON','A practical guide to website development, including planning, design, development, costs, timelines, testing and maintenance.'],
  '/guides/professional-website-design':['Professional Website Design Guide | NAIZON','Learn what makes a professional business website, how responsive design works and what to review before redesigning a website.'],
  '/guides/seo-friendly-websites':['SEO-Friendly Website Development Guide | NAIZON','A practical guide to crawlable website structure, performance, mobile usability, metadata, content and technical SEO during development.'],
}

const escape=(value)=>value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;')
for(const [path,[title,description]] of Object.entries(pages)){
  const canonical=`https://naizon.in${path==='/'?'':path}`
  const body=render(path)
  const organization={'@context':'https://schema.org','@type':'Organization','@id':'https://naizon.in/#organization',name:'NAIZON',alternateName:'NAIZON — Website Development & Digital Solutions',url:'https://naizon.in',logo:'https://naizon.in/logo/logo.svg',description:'Website development and digital solutions company creating business websites, ecommerce experiences, web applications and mobile apps.'}
  const breadcrumb=(name)=>({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://naizon.in'},{'@type':'ListItem',position:2,name,item:canonical}]})
  const schemas=path==='/'
    ? [organization,{'@context':'https://schema.org','@type':'WebSite','@id':'https://naizon.in/#website',url:'https://naizon.in',name:'NAIZON — Website Development & Digital Solutions',publisher:{'@id':'https://naizon.in/#organization'},inLanguage:'en-IN'}]
    : path.startsWith('/guides/')
      ? [{'@context':'https://schema.org','@type':'Article',headline:title.split(' | ')[0],description,mainEntityOfPage:canonical,author:{'@id':'https://naizon.in/#organization'},publisher:{'@id':'https://naizon.in/#organization'},inLanguage:'en-IN'},breadcrumb(title.split(' | ')[0])]
      : path==='/about'
        ? [organization,breadcrumb('About NAIZON')]
        : path==='/guides'
          ? [breadcrumb('Website Development Guides')]
          : [{'@context':'https://schema.org','@type':'Service',name:title.split(' | ')[0],description,url:canonical,provider:{'@id':'https://naizon.in/#organization'},areaServed:path.startsWith('/delhi/')?{'@type':'City',name:'Delhi'}:path.startsWith('/gurgaon/')?{'@type':'City',name:'Gurgaon'}:'India'},breadcrumb(title.split(' | ')[0])]
  const schemaMarkup=schemas.map(schema=>`<script type="application/ld+json" data-naizon-schema>${JSON.stringify(schema).replaceAll('<','\\u003c')}</script>`).join('')
  let html=template
    .replace(/<title>.*?<\/title>/,`<title>${escape(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\/>/,`<meta name="description" content="${escape(description)}"/>`)
    .replace(/<link rel="canonical" href="[^"]*"\/>/,`<link rel="canonical" href="${canonical}"/>`)
    .replace(/<meta property="og:title" content="[^"]*"\/>/,`<meta property="og:title" content="${escape(title)}"/>`)
    .replace(/<meta property="og:description" content="[^"]*"\/>/,`<meta property="og:description" content="${escape(description)}"/>`)
    .replace(/<meta property="og:url" content="[^"]*"\/>/,`<meta property="og:url" content="${canonical}"/>`)
    .replace('</head>',`${schemaMarkup}</head>`)
    .replace('<div id="root"></div>',`<div id="root">${body}</div>`)
  const output=path==='/'?resolve(root,'dist/index.html'):resolve(root,`dist${path}/index.html`)
  await mkdir(dirname(output),{recursive:true})
  await writeFile(output,html)
}
await rm(resolve(root,'.ssr'),{recursive:true,force:true})

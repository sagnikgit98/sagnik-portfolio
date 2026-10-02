import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { jobs } from '../data.js'
export default function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-16"><div className="max-w-[1400px] mx-auto px-4 sm:px-6">
      <SectionTitle eyebrow="Where I've worked" a="Experience" b="Log" sub="Real products, real deadlines, real code reviews." />
      <div className="grid gap-6">
        {jobs.map(j => (
          <Reveal key={j.title}><article className="card">
            <div className="flex justify-between items-center flex-wrap gap-2.5"><h3 className="font-head text-[22px] font-semibold">{j.title}</h3><span className="pill">{j.date}</span></div>
            <div className="text-acc font-medium mt-1 mb-4">{j.co}</div>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5 text-mute text-sm list-none p-0 m-0">
              {j.pts.map(p => <li key={p} className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[.62em] before:w-[5px] before:h-[5px] before:rounded-full before:bg-acc">{p}</li>)}
            </ul>
          </article></Reveal>
        ))}
      </div>
    </div></section>
  )
}

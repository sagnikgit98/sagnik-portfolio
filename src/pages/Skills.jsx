import { Chip } from '@mui/material'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { skills } from '../data.js'
export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-16"><div className="max-w-[1400px] mx-auto px-4 sm:px-6">
      <SectionTitle eyebrow="Skill set" a="Tools of the" b="Trade" sub="A practical toolkit built through 3+ years of production front-end work." />
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map(([l, t, items], i) => (
          <Reveal key={t} delay={i * 80}><div className="card h-full">
            <div className="font-mono text-[11px] text-mute mb-1.5">{l}</div>
            <h3 className="font-head text-xl font-semibold mb-3.5">{t}</h3>
            <div className="flex flex-wrap gap-2">{items.map(x => <Chip key={x} label={x} variant="outlined" size="small" sx={{ fontFamily: 'JetBrains Mono', fontSize: 11.5, '&:hover': { borderColor: 'primary.main', color: 'primary.main' } }} />)}</div>
          </div></Reveal>
        ))}
      </div>
    </div></section>
  )
}

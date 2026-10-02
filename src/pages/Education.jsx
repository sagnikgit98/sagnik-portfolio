import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
export default function Education() {
  return (
    <section id="education" className="py-20 scroll-mt-16"><div className="max-w-[1400px] mx-auto px-4 sm:px-6">
      <SectionTitle center eyebrow="Education" a="My Academic" b="Journey" sub="A technical foundation in Electronics & Communication that led me into building software for the web." />
      <Reveal><div className="card max-w-[640px] mx-auto">
        <div className="flex justify-between flex-wrap gap-2 mb-4"><span className="pill">2023</span><span className="pill">CGPA 8.82</span></div>
        <h3 className="font-head text-[22px] font-semibold">Bachelor of Technology</h3>
        <div className="text-acc text-sm">Electronics & Communication</div>
        <p className="text-mute text-sm mt-1.5">Dr. Sudhir Chandra Sur Institute of Technology, Dumdum, West Bengal</p>
      </div></Reveal>
    </div></section>
  )
}

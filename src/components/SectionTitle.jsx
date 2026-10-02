import Reveal from './Reveal.jsx'
export default function SectionTitle({ eyebrow, a, b, sub, center }) {
  return (
    <Reveal className={center ? 'text-center mx-auto' : ''}>
      <div className={`eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</div>
      <h2 className="font-head font-bold text-[clamp(30px,4.6vw,46px)] leading-[1.1] tracking-tight">{a} <em className="not-italic text-acc">{b}</em></h2>
      {sub && <p className={`text-mute mt-3 mb-10 max-w-lg ${center ? 'mx-auto' : ''}`}>{sub}</p>}
    </Reveal>
  )
}

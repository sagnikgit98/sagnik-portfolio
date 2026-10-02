import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PlaceIcon from '@mui/icons-material/PlaceOutlined'
import EmailIcon from '@mui/icons-material/EmailOutlined'
import PhoneIcon from '@mui/icons-material/PhoneOutlined'
import Reveal from '../components/Reveal.jsx'
import { me } from '../data.js'

const Row = ({ icon, children }) => <div className="flex items-center gap-3.5 mt-4 break-words"><span className="w-[38px] h-[38px] rounded-full border border-line grid place-items-center text-acc flex-none">{icon}</span>{children}</div>
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const on = k => e => setF({ ...f, [k]: e.target.value })
  const send = e => {
    e.preventDefault()
    window.location.href = `mailto:${me.email}?subject=${encodeURIComponent('Portfolio message from ' + (f.name || 'a visitor'))}&body=${encodeURIComponent(f.message + '\n\n' + f.name + '\n' + f.email)}`
  }
  return (
    <section id="contact" className="py-20 scroll-mt-16"><div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
      <Reveal>
        <div className="eyebrow">Get in touch</div>
        <h2 className="font-head font-bold text-[clamp(30px,4.6vw,46px)] leading-[1.1] tracking-tight">Let's Build Something.</h2>
        <p className="text-mute mt-3 mb-2">Have a role, a project, or just want to say hi? My inbox is open.</p>
        <Row icon={<PlaceIcon fontSize="small" />}>{me.location}</Row>
        <Row icon={<EmailIcon fontSize="small" />}><a href={`mailto:${me.email}`} className="hover:text-acc">{me.email}</a></Row>
        <Row icon={<PhoneIcon fontSize="small" />}><a href={`tel:${me.tel}`} className="hover:text-acc">{me.phone}</a></Row>
      </Reveal>
      <Reveal delay={120}><form onSubmit={send} className="card !p-4 sm:!p-7 grid gap-4 hover:!translate-y-0">
        <TextField label="Name" placeholder="Your name" value={f.name} onChange={on('name')} required fullWidth />
        <TextField label="Email" type="email" placeholder="you@email.com" value={f.email} onChange={on('email')} required fullWidth />
        <TextField label="Message" placeholder="Tell me about the role or project..." value={f.message} onChange={on('message')} required fullWidth multiline minRows={4} />
        <Button type="submit" variant="contained" disableElevation size="large" endIcon={<ArrowForwardIcon />} sx={{ borderRadius: 99 }}>Send Message</Button>
        <small className="text-center text-mute text-xs">This opens your email app with the message ready to send.</small>
      </form></Reveal>
    </div></section>
  )
}

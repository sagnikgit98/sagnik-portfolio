export default function Avatar({ size = 34, className = '' }) {
  return (
    <span className={`rounded-[10px] border-[1.5px] border-acc overflow-hidden flex-none shadow-glow bg-sf inline-block ${className}`} style={{ width: size, height: size }}>
      <img src="/sagnik.png" alt="Sagnik Banerjee" className="w-full h-full object-cover object-top" />
    </span>
  )
}

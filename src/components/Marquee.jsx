export default function Marquee({ items, className = "" }) {
  return (
    <div className={`border-y border-line overflow-hidden py-3.5 ${className} whitespace-nowrap`} aria-hidden>
      <div className="inline-flex animate-mq font-mono text-xs text-mute">
        {[items, items].map((group, groupIndex) => (
          <span key={groupIndex} className={groupIndex ? 'marquee-copy inline-flex' : 'inline-flex'}>
            {group.map((x, i) => <span key={i} className="px-5 inline-flex items-center gap-5"><b className="text-acc text-[8px]">◆</b>{x}</span>)}
          </span>
        ))}
      </div>
    </div>
  )
}

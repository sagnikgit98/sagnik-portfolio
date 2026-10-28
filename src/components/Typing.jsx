import { useEffect, useState } from 'react'
export default function Typing({ words }) {
  const [t, setT] = useState(''), [i, setI] = useState(0), [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i]
    const id = setTimeout(() => {
      if (!del && t === w) return setDel(true)
      if (del && t === '') { setDel(false); return setI((i + 1) % words.length) }
      setT(del ? w.slice(0, t.length - 1) : w.slice(0, t.length + 1))
    }, !del && t === w ? 1500 : del ? 35 : 75)
    return () => clearTimeout(id)
  }, [t, del, i, words])
  return <span>{t}<i className="typing-caret inline-block w-0.5 h-[1.05em] bg-acc ml-0.5 align-[-3px] animate-bl" /></span>
}

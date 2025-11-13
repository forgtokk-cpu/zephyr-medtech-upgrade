"use client"

import { useEffect, useRef, useState } from "react"

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setTimeout(() => setVisible(true), delay)
      })
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
      {children}
    </div>
  )
}

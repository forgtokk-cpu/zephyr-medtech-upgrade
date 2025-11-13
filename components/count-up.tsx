"use client"

import { useEffect, useMemo, useRef, useState } from "react"

function parse(value: string) {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { num: 0, suffix: value }
  return { num: Number(match[1]), suffix: match[2] }
}

export function CountUp({ value, duration = 1500, className }: { value: string; duration?: number; className?: string }) {
  const { num, suffix } = useMemo(() => parse(value), [value])
  const [display, setDisplay] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setVisible(true)
      })
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let start: number | null = null
    const step = (ts: number) => {
      if (start === null) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setDisplay(Math.round(num * p))
      if (p < 1) requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [visible, num, duration])

  return (
    <div ref={ref} className={className}>{display}{suffix}</div>
  )
}

"use client"

import Image from "next/image"

export function SectionBlock({
  label,
  title,
  description,
  bullets,
  imageSrc,
  reverse = false,
}: {
  label?: string
  title: string
  description?: string
  bullets?: string[]
  imageSrc: string
  reverse?: boolean
}) {
  return (
    <section className="section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`grid section-grid lg:grid-cols-2 items-center ${reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
          <div className="relative h-64 lg:h-80">
            <Image src={imageSrc} alt={title} fill className="object-cover rounded-xl" />
          </div>
          <div className="self-center">
            {label && (
              <div className="text-xs font-medium text-muted-foreground mb-2">{label}</div>
            )}
            <h2 className="section-subheader text-3xl font-bold tracking-tight text-balance lg:text-5xl">{title}</h2>
            {description && (
              <p className="mb-6 text-lg text-muted-foreground text-pretty">{description}</p>
            )}
            {bullets && bullets.length > 0 && (
              <ul className="space-y-3">
                {bullets.map((d, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{d}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

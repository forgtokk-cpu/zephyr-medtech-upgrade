import Image from "next/image"
import { site } from "@/content/site"

export function ClientsMarquee() {
  const base = site.clients
  const repeat = base.length <= 6 ? 3 : 2
  const logos = Array.from({ length: repeat }).flatMap(() => base)
  const duration = base.length <= 6 ? "18s" : "28s"
  return (
    <section className="py-10">
      <div className="rounded-2xl border border-border/50 bg-card/30 p-6 overflow-hidden">
        <div className="flex gap-12 marquee-track hover:[animation-play-state:paused]" style={{ ["--marquee-duration" as any]: duration }}>
          {logos.map((c, i) => (
            <div key={i} className="flex items-center justify-center min-w-[140px] md:min-w-[180px] transition px-2">
              <Image src={c.src} alt={c.alt} width={180} height={64} className="h-14 sm:h-16 md:h-20 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { home } from "@/content/home"
import { Reveal } from "@/components/reveal"
import { CountUp } from "@/components/count-up"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background gradient effects */}
      <div className="absolute inset-0 gradient-glow-purple" />
      <div className="absolute inset-0 gradient-glow-blue" />
      <Image
        src="/hero.jpg"
        alt="Hero background"
        fill
        priority
        className="absolute inset-0 object-cover opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,_#000_60%,_transparent_100%)]"
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary">{home.badge}</span>
            </div>
          </Reveal>

          {/* Main heading */}
          <Reveal>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-balance lg:text-6xl">
              {home.heroTitlePrimary}
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {home.heroTitleGradient}
              </span>
            </h1>
          </Reveal>

          {/* Description */}
          <Reveal>
            <p className="mb-10 text-lg text-muted-foreground text-pretty lg:text-xl">
              {home.heroDescription}
            </p>
          </Reveal>

          <Reveal>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={home.ctaPrimary.href}>
                {home.ctaPrimary.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
          </div>
          </Reveal>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-3">
            {home.metrics.map((m, idx) => (
              <Reveal key={idx}>
                <div className="text-center">
                  <CountUp value={m.value} className="text-3xl font-bold text-primary lg:text-4xl" />
                  <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card } from "@/components/ui/card"
import { ShieldCheck, FileText, Languages, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { home } from "@/content/home"
import { Reveal } from "@/components/reveal"

const iconMap = {
  compliance: ShieldCheck,
  authoring: FileText,
  translation: Languages,
  analytics: BarChart3,
} as const

export function ServicesSection() {
  return (
    <section className="relative section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto section-header max-w-3xl text-center">
          <Reveal><h2 className="section-subheader text-3xl font-bold tracking-tight text-balance lg:text-5xl">专业的AI解决方案</h2></Reveal>
          <Reveal><p className="text-lg text-muted-foreground text-pretty">深耕医疗器械行业，为您提供量身定制的AI提效工具</p></Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid section-grid lg:grid-cols-4">
          {home.servicesOverview.map((service, index) => (
            <Reveal key={index}>
            <Card
              className="group relative overflow-hidden border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/80"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                {(() => {
                  const Icon = iconMap[service.key as keyof typeof iconMap]
                  return <Icon className="h-6 w-6" />
                })()}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="mb-6 text-muted-foreground text-pretty">{service.description}</p>

              {/* Features */}
              <ul className="mb-6 space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
              </ul>

              <Button asChild variant="ghost" className="group/btn w-full">
                <Link href={`/services/${service.key}`}>
                  了解详情
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>

              {/* Hover effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

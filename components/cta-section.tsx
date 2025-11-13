import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/reveal"

export function CTASection() {
  return (
    <section className="relative section">
      <div className="absolute inset-0 gradient-glow" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm lg:p-16">
          <Reveal><h2 className="section-subheader text-3xl font-bold tracking-tight text-balance lg:text-5xl">准备好提升效率了吗？</h2></Reveal>
          <Reveal><p className="mb-8 text-lg text-muted-foreground text-pretty lg:text-xl">立即预约演示，了解我们如何帮助您的医疗器械企业实现AI驱动的效率提升</p></Reveal>
          <Reveal>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/demo">
                  预约演示
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

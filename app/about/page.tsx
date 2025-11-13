import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Lightbulb, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { about } from "@/content/about"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden section">
          <div className="absolute inset-0 gradient-glow-purple" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-balance lg:text-6xl">
                {about.hero.titlePrefix}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {about.hero.titleBrand}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty lg:text-xl">
                {about.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-sm">
                <Target className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-3 text-xl font-bold">{about.missionVisionValues.mission.title}</h3>
                <p className="text-muted-foreground text-pretty">{about.missionVisionValues.mission.text}</p>
              </Card>

              <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-sm">
                <Lightbulb className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-3 text-xl font-bold">{about.missionVisionValues.vision.title}</h3>
                <p className="text-muted-foreground text-pretty">{about.missionVisionValues.vision.text}</p>
              </Card>

              <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-sm">
                <Heart className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-3 text-xl font-bold">{about.missionVisionValues.values.title}</h3>
                <p className="text-muted-foreground text-pretty">{about.missionVisionValues.values.text}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-3xl font-bold lg:text-4xl">我们的故事</h2>
              <div className="space-y-6 text-muted-foreground text-pretty">
                {about.story.map((p, idx) => (
                  <p key={idx} className="text-lg">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Advantages */}
        <section className="section">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance lg:text-5xl">我们的优势</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {about.advantages.map((a, idx) => (
                <div key={idx} className="rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
                  <h3 className="mb-4 text-xl font-bold">{a.title}</h3>
                  <p className="text-muted-foreground text-pretty">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 gradient-glow" />

          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl rounded-3xl border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm lg:p-16">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance lg:text-5xl">{about.cta.title}</h2>
              <p className="mb-8 text-lg text-muted-foreground text-pretty lg:text-xl">{about.cta.description}</p>
              <Button asChild size="lg">
                <Link href={about.cta.button.href}>
                  {about.cta.button.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

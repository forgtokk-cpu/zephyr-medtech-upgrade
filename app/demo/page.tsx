import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DemoForm } from "@/components/demo-form"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24">
        <section className="relative overflow-hidden section">
          <div className="absolute inset-0 gradient-glow-purple" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-balance lg:text-6xl">
                  预约
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    产品演示
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground text-pretty lg:text-xl">
                  填写以下信息，我们的专家将在24小时内与您联系，为您展示我们的AI解决方案如何助力您的业务
                </p>
              </div>

              <DemoForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

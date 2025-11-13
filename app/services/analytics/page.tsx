import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { SectionBlock } from "@/components/section-block"
import { getService } from "@/content/services"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI数据分析服务 - 基于海关出口与监管数据的智能可视化分析 | Zephyr MedTech",
  description: "Zephyr MedTech提供AI数据分析服务，基于上市前准入、海关出口、上市后监管数据进行智能分析与可视化洞察，辅助医疗器械企业决策优化。",
  keywords: ["AI数据分析", "医疗器械数据", "海关出口数据", "监管数据分析", "数据可视化", "商业智能", "数据驱动决策"],
  openGraph: {
    title: "AI数据分析服务 - 基于海关出口与监管数据的智能可视化分析",
    description: "Zephyr MedTech提供AI数据分析服务，基于上市前准入、海关出口、上市后监管数据进行智能分析与可视化洞察，辅助企业决策优化。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI数据分析服务 - 基于海关出口与监管数据的智能可视化分析 | Zephyr MedTech",
    description: "Zephyr MedTech提供AI数据分析服务，基于上市前准入、海关出口、上市后监管数据进行智能分析与可视化洞察。",
  },
}

export default function AnalyticsPage() {
  const service = getService('analytics')
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 gradient-glow-purple" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-balance lg:text-6xl">{service.title}</h1>
              <p className="text-lg text-muted-foreground text-pretty lg:text-xl">{service.description}</p>
            </div>
          </div>
        </section>

        <SectionBlock
          title="产品特色"
          bullets={service.highlights}
          imageSrc={service.images.feature}
        />

        <SectionBlock
          title="核心功能"
          bullets={service.details}
          imageSrc={service.images.functions}
        />

        <SectionBlock
          title="方案价值"
          bullets={service.benefits}
          imageSrc={service.images.value}
        />

        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 gradient-glow" />
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-4xl rounded-3xl border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm lg:p-16">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance lg:text-5xl">预约演示</h2>
              <p className="mb-8 text-lg text-muted-foreground text-pretty lg:text-xl">了解我们如何用数据驱动业务与质量提升</p>
              <Button asChild size="lg">
                <Link href="/demo">立即预约</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

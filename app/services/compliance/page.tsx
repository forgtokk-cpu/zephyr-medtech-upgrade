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
  title: 'AI合规管理 - 医疗器械全球准入智能解决方案 | Zephyr MedTech',
  description: '覆盖全球70+国家/地区医疗器械准入路径，智能规划与管理，加速产品注册与上市。提供法规条款匹配、术语一致性、风险提示和生成合规清单等专业服务。',
}

export default function CompliancePage() {
  const service = getService('compliance')
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
              <p className="mb-8 text-lg text-muted-foreground text-pretty lg:text-xl">了解我们如何帮助您的企业实现效率与合规双提升</p>
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

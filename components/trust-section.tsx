import { Reveal } from "@/components/reveal"
import { ClientsMarquee } from "@/components/clients-marquee"

export function TrustSection() {
  return (
    <section className="relative section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto section-header max-w-3xl text-center">
          <Reveal>
            <div>
              <h2 className="section-subheader text-3xl font-bold tracking-tight text-balance lg:text-5xl">值得信赖的行业伙伴</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                专注医疗器械领域，深度理解行业需求，为企业提供可靠的AI解决方案
              </p>
            </div>
          </Reveal>
        </div>

        {/* Trust Points */}
        <div className="grid section-grid lg:grid-cols-3">
          <Reveal>
            <div className="rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
              <div className="mb-4 text-4xl font-bold text-primary">5+</div>
              <h3 className="mb-2 text-xl font-bold">年行业经验</h3>
              <p className="text-muted-foreground text-pretty">深耕医疗器械行业多年，深刻理解行业痛点和需求</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
              <div className="mb-4 text-4xl font-bold text-primary">50+</div>
              <h3 className="mb-2 text-xl font-bold">服务企业</h3>
              <p className="text-muted-foreground text-pretty">为众多医疗器械企业提供专业服务，获得广泛认可</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
              <div className="mb-4 text-4xl font-bold text-primary">100%</div>
              <h3 className="mb-2 text-xl font-bold">数据安全</h3>
              <p className="text-muted-foreground text-pretty">严格遵守数据安全规范，保护企业核心信息资产</p>
            </div>
          </Reveal>
        </div>

        <ClientsMarquee />

        {/* Why Choose Us */}
        <div className="mt-16 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 to-transparent p-8 lg:p-12">
          <h3 className="mb-8 text-2xl font-bold lg:text-3xl text-center">为什么选择我们</h3>
          <div className="grid section-grid lg:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                ✓
              </div>
              <div>
                <h4 className="mb-1 font-semibold">行业专注</h4>
                <p className="text-sm text-muted-foreground">专注医疗器械领域，提供最贴合行业需求的解决方案</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                ✓
              </div>
              <div>
                <h4 className="mb-1 font-semibold">技术领先</h4>
                <p className="text-sm text-muted-foreground">采用最新AI技术，持续优化算法，确保服务质量</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                ✓
              </div>
              <div>
                <h4 className="mb-1 font-semibold">专业团队</h4>
                <p className="text-sm text-muted-foreground">拥有医疗器械和AI技术双重背景的专业团队</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                ✓
              </div>
              <div>
                <h4 className="mb-1 font-semibold">全程支持</h4>
                <p className="text-sm text-muted-foreground">提供从咨询到实施的全流程支持服务</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Process moved below "为什么选择我们" block */}
        <div className="mt-16">
          <div className="mx-auto section-header max-w-3xl text-center">
            <h2 className="section-subheader text-3xl font-bold tracking-tight text-balance lg:text-5xl">服务流程</h2>
            <p className="text-lg text-muted-foreground text-pretty">简单高效的四步流程，快速启动您的AI提效之旅</p>
          </div>
          <div className="grid section-grid lg:grid-cols-4">
            {[
              { step: '01', title: '需求分析', description: '深入了解您的业务需求和痛点' },
              { step: '02', title: '方案定制', description: '为您量身定制最适合的AI解决方案' },
              { step: '03', title: '系统部署', description: '快速部署系统，提供完整培训' },
              { step: '04', title: '持续优化', description: '持续跟踪效果，不断优化改进' },
            ].map((item, index, arr) => (
              <div key={item.step} className="relative">
                <div className="mb-4 text-5xl font-bold text-primary/20">{item.step}</div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-pretty">{item.description}</p>
                {index < arr.length - 1 && (
                  <div className="absolute -right-4 top-8 hidden h-0.5 w-8 bg-border lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

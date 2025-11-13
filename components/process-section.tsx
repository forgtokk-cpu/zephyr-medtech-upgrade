export function ProcessSection() {
  const steps = [
    { step: '01', title: '需求分析', description: '深入了解您的业务需求和痛点' },
    { step: '02', title: '方案定制', description: '为您量身定制最适合的AI解决方案' },
    { step: '03', title: '系统部署', description: '快速部署系统，提供完整培训' },
    { step: '04', title: '持续优化', description: '持续跟踪效果，不断优化改进' },
  ]
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance lg:text-5xl">服务流程</h2>
          <p className="text-lg text-muted-foreground text-pretty">简单高效的四步流程，快速启动您的AI提效之旅</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              <div className="mb-4 text-5xl font-bold text-primary/20">{item.step}</div>
              <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground text-pretty">{item.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-8 hidden h-0.5 w-8 bg-border lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

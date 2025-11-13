export const home = {
  badge: '专注医疗器械行业AI解决方案',
  heroTitlePrimary: '赋能医疗器械企业',
  heroTitleGradient: 'AI驱动的效率革命',
  heroDescription:
    '为医疗器械企业提供专业的AI翻译、文档撰写、合规管理和数据分析解决方案，助力您的产品快速进入全球市场，提升运营效率',
  ctaPrimary: { label: '预约演示', href: '/demo' },
  ctaSecondary: { label: '了解解决方案', href: '/services' },
  metrics: [
    { value: '10x', label: '更快发布周期' },
    { value: '50%', label: '减少处理时间' },
    { value: '600+', label: '年度节省工时' },
  ],
  servicesOverview: [
    {
      key: 'compliance',
      title: 'AI合规管理',
      description:
        '覆盖全球70+国家/地区医疗器械准入路径，智能规划与管理，加速产品注册与上市',
      features: ['法规条款匹配', '术语一致性', '风险提示', '生成合规清单'],
    },
    {
      key: 'authoring',
      title: 'AI文档撰写',
      description:
        '面向临床、研发、准入、市场场景下各类文档的智能撰写与结构化输出，提升团队协作效率',
      features: ['章节模板', '术语库引用', '格式规范校验', '自动化报告生成'],
    },
    {
      key: 'translation',
      title: 'AI医学翻译',
      description:
        '千万级专业医学语料支撑的多语言AI翻译，高质量排版还原，降低人工翻译成本',
      features: ['专业术语库', '多语言支持', '上下文理解', '人工审校选项'],
    },
    {
      key: 'analytics',
      title: 'AI数据分析',
      description:
        '基于上市前准入、海关出口、上市后监管数据的分析与可视化洞察，辅助决策优化',
      features: ['指标监控', '趋势分析', '可视化图表', '导出与分享'],
    },
  ],
}

export type Metric = typeof home.metrics[number]
export type ServiceOverview = typeof home.servicesOverview[number]

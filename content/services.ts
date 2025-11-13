export const servicesDetail = {
  compliance: {
    key: 'compliance',
    title: 'AI合规管理',
    description:
      '覆盖全球70+国家/地区医疗器械准入路径，智能规划与管理，加速产品注册与上市',
    highlights: ['法规专家支撑', '标准清单支持', '流程化合规检查', '缺失项提示'],
    details: [
      '注册任务合理拆分',
      '合规标准清单支持',
      '配套文件管理系统',
      '处理进度智能提醒',
    ],
    benefits: ['降低合规风险', '提升注册效率', '标准化输出', '可审计留痕'],
    images: {
      feature: '/compliance_1.png',
      functions: '/compliance_2.png',
      value: '/compliance_3.png',
    },
  },
  authoring: {
    key: 'authoring',
    title: 'AI文档撰写',
    description:
      '面向临床、研发、准入、市场场景下各类文档的智能撰写与结构化输出，提升团队协作效率',
    highlights: ['章节与模板库', '术语引用与校验', '格式规范检查', '协作评审流程'],
    details: ['章节模板与结构建议', '术语库引用与校验', '格式规范检查', '自动化报告生成'],
    benefits: ['缩短撰写周期', '提高一致性', '减少返工', '便于协作与评审'],
    images: {
      feature: '/authoring_1.png',
      functions: '/authoring_2.png',
      value: '/authoring_3.png',
    },
  },
  translation: {
    key: 'translation',
    title: 'AI医学翻译',
    description:
      '千万级专业医学语料支撑的多语言AI翻译，高质量排版还原，降低人工翻译成本',
    highlights: ['专业术语支撑', '多款大模型支持', '格式还原优秀'],
    details: ['支持自由术语库维护', '多类型文件支持', '批量文档处理', '团队协作便捷'],
    benefits: ['业务数据资产积累', '降低准入门槛', '减少语言门槛成本'],
    images: {
      feature: '/translation_1.png',
      functions: '/translation_2.png',
      value: '/translation_3.png',
    },
  },
  analytics: {
    key: 'analytics',
    title: 'AI数据分析',
    description:
      '基于上市前准入、海关出口、上市后监管数据的分析与可视化洞察，辅助决策优化',
    highlights: ['智能爬虫构建', '智能数据治理', '数据追踪提醒', '可视化报表'],
    details: ['数据采集与存储', '数据清洗与转换', '数据可视化', '报告导出与分享'],
    benefits: ['发现问题与机会', '数据驱动决策', '可视化沟通', '缩短分析周期'],
    images: {
      feature: '/analytics_1.png',
      functions: '/analytics_2.png',
      value: '/analytics_3.png',
    },
  },
} as const

export type ServiceKey = keyof typeof servicesDetail
export const getService = (key: ServiceKey) => servicesDetail[key]

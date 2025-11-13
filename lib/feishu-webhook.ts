/**
 * 飞书群机器人webhook集成
 * 用于将表单提交信息推送到飞书群聊
 */

interface FeishuWebhookConfig {
  webhookUrl: string
  secret?: string // 可选的签名校验密钥
}

interface FormData {
  name: string
  company: string
  position: string
  email: string
  phone: string
  service: string
  message: string
}

interface WebhookMessage {
  msg_type: 'text' | 'post' | 'interactive'
  content?: {
    text?: string
  }
  card?: {
    header?: {
      title: {
        tag: 'plain_text'
        content: string
      }
      template?: string
    }
    elements: Array<{
      tag: 'div' | 'hr' | 'action'
      text?: {
        tag: 'plain_text' | 'lark_md'
        content: string
      }
      actions?: Array<{
        tag: 'button'
        text: {
          tag: 'plain_text'
          content: string
        }
        url?: string
        type?: 'primary' | 'default'
      }>
    }>
  }
  timestamp?: string
  sign?: string
}

class FeishuWebhookAPI {
  private config: FeishuWebhookConfig

  constructor(config: FeishuWebhookConfig) {
    this.config = config
  }

  /**
   * 生成签名（用于安全校验）
   * 飞书webhook签名规则：将timestamp + "\n" + 密钥当做签名字符串，使用HmacSHA256算法计算签名，再进行Base64编码
   */
  private generateSign(timestamp: string): string {
    if (!this.config.secret) return ''
    
    const crypto = require('crypto')
    const stringToSign = `${timestamp}\n${this.config.secret}`
    const hmac = crypto.createHmac('sha256', stringToSign)
    return hmac.digest('base64')
  }

  /**
   * 获取服务名称的中文显示
   */
  private getServiceName(service: string): string {
    const serviceMap: Record<string, string> = {
      'compliance': 'AI合规管理',
      'authoring': 'AI文档撰写',
      'translation': 'AI医学翻译',
      'analytics': 'AI数据分析',
      'all': '全部服务'
    }
    return serviceMap[service] || service
  }

  /**
   * 创建消息卡片
   */
  private createInteractiveMessage(formData: FormData): WebhookMessage {
    const currentTime = new Date().toLocaleString('zh-CN')
    const serviceName = this.getServiceName(formData.service)

    return {
      msg_type: 'interactive',
      card: {
        config: {
          wide_screen_mode: true
        },
        header: {
          title: {
            tag: 'plain_text',
            content: '🎯 新的客户预约'
          },
          template: 'blue'
        },
        elements: [
          {
            tag: 'div',
            text: {
              tag: 'lark_md',
              content: `**客户姓名：** ${formData.name}\n**公司名称：** ${formData.company}\n**职位：** ${formData.position || '未填写'}\n**邮箱：** ${formData.email}\n**联系电话：** ${formData.phone}\n**感兴趣的服务：** ${serviceName}\n**提交时间：** ${currentTime}`
            }
          },
          {
            tag: 'hr'
          },
          {
            tag: 'div',
            text: {
              tag: 'lark_md',
              content: formData.message ? `**需求描述：**\n${formData.message}` : '*客户未填写详细需求*'
            }
          },
          {
            tag: 'hr'
          },
          {
            tag: 'action',
            actions: [
              {
                tag: 'button',
                text: {
                  tag: 'plain_text',
                  content: '💬 立即联系'
                },
                type: 'primary',
                url: `mailto:${formData.email}?subject=Zephyr MedTech产品演示预约回复`
              },
              {
                tag: 'button',
                text: {
                  tag: 'plain_text',
                  content: '📋 查看详情'
                },
                type: 'default',
                url: 'https://zephyrmedtech.com/demo'
              }
            ]
          }
        ]
      }
    }
  }

  /**
   * 发送简单文本消息（备用方案）
   */
  private createTextMessage(formData: FormData): WebhookMessage {
    const currentTime = new Date().toLocaleString('zh-CN')
    const serviceName = this.getServiceName(formData.service)
    
    return {
      msg_type: 'text',
      content: {
        text: `🎯 新的客户预约\n\n客户姓名：${formData.name}\n公司名称：${formData.company}\n联系电话：${formData.phone}\n邮箱：${formData.email}\n感兴趣的服务：${serviceName}\n提交时间：${currentTime}\n\n💡 请及时跟进联系客户！`
      }
    }
  }

  /**
   * 发送消息到飞书群
   */
  async sendFormNotification(formData: FormData, useInteractive: boolean = true): Promise<boolean> {
    try {
      // 飞书webhook要求时间戳为秒级，不是毫秒级
      const timestamp = Math.floor(Date.now() / 1000).toString()
      const message = useInteractive 
        ? this.createInteractiveMessage(formData)
        : this.createTextMessage(formData)

      // 添加时间戳和签名（如果需要）
      if (this.config.secret) {
        message.timestamp = timestamp
        message.sign = this.generateSign(timestamp)
      }

      const response = await fetch(this.config.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      })

      const result = await response.json()
      
      if (result.code !== 0) {
        console.error('飞书群消息发送失败:', result.msg)
        return false
      }

      console.log('飞书群消息发送成功')
      return true
    } catch (error) {
      console.error('发送飞书群消息失败:', error)
      return false
    }
  }
}

// 从环境变量获取配置
const webhookConfig: FeishuWebhookConfig = {
  webhookUrl: process.env.FEISHU_WEBHOOK_URL || '',
  secret: process.env.FEISHU_WEBHOOK_SECRET || undefined
}

// 创建API实例
export const feishuWebhookAPI = new FeishuWebhookAPI(webhookConfig)

/**
 * 发送表单通知到飞书群
 */
export async function sendFormNotification(formData: FormData): Promise<boolean> {
  // 如果没有配置webhook，直接返回成功
  if (!webhookConfig.webhookUrl) {
    console.log('未配置飞书群机器人webhook，跳过群通知')
    return true
  }

  try {
    return await feishuWebhookAPI.sendFormNotification(formData)
  } catch (error) {
    console.error('发送飞书群通知失败:', error)
    return false
  }
}
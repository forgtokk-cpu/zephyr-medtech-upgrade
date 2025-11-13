/**
 * 飞书群机器人表单提交API路由
 * 处理网站表单数据并通过群机器人发送通知
 */

import { NextRequest, NextResponse } from 'next/server'
import { sendFormNotification } from '@/lib/feishu-webhook'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // 验证必填字段
    const requiredFields = ['name', 'company', 'email', 'phone', 'service']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: `缺少必填字段: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      )
    }

    // 准备表单数据
    const formData = {
      name: body.name,
      company: body.company,
      position: body.position || '',
      email: body.email,
      phone: body.phone,
      service: body.service,
      message: body.message || ''
    }

    // 发送到飞书群机器人
    let webhookSuccess = false
    let webhookError = ''
    
    try {
      webhookSuccess = await sendFormNotification(formData)
    } catch (webhookErrorObj) {
      console.error('群机器人通知失败:', webhookErrorObj)
      webhookError = webhookErrorObj instanceof Error ? webhookErrorObj.message : '群通知发送失败'
    }

    // 返回结果，包含webhook状态信息
    return NextResponse.json({
      success: true,
      message: webhookSuccess ? '表单提交成功！群通知已发送' : '表单提交成功！但群通知发送失败',
      webhookSuccess,
      webhookError: webhookError || undefined
    })
  } catch (error) {
    console.error('API处理错误:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: '服务器处理错误，请稍后重试' 
      },
      { status: 500 }
    )
  }
}
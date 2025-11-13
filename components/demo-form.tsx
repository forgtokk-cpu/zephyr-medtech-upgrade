"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <Card className="border-border/50 bg-card/50 p-12 text-center backdrop-blur-sm">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h2 className="mb-4 text-2xl font-bold">提交成功！</h2>
        <p className="mb-6 text-muted-foreground">感谢您的关注！我们的专家将在24小时内与您联系，为您安排产品演示。</p>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          提交另一个请求
        </Button>
      </Card>
    )
  }

  return (
    <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-sm lg:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">姓名 *</Label>
            <Input
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="请输入您的姓名"
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">公司名称 *</Label>
            <Input
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="请输入公司名称"
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">职位</Label>
            <Input
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="请输入您的职位"
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">邮箱 *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">联系电话 *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="请输入联系电话"
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">感兴趣的服务 *</Label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">请选择服务</option>
              <option value="compliance">AI合规管理</option>
              <option value="authoring">AI文档撰写</option>
              <option value="translation">AI医学翻译</option>
              <option value="analytics">AI数据分析</option>
              <option value="all">全部服务</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">需求描述</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="请简要描述您的需求或想了解的内容..."
            rows={5}
            className="bg-background/50"
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">* 为必填项</p>
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            提交预约
          </Button>
        </div>
      </form>
    </Card>
  )
}

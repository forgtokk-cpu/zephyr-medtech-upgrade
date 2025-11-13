import Link from "next/link"
import Image from "next/image"
import { site } from "@/content/site"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Image
                src={site.logoSrc}
                alt={`${site.brandName} logo`}
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
                priority
              />
              <span className="text-xl font-bold">{site.brandName}</span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground text-pretty">{site.tagline}</p>
            <p className="text-sm text-muted-foreground">让AI技术赋能医疗器械行业，助力企业高效发展</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-foreground">
                  解决方案
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground transition-colors hover:text-foreground">
                  预约演示
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">联系我们</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="whitespace-nowrap">邮箱：{site.contact.email}</li>
              <li>电话：{site.contact.phone}</li>
              <li>地址：{site.contact.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Zephyr MedTech. 保留所有权利。</p>
          <p className="mt-2">{site.icp}</p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { site } from "@/content/site"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { home } from "@/content/home"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        <Link href={site.nav[0].href} className="flex items-center gap-2">
          <div className="flex items-center gap-2">
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
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            首页
          </Link>
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>解决方案</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex flex-col md:w-[240px]">
                    {home.servicesOverview.map((s) => (
                      <NavigationMenuLink key={s.key} href={`/services/${s.key}`} className="hover:bg-accent/50">
                        <div className="font-medium">{s.title}</div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            关于我们
          </Link>
          <Button asChild>
            <Link href="/demo">预约演示</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-lg md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              首页
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">解决方案</span>
              {home.servicesOverview.map((s) => (
                <Link key={s.key} href={`/services/${s.key}`} className="text-sm font-medium transition-colors hover:text-primary">
                  {s.title}
                </Link>
              ))}
            </div>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              关于我们
            </Link>
            <Button asChild className="w-full">
              <Link href="/demo">预约演示</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

// 홈(/)이 아닌 페이지에서도 동작하도록 "/#섹션" 형태로 연결
const navItems = [
  { label: '회사소개', href: '/#about' },
  { label: '브랜드', href: '/#brands' },
  { label: '지속가능성', href: '/#values' },
  { label: '연혁', href: '/#history' },
  { label: '뉴스룸', href: '/#news' },
]

const careersItem = { label: '채용', href: '/careers' }

export function SiteHeader({ forceSolid = false }: { forceSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 히어로 이미지가 없는 서브 페이지에서는 항상 불투명 헤더를 사용
  const solid = forceSolid || scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        solid
          ? 'border-b bg-background/95 text-foreground backdrop-blur'
          : 'bg-transparent text-primary-foreground',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 lg:px-10">
        <Link href="/" className="font-serif text-xl tracking-[0.2em]" aria-label="LUNE & CO. 홈">
          LUNE &amp; CO.
        </Link>

        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-10 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="opacity-80 transition-opacity hover:opacity-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={careersItem.href}
          className={cn(
            'hidden border px-5 py-2 text-xs tracking-widest transition-colors md:inline-block',
            solid
              ? 'border-foreground hover:bg-foreground hover:text-background'
              : 'border-primary-foreground/70 hover:bg-primary-foreground hover:text-foreground',
          )}
        >
          {careersItem.label}
        </Link>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="모바일 메뉴" className="border-t bg-background md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {[...navItems, careersItem].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b py-4 text-base last:border-0"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

import Link from 'next/link'

type FooterLink = { label: string; href: string }

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Company',
    links: [
      { label: '회사소개', href: '/#about' },
      { label: '브랜드', href: '/#brands' },
      { label: '지속가능성', href: '/#values' },
      { label: '연혁', href: '/#history' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: '고객센터', href: '/' },
      { label: '입점·제휴 문의', href: '/' },
      { label: 'IR', href: '/' },
      { label: '채용', href: '/careers' },
    ],
  },
  {
    title: 'Follow',
    links: [
      { label: 'Instagram', href: '/' },
      { label: 'YouTube', href: '/' },
      { label: 'Pinterest', href: '/' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl tracking-[0.2em]">LUNE &amp; CO.</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              오래 입을 옷, 오래 남을 가치를 만드는 패션 커머스 기업
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="md:col-span-2">
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t pt-8 text-xs leading-relaxed text-muted-foreground md:flex-row md:justify-between">
          <address className="not-italic">
            주식회사 룬앤코 · 대표이사 김서윤 · 사업자등록번호 123-45-67890
            <br />
            서울특별시 성동구 성수이로 00, 룬앤코 빌딩 · 대표전화 1588-0000
          </address>
          <p>© 2026 LUNE &amp; CO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

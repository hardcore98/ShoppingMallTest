import { ArrowRight } from 'lucide-react'
import { SectionLabel } from './section-label'

const news = [
  {
    date: '2026.09.28',
    tag: '보도자료',
    title: '룬앤코, 도쿄 오모테산도에 첫 해외 플래그십 스토어 오픈',
  },
  {
    date: '2026.08.14',
    tag: 'ESG',
    title: '2025 지속가능경영 보고서 발간… 인증 소재 비중 68% 달성',
  },
  {
    date: '2026.06.03',
    tag: '브랜드',
    title: 'Maison Lune, 2026 F/W 컬렉션 ‘Quiet Form’ 공개',
  },
]

export function Newsroom() {
  return (
    <section id="news" className="scroll-mt-20 bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionLabel index="05" title="Newsroom" />
            <h2 className="mt-6 font-serif text-3xl md:text-5xl">새로운 소식</h2>
          </div>
          <a href="#news" className="hidden items-center gap-2 text-sm hover:text-accent md:flex">
            전체 보기 <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-12 border-b">
          {news.map((item) => (
            <li key={item.title} className="border-t">
              <a
                href="#news"
                className="group grid gap-3 py-8 md:grid-cols-[10rem_7rem_1fr_auto] md:items-center md:gap-6"
              >
                <time className="text-sm text-muted-foreground">{item.date}</time>
                <span className="w-fit border border-foreground/30 px-3 py-1 text-xs">{item.tag}</span>
                <span className="font-serif text-lg leading-snug transition-colors group-hover:text-accent md:text-xl">
                  {item.title}
                </span>
                <ArrowRight
                  className="hidden size-5 transition-transform group-hover:translate-x-1 md:block"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

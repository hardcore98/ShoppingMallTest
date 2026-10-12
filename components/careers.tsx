import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Careers() {
  return (
    <section id="careers" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-10 bg-accent px-8 py-14 text-accent-foreground md:flex-row md:items-end md:px-14 md:py-20">
          <div>
            <p className="text-xs tracking-[0.3em]">CAREERS</p>
            <h2 className="mt-6 max-w-2xl font-serif text-3xl leading-snug text-balance md:text-5xl">
              좋은 옷을 만드는 일에
              <br />
              함께할 동료를 찾습니다.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed opacity-90">
              MD, 디자인, 개발, 마케팅, 물류까지. 룬앤코에서 당신의 다음 챕터를 시작하세요.
            </p>
          </div>
          <Link
            href="/careers"
            className="inline-flex shrink-0 items-center gap-3 bg-primary px-7 py-4 text-sm text-primary-foreground transition-colors hover:bg-background hover:text-foreground"
          >
            채용 공고 보기
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

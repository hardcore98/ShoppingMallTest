import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionLabel } from '@/components/section-label'

export const metadata: Metadata = {
  title: 'MD 채용 | LUNE & CO.',
  description: '룬앤코에서 함께할 MD(상품기획)를 모집합니다. 주요 업무, 자격요건, 우대사항, 전형절차를 확인하세요.',
}

// ─────────────────────────────────────────────
// 채용 내용은 아래 데이터만 수정하면 됩니다.
// ─────────────────────────────────────────────
const APPLY_EMAIL = 'recruit@lunenco.kr'

const summary = [
  { label: '모집 부문', value: 'MD (상품기획 · 머천다이저)' },
  { label: '근무 형태', value: '정규직 (수습 3개월)' },
  { label: '근무 지역', value: '서울특별시 성동구 성수 (본사)' },
  { label: '모집 경력', value: '경력 3년 이상' },
  { label: '접수 기간', value: '채용 시 마감' },
]

const duties = [
  '시즌(S/S, F/W)별 상품 기획 및 MD 전략 수립',
  '브랜드별 매출·재고·손익 목표 수립 및 관리',
  '디자인, 생산, 물류 부서와 협업한 소싱·발주·입고 일정 관리',
  '판매 데이터 분석을 통한 리오더, 프로모션, 가격 전략 운영',
  '자사몰 및 외부 채널의 상품 구성과 노출 최적화',
]

const requirements = [
  '패션 MD 또는 상품기획 경력 3년 이상인 분',
  '매출·재고·원가 데이터를 분석해 의사결정에 활용할 수 있는 분 (Excel 활용 능숙)',
  '디자이너, 생산, 물류, 마케팅 등 유관 부서와 원활하게 소통하고 조율할 수 있는 분',
  '의류 소재, 봉제, 생산 공정에 대한 기본적인 이해를 갖춘 분',
  '4년제 대학 졸업자 또는 이에 준하는 학력 소지자',
  '해외여행에 결격 사유가 없는 분',
]

const preferred = [
  '온라인 패션 커머스(자사몰·오픈마켓·편집숍) 채널 운영 경험',
  'SQL, BI 도구(Tableau, Looker 등) 활용 가능자',
  '인증 소재·지속가능 상품 기획 경험',
  '일본어 또는 영어 비즈니스 커뮤니케이션 가능자',
  '해외 소싱 또는 해외 시장 MD 경험',
]

const hiringSteps = [
  { step: '01', title: '서류 전형', desc: '이력서 및 경력기술서' },
  { step: '02', title: '1차 실무 면접', desc: '직무 과제 포함' },
  { step: '03', title: '2차 임원 면접', desc: '컬처핏 및 비전 공유' },
  { step: '04', title: '처우 협의 · 최종 합격', desc: '입사일 협의' },
]

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function CareersPage() {
  return (
    <>
      <SiteHeader forceSolid />
      <main className="pt-16 md:pt-20">
        {/* 상단 소개 */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              홈으로
            </Link>
            <SectionLabel index="CAREERS" title="Recruit" className="mt-10" />
            <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-snug text-balance md:text-6xl">
              좋은 옷을 만드는 일,
              <br />
              MD와 함께 시작합니다.
            </h1>
            <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground">
              룬앤코는 소재와 핏, 그리고 만드는 과정의 정직함을 믿는 패션 커머스 기업입니다. 브랜드의 상품을
              기획하고 고객에게 가장 좋은 방식으로 전할 MD 동료를 찾습니다.
            </p>
          </div>
        </section>

        {/* 공고 요약 */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionLabel index="01" title="Overview" />
              <h2 className="mt-6 font-serif text-2xl md:text-3xl">모집 요강</h2>
            </div>
            <dl className="md:col-span-8">
              {summary.map((row) => (
                <div key={row.label} className="grid grid-cols-3 gap-4 border-b py-5 first:border-t">
                  <dt className="text-sm text-muted-foreground">{row.label}</dt>
                  <dd className="col-span-2">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 주요 업무 / 자격요건 / 우대사항 */}
        {[
          { index: '02', label: 'Responsibilities', title: '주요 업무', items: duties },
          { index: '03', label: 'Requirements', title: '자격 요건', items: requirements, highlight: true },
          { index: '04', label: 'Preferred', title: '우대 사항', items: preferred },
        ].map((block) => (
          <section key={block.index} className={block.highlight ? 'bg-secondary' : undefined}>
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10">
              <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-4">
                  <SectionLabel index={block.index} title={block.label} />
                  <h2 className="mt-6 font-serif text-2xl md:text-3xl">{block.title}</h2>
                </div>
                <div className="md:col-span-8">
                  <CheckList items={block.items} />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* 전형 절차 */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10">
          <SectionLabel index="05" title="Process" />
          <h2 className="mt-6 font-serif text-2xl md:text-3xl">전형 절차</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {hiringSteps.map((p) => (
              <li key={p.step} className="border-t pt-6">
                <p className="font-serif text-3xl text-accent">{p.step}</p>
                <p className="mt-4 font-medium">{p.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 지원하기 */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 md:pb-32">
          <div className="flex flex-col items-start justify-between gap-8 bg-accent px-8 py-14 text-accent-foreground md:flex-row md:items-center md:px-14 md:py-16">
            <div>
              <p className="text-xs tracking-[0.3em]">APPLY</p>
              <h2 className="mt-4 font-serif text-2xl leading-snug md:text-4xl">지원서를 보내주세요.</h2>
              <p className="mt-4 leading-relaxed opacity-90">
                이력서와 경력기술서를 첨부하여 아래 메일로 제출해 주세요.
                <br />
                메일 제목: [MD 지원] 이름
              </p>
            </div>
            <a
              href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent('[MD 지원] ')}`}
              className="inline-flex shrink-0 items-center gap-3 bg-primary px-7 py-4 text-sm text-primary-foreground transition-colors hover:bg-background hover:text-foreground"
            >
              {APPLY_EMAIL}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

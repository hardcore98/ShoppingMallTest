import { Leaf, Recycle, Handshake, Ruler } from 'lucide-react'
import { SectionLabel } from './section-label'

const values = [
  {
    icon: Leaf,
    title: '책임 있는 소재',
    description: '전체 원단의 68%를 오가닉 코튼, 리사이클 울 등 인증 소재로 사용합니다.',
  },
  {
    icon: Ruler,
    title: '오래 입는 디자인',
    description: '시즌을 타지 않는 실루엣과 견고한 봉제로 옷의 수명을 늘립니다.',
  },
  {
    icon: Handshake,
    title: '공정한 파트너십',
    description: '국내외 협력 공장과 장기 계약을 맺고 정기적인 근로환경 감사를 진행합니다.',
  },
  {
    icon: Recycle,
    title: '순환하는 옷장',
    description: '중고 회수·수선 프로그램 ‘RE:LUNE’으로 옷이 다시 쓰이도록 돕습니다.',
  },
]

export function Values() {
  return (
    <section id="values" className="scroll-mt-20 bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="03" title="Sustainability" />
            <h2 className="mt-6 font-serif text-3xl leading-snug text-balance md:text-5xl">
              덜 사고, 더 오래 입는
              <br />
              패션을 위하여
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-primary-foreground/70">
              2030년까지 탄소 배출 50% 감축을 목표로, 소재 선택부터 포장, 배송까지 모든 단계를 다시
              설계하고 있습니다.
            </p>
          </div>

          <ul className="grid gap-px overflow-hidden bg-primary-foreground/15 sm:grid-cols-2 lg:col-span-7">
            {values.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex flex-col gap-4 bg-primary p-8">
                <Icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="font-serif text-xl">{title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/70">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

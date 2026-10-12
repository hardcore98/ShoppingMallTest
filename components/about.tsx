import Image from 'next/image'
import { SectionLabel } from './section-label'

const stats = [
  { value: '1.2M+', label: '누적 회원 수' },
  { value: '3', label: '운영 브랜드' },
  { value: '42', label: '국내외 오프라인 매장' },
  { value: '98%', label: '재구매 고객 만족도' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel index="01" title="About Us" />
            <h2 className="mt-6 font-serif text-3xl leading-snug text-balance md:text-5xl">
              옷 한 벌에 담긴
              <br />
              시간을 생각합니다.
            </h2>
          </div>

          <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground md:text-lg lg:col-span-6 lg:col-start-7">
            <p>
              2014년, 작은 온라인 편집숍으로 시작한 룬앤코는 &lsquo;매일 손이 가는 옷&rsquo;이라는
              단순한 질문에서 출발했습니다. 유행을 좇기보다 소재와 핏, 그리고 만드는 과정의 정직함에
              집중해 왔습니다.
            </p>
            <p>
              지금은 세 개의 자체 브랜드와 온·오프라인 채널을 운영하며, 기획부터 생산, 물류, 고객
              경험까지 모든 과정을 직접 설계합니다. 우리는 옷을 파는 회사가 아니라, 더 나은 일상을
              제안하는 회사가 되고자 합니다.
            </p>
          </div>
        </div>

        <div className="relative mt-16 aspect-[16/9] overflow-hidden md:mt-24 md:aspect-[21/9]">
          <Image
            src="/images/atelier.png"
            alt="디자이너가 원단 스와치와 패턴지를 작업대 위에 배치하는 모습"
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t pt-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 border-l pl-6 first:border-l-0 first:pl-0 [&:nth-child(3)]:border-l-0 [&:nth-child(3)]:pl-0 md:[&:nth-child(3)]:border-l md:[&:nth-child(3)]:pl-6">
              <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="order-1 font-serif text-4xl md:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

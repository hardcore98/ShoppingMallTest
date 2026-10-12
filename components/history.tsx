import { SectionLabel } from './section-label'

const milestones = [
  { year: '2026', events: ['일본 도쿄 첫 해외 플래그십 스토어 오픈', 'RE:LUNE 순환 프로그램 전국 확대'] },
  { year: '2023', events: ['라이프스타일 브랜드 Lune Weekend 런칭', '누적 회원 100만 명 돌파'] },
  { year: '2020', events: ['컨템포러리 라인 Maison Lune 런칭', '성수 플래그십 스토어 오픈'] },
  { year: '2017', events: ['자체 브랜드 LUNE Essential 런칭', '자체 물류센터 구축'] },
  { year: '2014', events: ['주식회사 룬앤코 설립', '온라인 편집숍 오픈'] },
]

export function History() {
  return (
    <section id="history" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionLabel index="04" title="History" />
            <h2 className="mt-6 font-serif text-3xl leading-snug text-balance md:text-5xl">
              천천히,
              <br />
              그러나 꾸준히.
            </h2>
          </div>
        </div>

        <ol className="lg:col-span-7 lg:col-start-6">
          {milestones.map((m) => (
            <li key={m.year} className="grid grid-cols-[5rem_1fr] gap-6 border-t py-8 md:grid-cols-[8rem_1fr] md:py-10">
              <p className="font-serif text-2xl text-accent md:text-3xl">{m.year}</p>
              <ul className="flex flex-col gap-2 pt-1 md:text-lg">
                {m.events.map((event) => (
                  <li key={event}>{event}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

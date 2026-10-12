import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from './section-label'

const brands = [
  {
    name: 'LUNE Essential',
    category: '데일리 베이직',
    description: '좋은 면과 린넨으로 만든, 매일 입어도 질리지 않는 기본의 옷.',
    image: '/images/brand-essential.png',
    alt: '오트밀과 화이트 톤의 린넨 셔츠가 원목 테이블 위에 개어져 있는 모습',
  },
  {
    name: 'Maison Lune',
    category: '컨템포러리 테일러링',
    description: '여유로운 실루엣과 정교한 재단이 만나는 모던 테일러링 라인.',
    image: '/images/brand-tailoring.png',
    alt: '차콜 울 수트를 입은 모델이 건축적인 복도를 걷는 모습',
  },
  {
    name: 'Lune Weekend',
    category: '라이프스타일 캐주얼',
    description: '주말의 여유를 닮은, 편안하고 따뜻한 컬러의 캐주얼 웨어.',
    image: '/images/brand-active.png',
    alt: '테라코타 컬러 니트 세트를 입은 여성이 골든아워의 들판에 서 있는 모습',
  },
]

export function Brands() {
  return (
    <section id="brands" className="scroll-mt-20 bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel index="02" title="Our Brands" />
            <h2 className="mt-6 font-serif text-3xl leading-snug text-balance md:text-5xl">
              세 가지 방식으로 입는 일상
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            각 브랜드는 서로 다른 순간을 위해 존재하지만, 같은 철학으로 만들어집니다.
          </p>
        </div>

        <ul className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          {brands.map((brand) => (
            <li key={brand.name}>
              <a href="#brands" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={brand.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs tracking-widest text-accent">{brand.category}</p>
                    <h3 className="mt-2 font-serif text-2xl">{brand.name}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{brand.description}</p>
                  </div>
                  <ArrowUpRight
                    className="mt-1 size-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

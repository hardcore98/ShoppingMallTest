import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="카멜 컬러 울 코트를 입은 모델이 햇살이 드는 미니멀한 공간에 서 있는 캠페인 사진"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 text-primary-foreground md:pb-24 lg:px-10">
        <p className="mb-6 text-xs tracking-[0.3em] opacity-80">SINCE 2014 · FASHION COMMERCE</p>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-balance md:text-6xl lg:text-7xl">
          오래 입을 옷,
          <br />
          오래 남을 가치.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed opacity-90 md:text-lg">
          룬앤코는 좋은 소재와 정직한 디자인으로 매일의 옷장을 채우는 패션 커머스 기업입니다.
          계절이 바뀌어도 변하지 않는 옷을 만듭니다.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#about"
            className="bg-primary-foreground px-7 py-3.5 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            회사 알아보기
          </a>
          <a
            href="#brands"
            className="border border-primary-foreground/70 px-7 py-3.5 text-sm transition-colors hover:bg-primary-foreground hover:text-foreground"
          >
            브랜드 보기
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="아래로 스크롤"
        className="absolute bottom-8 right-6 hidden items-center gap-3 text-xs tracking-widest text-primary-foreground/80 md:flex lg:right-10"
      >
        SCROLL
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  )
}

import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Brands } from '@/components/brands'
import { Values } from '@/components/values'
import { History } from '@/components/history'
import { Newsroom } from '@/components/newsroom'
import { Careers } from '@/components/careers'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Brands />
        <Values />
        <History />
        <Newsroom />
        <Careers />
      </main>
      <SiteFooter />
    </>
  )
}

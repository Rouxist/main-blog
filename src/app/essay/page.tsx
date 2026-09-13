import Header from '@/app/header'
import { getAllEssays } from '@/lib/api'
import { EssayList } from './_components/essay-list'

export default function Essay() {
  const essays = getAllEssays()

  return (
    <main>
      <header>
        <Header />
      </header>
      <section className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <h1 className="mb-12 text-center text-4xl font-bold tracking-tight md:text-6xl">
          Essay
        </h1>
        <EssayList essays={essays} />
      </section>
    </main>
  )
}

export function generateMetadata() {
  const title = 'Essay | Yongjin Kang'

  return {
    title,
    openGraph: {
      title,
    },
  }
}

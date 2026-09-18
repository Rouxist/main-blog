import Header from '@/app/header'
import { getAllEssays } from '@/lib/api'
import { FilteredEssayList } from './_components/filtered-essay-list'
import topics from '../../../public/_essay/topics.json'

export default function Essay() {
  const essays = getAllEssays()

  return (
    <main>
      <header>
        <Header />
      </header>
      <section className="mx-auto max-w-[90rem] px-6 pt-6 pb-6 md:pt-8 md:pb-8">
        <h1 className="mb-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Essay
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-neutral-500 md:text-base">
          혼란한 인공지능의 혼돈 속 인간이 빚어낸 글 저장소
        </p>
        <FilteredEssayList essays={essays} topicDetails={topics} />
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

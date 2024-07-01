import { getAllThreads } from '@/lib/api'
import { ThreadList } from '../_components_thread/thread-list'
import Header from '../header'

export default function Categories() {
  const allThreads = getAllThreads()

  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none my-12 text-center md:text-center">
          Threads
        </h1>
        <article>
          {allThreads.length > 0 && <ThreadList threads={allThreads} />}
        </article>
      </section>
    </main>
  )
}

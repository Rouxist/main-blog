import { Thread } from '@/interfaces/thread'
import { ThreadElement } from './thread-element'

type Props = {
  threads: Thread[]
}

export function ThreadList({ threads }: Props) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-1 place-items-center md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-8 mb-32">
        {threads.map((thread) => (
          <ThreadElement
            date={thread.date}
            title={thread.title}
            content={thread.content}
            key={'thread_' + thread.date.slice(0, 10)}
          />
        ))}
      </div>
    </section>
  )
}

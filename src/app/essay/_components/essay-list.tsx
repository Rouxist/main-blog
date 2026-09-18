import Link from 'next/link'
import { type Essay } from '@/interfaces/essay'
import DateFormatter from '@/app/_components_post/date-formatter'
import { Tags } from '@/app/_components_post/tags'
import { AuthorLinks } from './author-links'

export function EssayList({
  essays,
  headingLevel = 2,
}: {
  essays: Essay[]
  headingLevel?: 2 | 3
}) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  if (essays.length === 0) {
    return <p className="py-8 text-center text-neutral-600">No essays yet.</p>
  }

  return (
    <ul
      className={headingLevel === 2 ? 'border-t border-neutral-300' : undefined}
    >
      {essays.map((essay) => (
        <li key={essay.slug} className="border-b border-neutral-300 pt-8 pb-4">
          <Link
            href={`/essay/${essay.slug}`}
            className="block text-black hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <Heading className="mb-3 text-2xl font-normal leading-snug md:text-3xl">
              {essay.title}
            </Heading>
          </Link>
          <div className="mb-4 text-sm text-neutral-600">
            <DateFormatter dateString={essay.date} showTime={false} />
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <AuthorLinks authors={essay.authors} />
          </div>
          <p
            className={
              essay.tags?.length ? 'mb-4 leading-relaxed' : 'leading-relaxed'
            }
          >
            {essay.excerpt}
          </p>
          <Tags tags={essay.tags} />
        </li>
      ))}
    </ul>
  )
}

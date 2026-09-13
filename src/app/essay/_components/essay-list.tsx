import Link from 'next/link'
import { type Essay } from '@/interfaces/essay'
import DateFormatter from '@/app/_components_post/date-formatter'
import CoverImage from '@/app/_components_post/cover-image'
import { Tags } from '@/app/_components_post/tags'
import { AuthorLinks } from './author-links'

export function EssayList({ essays }: { essays: Essay[] }) {
  if (essays.length === 0) {
    return <p className="text-center text-neutral-600">No essays yet.</p>
  }

  return (
    <ul className="divide-y divide-neutral-300 border-y border-neutral-300">
      {essays.map((essay) => (
        <li key={essay.slug} className="py-8">
          <Link
            href={`/essay/${essay.slug}`}
            className="block text-black hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {essay.coverImage && (
              <CoverImage title={essay.title} src={essay.coverImage} />
            )}
            <h2 className="mb-3 text-2xl leading-snug md:text-3xl">
              {essay.title}
            </h2>
          </Link>
          <div className="mb-4 text-sm text-neutral-600">
            <DateFormatter dateString={essay.date} />
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <AuthorLinks authors={essay.authors} />
          </div>
          <p className="mb-4 leading-relaxed">{essay.excerpt}</p>
          <Tags tags={essay.tags} />
        </li>
      ))}
    </ul>
  )
}

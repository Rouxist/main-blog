import Link from 'next/link'
import { type EssayAuthor } from '@/interfaces/essay'

export function AuthorLinks({ authors }: { authors: EssayAuthor[] }) {
  return (
    <span>
      {authors.map((author, index) => (
        <span key={author.id}>
          {index > 0 && ', '}
          <Link
            href={`/essay/authors/${encodeURIComponent(author.id)}`}
            className="hover:underline"
          >
            {author.name}
          </Link>
        </span>
      ))}
    </span>
  )
}

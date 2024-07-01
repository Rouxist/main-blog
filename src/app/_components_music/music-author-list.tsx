import { MusicAuthor } from '@/interfaces/musicAuthor'
import { MusicAuthorElement } from './music-author-element'

type Props = {
  authors: MusicAuthor[]
}

export function MusicAuthorList({ authors }: Props) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-3 place-items-center md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-8 mb-32">
      {authors.map((author) => (
        <div key={'gallery_' + author.slug}>
          <a className="text-black" href={`/music/${author.slug}`}>
            <MusicAuthorElement
              slug={author.slug}
              name={author.name}
              profileImgSrc={author.profileImgSrc}
              title={author.title}
              desc={author.desc}
            />
          </a>
        </div>
      ))}
    </article>
  )
}

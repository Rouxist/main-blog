import { MusicAuthor } from '@/interfaces/musicAuthor'
import { MusicAuthorElement } from './music-author-element'

type Props = {
  authors: MusicAuthor[]
}

export function MusicAuthorList({ authors }: Props) {
  return (
    <article>
      <div className="2xl:w-[1528px] lg:w-[1146px] md:w-[764px] w-[382px] mx-auto">
        {authors.map((author) => (
          <div
            className="m-4 inline-block align-top"
            key={'gallery_' + author.slug}
          >
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
      </div>
    </article>
  )
}

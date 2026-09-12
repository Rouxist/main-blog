import { type Author } from '@/interfaces/author'
import { Tags } from './tags'
import Avatar from './avatar'
import CoverImage from './cover-image'
import DateFormatter from './date-formatter'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  tags: string[]
}

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}: Props) {
  return (
    <div className="md:px-12 px-6 md:py-8 sm:py-4 py-3 md:w-[50vw] sm:w-[65vw] w-[90vw] my-3 sm:my-6 text-black border-2 border-black-600 md:hover:scale-105 md:transition-all md:duration-250">
      {coverImage ? (
        <div className="mb-3 sm:mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      ) : (
        <></>
      )}
      <h3 className="md:text-3xl text-xl mb-1.5 sm:mb-3 leading-snug">{title}</h3>
      <div className="md:text-lg text-base mb-1 sm:mb-2">
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-1 sm:mb-2">
        <Tags tags={tags} />
      </div>
      <p className="md:text-lg text-base leading-relaxed mb-2 sm:mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

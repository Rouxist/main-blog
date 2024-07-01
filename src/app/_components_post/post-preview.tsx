import { type Author } from '@/interfaces/author'
import Link from 'next/link'
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
}

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="p-10 w-[50rem] m-0 text-black border-2 border-black-600 hover:text-veriperi hover:scale-105 transition-all duration-250">
      {coverImage ? (
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      ) : (
        <></>
      )}
      <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

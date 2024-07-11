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
    <div className="px-12 py-8 md:w-[50vw] w-[350px] my-2 text-black border-2 border-black-600 hover:scale-105 transition-all duration-250">
      {coverImage ? (
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      ) : (
        <></>
      )}
      <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
      <div className="text-lg mb-2">
        <DateFormatter dateString={date} />
      </div>
      <div className="md:w-[40vw] w-[280px]  mb-2">
        <Tags tags={tags} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

import Avatar from './avatar'
import CoverImage from './cover-image'
import DateFormatter from './date-formatter'
import { PostTitle } from './post-title'
import { Tags } from './tags'
import { type Author } from '@/interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
  tags: string[]
}

export function PostHeader({ title, coverImage, date, author, tags }: Props) {
  return (
    <div className="container max-w-5xl mx-auto pt-12">
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block mb-8">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <div className="items-start flex">
        <div className="text-xl mr-2 pt-1 pt-0.5">Tags:</div>
        <div className="grow">
          <Tags tags={tags} />
        </div>
      </div>
      {coverImage ? (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

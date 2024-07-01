import Avatar from './avatar'
import CoverImage from './cover-image'
import DateFormatter from './date-formatter'
import { PostTitle } from './post-title'
import { type Author } from '@/interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <section>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
      {coverImage ? (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
      ) : (
        <></>
      )}
    </section>
  )
}

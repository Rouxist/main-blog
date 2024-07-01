import { Post } from '@/interfaces/posts'
import { PostPreview } from './post-preview'
import Link from 'next/link'

type Props = {
  title: string
  posts: Post[]
}

export function MoreStories({ title, posts }: Props) {
  return (
    <section className="grid grid-cols-1 place-items-center md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-8 mb-32">
      {posts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={'post_' + post.slug}>
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        </Link>
      ))}
    </section>
  )
}

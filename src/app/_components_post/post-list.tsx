import { Post } from '@/interfaces/posts'
import { PostPreview } from './post-preview'
import Link from 'next/link'

type Props = {
  title: string
  posts: Post[]
}

export function MoreStories({ title, posts }: Props) {
  return (
    <section>
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
            tags={post.tags}
          />
        </Link>
      ))}
    </section>
  )
}

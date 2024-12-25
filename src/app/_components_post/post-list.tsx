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
      <div className="flex flex-col items-center w-[100vw]">
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
      </div>
    </section>
  )
}

import { getAllPosts } from '@/lib/api'
import { MoreStories } from '@/app/_components_post/post-list'
import Header from '../header'

export default function Categories() {
  const allPosts = getAllPosts()
  const recentPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <h1 className="text-5xl mt-6 py-4 md:text-7xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none text-center">
          Blog
        </h1>
        <article>
          <div className="pt-4">
            {allPosts.length > 0 && (
              <MoreStories title="All posts" posts={allPosts} />
            )}
          </div>
        </article>
      </section>
    </main>
  )
}

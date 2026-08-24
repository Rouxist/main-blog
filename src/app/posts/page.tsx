import { getAllPosts, getCategoryTree } from '@/lib/api'
import { PostArea } from '../_components_post/post-area'
import Header from '../header'

export default function Categories() {
  const allPosts = getAllPosts()
  const categoryTree = getCategoryTree()

  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <h1 className="md:textl-5xl text-4xl mt-6 py-4 md:text-7xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none text-center">
          Blog
        </h1>
        <article>
          <PostArea allPosts={allPosts} categoryTree={categoryTree} />
        </article>
      </section>
    </main>
  )
}

export function generateMetadata() {
  const title = 'Blog | Yongjin Kang'

  return {
    title,
    openGraph: {
      title,
    },
  }
}

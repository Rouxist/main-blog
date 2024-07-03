import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import Header from '@/app/header'
import { PostBody } from '@/app/_components_post/post-body'
import { PostHeader } from '@/app/_components_post/post-header'

import 'highlight.js/styles/atom-one-dark.css'

const testFolder = './tests/'
const fs = require('fs')

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug)

  if (!post.title) {
    return notFound()
  }

  const content = await markdownToHtml(post.content || '')

  return (
    <main>
      <base target="_blank"></base>
      {/* for KaTeX */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
        integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
        crossOrigin="anonymous"
      ></link>
      <header>
        <Header />
      </header>
      <section>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          tags={post.tags}
        />
        <article>
          <PostBody content={content} />
        </article>
      </section>
    </main>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const title = `${post.title} | Gallery`

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

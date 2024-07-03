import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getThreadBySlug } from '@/lib/api'
import DateFormatter from '@/app/_components_post/date-formatter'
import Header from '@/app/header'

import 'highlight.js/styles/atom-one-dark.css'

const testFolder = './tests/'
const fs = require('fs')

export default async function Thread({ params }: Params) {
  const thread = getThreadBySlug(params.slug)

  if (!thread.title) {
    return notFound()
  }

  // const elements = await markdownToHtml(gallery.content || '')

  return (
    <main>
      <base target="_blank"></base>
      <header>
        <Header />
      </header>
      <section className="mb-32">
        <div>{thread.title}</div>
        <div className="text-lg mb-4">
          <DateFormatter dateString={thread.date} />
        </div>
        <article>{thread.content}</article>
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
  const gallery = getThreadBySlug(params.slug)

  if (!gallery) {
    return notFound()
  }

  const title = `${gallery.title} | Gallery`

  return {
    title,
    openGraph: {
      title,
    },
  }
}

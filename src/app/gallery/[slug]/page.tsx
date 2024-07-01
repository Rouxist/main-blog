import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getGalleryBySlug } from '@/lib/api'
import { PhotoList } from '@/app/_components_gallery/photo-list'
import Header from '@/app/header'
import DateFormatter from '@/app/_components_post/date-formatter'

import 'highlight.js/styles/atom-one-dark.css'

const testFolder = './tests/'
const fs = require('fs')

export default async function Photo({ params }: Params) {
  const gallery = getGalleryBySlug(params.slug)
  const elementsArray = gallery.elements
  //   console.log(typeof elementsArray[0] as Photo)
  if (!gallery.title) {
    return notFound()
  }

  // const elements = await markdownToHtml(gallery.content || '')

  return (
    <main>
      <header>
        <Header />
      </header>
      <base target="_blank"></base>
      <section>
        <div className="text-xl px-24 py-8">
          <p>행사: {gallery.title}</p>
          <p>설명: {gallery.desc}</p>
          <p>장소: {gallery.location.toString()}</p>
          <p>
            일시: <DateFormatter dateString={gallery.date} />
          </p>
        </div>
        <article>
          {elementsArray.length > 0 && <PhotoList photos={elementsArray} />}
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
  const gallery = getGalleryBySlug(params.slug)

  if (!gallery) {
    return notFound()
  }

  const title = `${gallery.excerpt} | Gallery`

  return {
    title,
    openGraph: {
      title,
    },
  }
}

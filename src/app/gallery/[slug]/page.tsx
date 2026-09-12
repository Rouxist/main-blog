;`use client`

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

  if (!gallery.title) {
    return notFound()
  }

  // const elements = await markdownToHtml(gallery.content || '')

  return (
    <main>
      <header>{/* <Header /> */}</header>
      <a className="text-2xl pt-4 pl-4" href="/gallery">
        Back
      </a>
      <section>
        <div className="md:px-24 px-8">
          <p className="md:text-3xl text-2xl font-bold mb-1">{gallery.title}</p>
          <p className="md:text-base text-xs mb-1">
            <DateFormatter dateString={gallery.date} /> |{' '}
            {gallery.location.toString()}
          </p>
          <p className="md:text-xl text-sm">{gallery.desc}</p>
        </div>
        <article>
          {elementsArray.length > 0 && (
            <PhotoList photos={elementsArray} year={gallery.date.slice(0, 4)} />
          )}
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

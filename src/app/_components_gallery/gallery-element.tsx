import DateFormatter from '../_components_post/date-formatter'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'

type Props = {
  slug: string
  date: string
  location: string[]
  category: string[]
  excerpt: string
  title: string
  desc: string
  thumbnail: string
}

export function GalleryElement({
  slug,
  date,
  location,
  category,
  excerpt,
  title,
  desc,
  thumbnail,
}: Props) {
  return (
    <div className="p-10 w-[30rem] h-[50rem] m-0 border-2 border-black-600 hover:text-veriperi hover:scale-105 transition-all duration-250">
      <Image
        src={thumbnail}
        width={300}
        height={400}
        alt={'thumbnail_' + slug}
      />
      <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
      <p className="text-lg leading-relaxed mb-4">{desc}</p>
      <DateFormatter dateString={date}></DateFormatter>
      <p className="text-lg leading-relaxed mb-4">{location.toString()}</p>
    </div>
  )
}

type titleProp = {
  galleryTitle: string
}

export function generateMetadata({ galleryTitle }: titleProp): Metadata {
  if (!galleryTitle) {
    return notFound()
  }

  const title = `${galleryTitle} | Gallery`

  return {
    title,
    openGraph: {
      title,
    },
  }
}

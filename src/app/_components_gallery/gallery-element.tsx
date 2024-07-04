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
    <div className="w-[20vw] h-[60vh] hover:scale-105 transition-all duration-250">
      <div className="h-[45vh] flex items-center">
        <Image
          src={thumbnail}
          width={200}
          height={200}
          style={{ width: '20vw' }}
          alt={'thumbnail_' + slug}
        />
      </div>
      <div className="w-[16vw] h-[10vh] mx-auto mt-4 mb-2 p-2 text-xl leading-snug border border-black">
        <h3 className="text-xl leading-snug mb-1">{title}</h3>
        <DateFormatter dateString={date}></DateFormatter>
      </div>
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

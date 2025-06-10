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
    <div className="md:w-[300px] w-[40vw] md:h-[360px] md:hover:scale-105 md:transition-all md:duration-250">
      <div className="relative md:h-[400px] flex items-center">
        <Image
          src={thumbnail}
          width={200}
          height={200}
          className="w-[40vw] h-[50vw] md:w-[300px] md:h-[360px]"
          alt={'thumbnail_' + slug}
        />
        <div className="absolute md:bottom-4 bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        <div className="absolute md:bottom-8 bottom-4 left-4 text-white md:text-lg text-xs z-10 md:h-[3.5em] truncate max-w-[80%] overflow-hidden whitespace-nowrap">
          {title}
        </div>
        <div className="absolute md:bottom-0 bottom-0 left-4 text-white md:text-base md:block hidden z-10 h-[3.5em]">
          <DateFormatter dateString={date}></DateFormatter>
        </div>
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

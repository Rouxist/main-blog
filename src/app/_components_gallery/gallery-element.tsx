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
    <div className="md:w-[350px] w-[40vw] md:h-[600px] h-[75vw] md:hover:scale-105 md:transition-all md:duration-250">
      <div className="md:h-[400px] h-[200px] flex items-center">
        <Image
          src={thumbnail}
          width={200}
          height={200}
          className="w-[40vw] h-[50vw] md:w-[350px] md:h-[400px]"
          alt={'thumbnail_' + slug}
        />
      </div>
      <div className="md:w-[300px] w-[40vw] md:h-[100px] mx-auto md:mt-4 mt-4 mb-2 p-2 md:text-xl text-sm leading-snug border border-black">
        <h3 className="md:text-xl text-xs leading-snug md:mb-1">{title}</h3>
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

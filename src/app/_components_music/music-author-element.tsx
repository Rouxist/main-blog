import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

type Props = {
  slug: string
  name: string
  profileImgSrc: string
  title: string
  desc: string
}

export function MusicAuthorElement({
  slug,
  name,
  profileImgSrc,
  title,
  desc,
}: Props) {
  return (
    <div className="p-10 w-[350px] h-[600px] m-0 border-2 border-black-600 hover:text-veriperi hover:scale-105 transition-all duration-250">
      <Image
        src={profileImgSrc}
        width={350}
        height={300}
        alt={'thumbnail_' + slug}
      />
      <h3 className="text-xl my-4 leading-snug">{name}</h3>
      <h3 className="text-3xl mb-2 leading-snug">{title}</h3>
      <p className="text-lg leading-relaxed mb-4">{desc}</p>
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

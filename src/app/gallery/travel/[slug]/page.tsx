import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/app/header'
import { TravelImage } from '@/app/_components_gallery/travel-image'
import { getTravelBySlug, getTravelSlugs } from '@/lib/api'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getTravelSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const album = getTravelBySlug(params.slug)
  if (!album) notFound()

  return {
    title: `${album.title} | Travel | Gallery`,
    description: album.excerpt,
  }
}

export default function TravelAlbumPage({ params }: Props) {
  const album = getTravelBySlug(params.slug)
  if (!album) notFound()

  return (
    <main>
      <header>
        <Header />
      </header>
      <article className="mx-auto max-w-4xl px-5 pb-16 md:px-8">
        <Link href="/gallery/travel" className="my-6 inline-block text-sm">
          ← Back to travel albums
        </Link>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {album.title}
        </h1>
        <p className="mt-3 font-sans text-sm text-neutral-500">
          <time dateTime={album.date}>{album.date.slice(0, 10)}</time>
          {' · '}
          {album.location.join(', ')}
        </p>
        {album.desc && <p className="mt-4 whitespace-pre-line">{album.desc}</p>}
        <div className="mt-10 space-y-12">
          {album.elements.map((photo, index) => (
            <figure key={`${photo.src}-${index}`}>
              {photo.title && <h2 className="mb-3 text-2xl">{photo.title}</h2>}
              <TravelImage src={photo.src} alt={photo.alt} />
              {photo.desc && (
                <figcaption className="mt-3 whitespace-pre-line text-neutral-600">
                  {photo.desc}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </article>
    </main>
  )
}

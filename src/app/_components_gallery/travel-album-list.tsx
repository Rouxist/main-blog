import Link from 'next/link'
import { getAllTravels } from '@/lib/api'
import { TravelImage } from './travel-image'

export function TravelAlbumList() {
  const albums = getAllTravels()

  return (
    <section aria-label="Travel albums" className="min-h-[50vh]">
      <p className="pb-6 font-sans text-sm text-neutral-500">
        {albums.length} {albums.length === 1 ? 'album' : 'albums'}
      </p>
      {albums.length === 0 && (
        <p className="border-t border-black py-16 text-center text-neutral-600">
          No trips here yet. More moments to come.
        </p>
      )}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {albums.map((album) => {
          const thumbnail = album.elements.find(
            (photo) => photo.src === album.thumbnail,
          )
          if (!thumbnail) throw new Error(`Missing thumbnail for ${album.slug}`)

          return (
            <Link
              key={album.slug}
              href={`/gallery/travel/${album.slug}`}
              className="group block text-black no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <div className="aspect-[4/5] overflow-hidden bg-neutral-200">
                <TravelImage
                  src={album.thumbnail}
                  alt={album.title}
                  width={thumbnail.width}
                  height={thumbnail.height}
                  thumbnail
                  quality={album.imageQuality}
                />
              </div>
              <h2 className="mt-3 text-xl group-hover:underline">
                {album.title}
              </h2>
              <p className="mt-1 font-sans text-xs text-neutral-500">
                <time dateTime={album.date}>
                  {album.date.slice(0, 10).replaceAll('-', '.')}
                </time>
                {' · '}
                {album.location.join(', ')}
              </p>
              {album.excerpt && (
                <p className="mt-2 line-clamp-1 text-sm">{album.excerpt}</p>
              )}
            </Link>
          )
        })}
      </div>
    </section>
  )
}

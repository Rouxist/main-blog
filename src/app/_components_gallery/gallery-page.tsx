import Image from 'next/image'
import Link from 'next/link'
import Header from '@/app/header'
import { getAllGalleries } from '@/lib/api'
import { Gallery } from '@/interfaces/gallery'
import { GalleryViewSelector } from './gallery-view-selector'

export function GalleryPage({
  view = 'timeline',
}: {
  view?: 'timeline' | 'map' | 'travel'
}) {
  const galleries = view === 'travel' ? [] : getAllGalleries()
  const visibleGalleries =
    view === 'map'
      ? galleries.filter((gallery) =>
          gallery.category.some((category) =>
            ['places', 'view', 'travel'].includes(category),
          ),
        )
      : galleries
  const groups = new Map<string, Gallery[]>()

  visibleGalleries.forEach((gallery) => {
    const key =
      view === 'timeline'
        ? gallery.date.slice(0, 4)
        : gallery.location[0]?.split(',')[0].trim() || 'Elsewhere'
    groups.set(key, [...(groups.get(key) || []), gallery])
  })

  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="mx-auto max-w-[1440px] px-5 pb-16 md:px-12">
        <h1 className="md:textl-5xl text-4xl mt-6 py-4 md:text-7xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none text-center">
          Gallery
        </h1>
        <div className="py-6">
          <GalleryViewSelector view={view} />
        </div>
        {view === 'travel' ? (
          <div className="min-h-[50vh]" aria-label="Travel gallery" />
        ) : (
          <>
            <div className="flex flex-col justify-between gap-3 pb-6 font-sans text-sm sm:flex-row">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden">
                  Gears
                  <span className="text-neutral-500 group-open:hidden">
                    (show)
                  </span>
                  <span className="hidden text-neutral-500 group-open:inline">
                    (hide)
                  </span>
                </summary>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-500">
                  <li>iPhone 8</li>
                  <li>iPhone 13 mini</li>
                  <li>
                    Sony a6400
                    <ul className="mt-1 list-[circle] pl-5">
                      <li>Sigma C 18-50mm F2.8</li>
                      <li>Sony SEL50F18</li>
                    </ul>
                  </li>
                </ul>
              </details>
              <p className="text-neutral-500">
                {visibleGalleries.length} albums / {groups.size}{' '}
                {view === 'timeline' ? 'years' : 'destinations'}
              </p>
            </div>
            {visibleGalleries.length === 0 && (
              <p className="border-t border-black py-16 text-center text-neutral-600">
                No albums here yet. More moments to come.
              </p>
            )}
            {Array.from(groups, ([label, albums]) => (
              <section
                key={label}
                aria-label={label}
                className="border-t border-black pt-6"
              >
                <div className="mb-6 flex items-baseline gap-3">
                  <h2 className="text-3xl tracking-tight">{label}</h2>
                  <span className="font-sans text-xs text-neutral-500">
                    {albums.length} {albums.length === 1 ? 'album' : 'albums'}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {albums.map((gallery) => (
                    <Link
                      key={gallery.slug}
                      href={`/gallery/${gallery.slug}`}
                      className="group block text-black no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                        <Image
                          src={gallery.thumbnail}
                          alt={gallery.title}
                          fill
                          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/50 to-transparent"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                          <h3 className="text-lg leading-relaxed group-hover:underline">
                            {gallery.title}
                          </h3>
                          <div className="mt-2 flex flex-wrap justify-between gap-x-3 gap-y-1 font-sans text-xs">
                            <time dateTime={gallery.date}>
                              {gallery.date.slice(0, 10).replaceAll('-', '.')}
                            </time>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </>
        )}
        <div className="mt-8 border-t border-black" aria-hidden="true" />
      </div>
    </main>
  )
}

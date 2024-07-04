import { Gallery } from '@/interfaces/gallery'
import { GalleryElement } from './gallery-element'
import { getAllGalleries } from '@/lib/api'

type Props = {
  galleries: Gallery[]
}

export function GalleryList({ galleries }: Props) {
  return (
    <article className="grid grid-cols-1 grid-cols-4 place-items-center gap-y-20 md:gap-y-8 mb-32">
      {galleries.map((gallery) => (
        <div key={'gallery_' + gallery.slug}>
          <a className="text-black" href={`/gallery/${gallery.slug}`}>
            <GalleryElement
              slug={gallery.slug}
              date={gallery.date}
              location={gallery.location}
              category={gallery.category}
              excerpt={gallery.excerpt}
              title={gallery.title}
              desc={gallery.desc}
              thumbnail={gallery.thumbnail}
            />
          </a>
        </div>
      ))}
    </article>
  )
}

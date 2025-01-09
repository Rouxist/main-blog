import { Gallery } from '@/interfaces/gallery'
import { GalleryElement } from './gallery-element'
import { getAllGalleries } from '@/lib/api'

type Props = {
  galleries: Gallery[]
}

export function GalleryList({ galleries }: Props) {
  return (
    <article>
      <div className="2xl:w-[1528px] md:w-[764px] mx-auto">
        {galleries.map((gallery) => (
          <div
            className="md:m-4 m-[5vw] inline-block align-top"
            key={'gallery_' + gallery.slug}
          >
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
      </div>
    </article>
  )
}

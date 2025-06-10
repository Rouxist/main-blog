import { Gallery } from '@/interfaces/gallery'
import { GalleryElement } from './gallery-element'
import { getAllGalleries } from '@/lib/api'

type Props = {
  galleries: Gallery[]
}

export function GalleryList({ galleries }: Props) {
  return (
    <article>
      <div className="xl:w-[1264px] md:w-[632px] w-[calc(80vw+32px)] mx-auto">
        {galleries.map((gallery) => (
          <div
            className="m-2 inline-block align-top"
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

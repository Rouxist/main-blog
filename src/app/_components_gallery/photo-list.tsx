import { Photo } from '@/interfaces/photo'
import { PhotoElement } from './photo-element'

type Props = {
  photos: Photo[]
}

export function PhotoList({ photos }: Props) {
  return (
    <article>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-8 mb-32">
        {photos.map((photo) => (
          <PhotoElement
            src={photo.src}
            title={photo.title}
            alt={photo.alt}
            desc={photo.desc}
            video={photo.video}
          />
        ))}
      </div>
    </article>
  )
}

import Image from 'next/image'
import { getTravelImageDimensions } from '@/lib/travel-image'

export async function TravelImage({
  src,
  alt,
  thumbnail = false,
}: {
  src: string
  alt: string
  thumbnail?: boolean
}) {
  const dimensions = await getTravelImageDimensions(src)

  if (!dimensions) {
    return (
      <div
        role="img"
        aria-label={alt ? `${alt} — photo coming soon` : 'Photo coming soon'}
        className={`flex items-center justify-center bg-neutral-200 font-sans text-sm text-neutral-600 ${thumbnail ? 'h-full w-full' : 'aspect-[3/2] w-full'}`}
      >
        Photo coming soon
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      sizes={
        thumbnail
          ? '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw'
          : '(max-width: 895px) 100vw, 896px'
      }
      className={
        thumbnail
          ? 'h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none'
          : 'mx-auto h-auto max-h-[80svh] w-auto max-w-full object-contain'
      }
    />
  )
}

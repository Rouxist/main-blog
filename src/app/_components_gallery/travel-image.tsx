import Image from 'next/image'

export function TravelImage({
  src,
  alt,
  width,
  height,
  thumbnail = false,
  quality = 75,
}: {
  src: string
  alt: string
  width: number
  height: number
  thumbnail?: boolean
  quality?: number
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
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

import Image from 'next/image'

type Props = {
  src: string
  title: string
  alt: string
  desc: string
  video: boolean
}

export function PhotoElement({ src, title, alt, desc }: Props) {
  return (
    <div className="p-10 w-[25rem] h-[30rem] m-0 border-2 border-black-600">
      <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
      <Image src={src} width={225} height={200} alt={alt} />
      <p className="text-lg leading-relaxed mb-4">{desc}</p>
    </div>
  )
}

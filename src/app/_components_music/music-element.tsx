import { time } from 'console'
import Image from 'next/image'

type Props = {
  year: number
  title: string
  artist: string
  src: string
  desc: string
  islast: boolean
}

function timelineLine(islast: boolean) {
  if (islast) {
    return 'relative pl-12 w-[1000px] py-8 before:left-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-4 before:h-1/2 before:bg-indigo-500 after:absolute after:-left-3 after:top-1/2 after:transform after:-translate-y-1/2 after:w-10 after:h-10 after:rounded-full after:bg-indigo-500'
  } else {
    return 'relative pl-12 w-[1000px] py-8 before:left-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-4 before:h-250 before:bg-indigo-500 after:absolute after:-left-3 after:top-1/2 after:transform after:-translate-y-1/2 after:w-10 after:h-10 after:rounded-full after:bg-indigo-500'
  }
}

export function MusicElement({
  year,
  title,
  artist,
  src,
  desc,
  islast,
}: Props) {
  return (
    <tr>
      <td className="text-5xl font-bold text-right py-8 whitespace-nowrap w-[10rem] h-[250px] px-8 py-4 relative">
        {year}
      </td>
      <td className={timelineLine(islast)}>
        <div className="flex items-center">
          <div className="inline-block flex items-center shadow-2xl">
            <Image src={src} alt={title} width={200} height={200}></Image>
          </div>
          <div className="inline-block pl-8 w-[750px]">
            <h2 className="text-3xl pb-1">{title}</h2>
            <h3 className="text-2xl pb-1">{artist}</h3>
            <p className="text-xl">{desc}</p>
          </div>
        </div>
      </td>
    </tr>
  )
}

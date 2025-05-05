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
    return 'relative pl-12 w-[1000px] py-16 before:left-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-4 before:h-1/2 before:bg-indigo-500 after:absolute after:-left-3 after:top-1/2 after:transform after:-translate-y-1/2 after:w-10 after:h-10 after:rounded-full after:bg-indigo-500'
  } else {
    return 'relative md:pl-12 pl-6 w-[1000px] md:py-16 py-6 before:left-0 before:absolute before:left-0 before:top-0 before:bottom-0 md:before:w-4 before:w-2 before:h-250 before:bg-indigo-500 after:absolute md:after:-left-3 after:-left-1.5 after:top-1/2 after:transform after:-translate-y-1/2 md:after:w-10 after:w-5 md:after:h-10 after:h-5 after:rounded-full after:bg-indigo-500'
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
      <td className="md:text-5xl text-base font-bold text-right whitespace-nowrap md:w-[10rem] w-[50vw] h-[250px] md:px-8 px-4 py-4 relative">
        {year}
      </td>
      <td className={timelineLine(islast)}>
        <div className="flex items-center">
          <div className="inline-block items-center shadow-2xl md:w-fit w-[20vw]">
            <Image src={src} alt={title} width={200} height={200}></Image>
          </div>
          <div className="inline-block md:px-8 px-4 w-[100%]">
            <h2 className="md:text-3xl text-base pb-1 font-bold">{title}</h2>
            <h3 className="md:text-2xl text-sm pb-1">{artist}</h3>
            <p className="md:text-xl text-xs">{desc}</p>
          </div>
        </div>
      </td>
    </tr>
  )
}

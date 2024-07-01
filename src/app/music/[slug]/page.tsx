import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { getMusicAuthorBySlug } from '@/lib/api'
import { MusicList } from '@/app/_components_music/music-list'
import Header from '@/app/header'

export default function MusicTimeline({ params }: Params) {
  const author = getMusicAuthorBySlug(params.slug)
  const title = author.title
  const name = author.name
  const desc = author.desc
  const profileImgSrc = author.profileImgSrc
  const musicList = author.elements

  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <h3 className="text-3xl md:text-5xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none my-8 text-center md:text-center">
          {name}
        </h3>
        <h2 className="text-4xl md:text-6xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none my-8 text-center md:text-center">
          {title}
        </h2>
        <p className="text-1xl md:text-3xl lg:text-2xl tracking-tighter leading-tight md:leading-none my-4 text-center md:text-center">
          {desc}
        </p>
        <article className="pt-16">
          {musicList.length > 0 && <MusicList musics={musicList} />}
        </article>
      </section>
    </main>
  )
}

import { getAllMusicAuthors } from '@/lib/api'
import { MusicAuthorList } from '../_components_music/music-author-list'
import Header from '../header'

export default function Categories() {
  const allMusicAuthors = getAllMusicAuthors()

  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <h1 className="text-5xl font-bold tracking-tighter my-8 text-center">
          Music
        </h1>
        <h2 className="text-xl text-center my-8 px-4">
          저와 주변 친구들이 시기별로 좋아했던 곡들을 모았습니다. 곡마다 표시된
          연도는 각자가 그 곡을 많이 들었던 시기를 나타내며, 해당 곡의
          발매연도와는 상이할 수 있습니다.
        </h2>
        <article>
          {allMusicAuthors.length > 0 && (
            <MusicAuthorList authors={allMusicAuthors} />
          )}
        </article>
      </section>
    </main>
  )
}

import { Music } from '@/interfaces/music'
import { MusicElement } from '../_components_music/music-element'

type Props = {
  musics: Array<Music>
}

export function MusicList({ musics }: Props) {
  const numMusic = musics.length
  return (
    <section>
      <table className="mx-auto">
        <tbody>
          {musics.map((music, idx) => (
            <MusicElement
              year={music.year}
              title={music.title}
              artist={music.artist}
              src={music.src}
              desc={music.desc}
              islast={idx == numMusic - 1}
              key={'music_' + music.year + '_' + music.artist}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}

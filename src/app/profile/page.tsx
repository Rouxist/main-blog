import Header from '@/app/header'
import Image from 'next/image'
import Link from 'next/link'

export default async function Profile() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <figure className="w-fit mt-16 mx-auto">
          <Image
            src="/assets/main/profile_full.png"
            width={300}
            height={400}
            alt="profile_image"
          />
          <figcaption className="text-gray-500">2024.04.27</figcaption>
        </figure>
        <article className="md:w-[60vw] w-[350px] mx-auto">
          <div className="text-center md:text-xl mt-8">
            <a href="/assets/cv/cv_20250504.pdf" target="_blank">
              [cv]
            </a>
          </div>
          <ul className="list-disc md:text-xl text-md mt-8">
            <li className="my-3">
              2021년부터 시작한 사이드프로젝트를 통해{' '}
              <Link href="https://silgam.app">앱 서비스</Link>를 운영하고
              있습니다.
            </li>
            <li className="my-3">
              큐브 맞추기는 삶에 큰 영향을 준 취미 활동입니다. 과거 한 종목의{' '}
              <Link href="https://www.worldcubeassociation.org/competitions/KoreanChampionship2016/results/all?event=sq1">
                단일
              </Link>
              /
              <Link href="https://www.worldcubeassociation.org/competitions/BusanWinter2016/results/all?event=sq1">
                평균
              </Link>{' '}
              기록 한국 신기록 수립 경험이 있습니다.
            </li>
            <li className="my-3">
              기타 연주를 취미로 하고 있습니다. 그 외에도 좋아하는 장르의 곡들을{' '}
              <Link href="/music/music_history_yongjin">Music</Link> 탭에
              정리하고 있습니다.
            </li>
            <li className="my-3">
              일상 속 별 것 아닌 풍경과 소재들을 사진으로 담곤 합니다.{' '}
              <Link href="/gallery/timeline">Photo</Link> 탭에 여러 추억들을
              기록하고 있습니다.
            </li>
            <li className="my-3">
              여러가지 생각들을 글로 써내는 것도 좋아합니다.{' '}
              <Link href="/threads">Threads</Link> 탭에 남겨두고 싶은 생각들을
              정리하고 있습니다.
            </li>
            <li className="my-3">
              초등학교와 중학교는 충주, 고등학교는 안산, 학부는 서울에서
              다녔습니다. 서울은 많은 힘이 되었던 도시입니다.
            </li>
            <li className="my-3">
              민트초코, 하와이안 피자, 닥터페퍼, 토닉워터를 좋아합니다.
            </li>
          </ul>
        </article>
      </section>
    </main>
  )
}

export function generateMetadata() {
  const title = 'Profile | Gallery'

  return {
    title,
    openGraph: {
      title,
    },
  }
}

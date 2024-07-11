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
        <figure className="w-fit mt-8 mx-auto">
          <Image
            src="/assets/main/profile_full.png"
            width={300}
            height={400}
            alt="profile_image"
          />
          <figcaption className="text-gray-500">2024.04.27</figcaption>
        </figure>
        <h2 className="text-4xl mt-12 mb-4 font-bold text-center">소개</h2>
        <article className="md:w-[60vw] w-[350px] mx-auto">
          <ul className="list-disc md:text-2xl text-xl">
            <li className="my-3">이것저것 배우고 공부하는 것을 좋아합니다.</li>
            <li className="my-3">
              2021년부터 시작한 사이드프로젝트를 통해{' '}
              <Link href="https://silgam.app">앱 서비스</Link>를 운영하고
              있습니다.
            </li>
            <li className="my-3">
              큐브 맞추기를 좋아합니다. 삶에 가장 지대한 영향을 준 취미이고,
              과거에는 마이너한 종목에서 한국 신기록 수립 경험이 있습니다.
              (2016년)
            </li>
            <li className="my-3">
              좋아하는 음악 장르는 8-90년대 락, 국내 힙합, 케이팝 등이 있습니다.
              자세한 내용은{' '}
              <Link href="/music/music_history_yongjin">Music</Link> 탭에
              정리하고 있습니다. 그리고 베이스기타 연주를 취미로 하고 있습니다.
            </li>
            <li className="my-3">
              일상 속 별 것 아닌 풍경과 소재들을 사진으로 담곤 합니다.{' '}
              <Link href="/gallery/timeline">Photo</Link> 탭에 있는 것과 같은
              여러 추억들을 기록하고 있습니다.
            </li>
            <li className="my-3">
              여러가지 생각들을 글로 써내는 것도 좋아합니다. 글을 잘 쓰는 법에
              대해 제대로 배운 것은 아니고, 생각나는 것들을 글로 써내는 것
              자체에 매력을 느낍니다. 이 사이트를 만든 이후로는{' '}
              <Link href="/threads">Threads</Link> 탭에 생각들을 정리하고
              있습니다.
            </li>
            <li className="my-3">
              초등학교와 중학교는 충주에서 나왔고, 고등학교는 안산에서, 학부
              생활은 서울에서 하고 있습니다. 서울은 어릴 적 많은 동기가 되었던
              곳이기에 앞으로도 계속 이곳에서 지내고 싶다는 생각을 합니다.
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

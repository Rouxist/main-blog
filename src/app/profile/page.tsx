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
        <figure className="w-fit mt-6 mx-auto">
          <Image
            src="/assets/main/profile_full.png"
            width={240}
            height={320}
            alt="profile_image"
          />
          <figcaption className="text-gray-500">2024.04.27</figcaption>
        </figure>
        <article className="md:w-[60vw] w-[90vw] mx-auto">
          {/* Links */}
          <div className="space-x-2 text-center md:text-xl mt-2">
            <a href="/assets/cv/cv_20250504.pdf" target="_blank">
              [cv]
            </a>
            <a
              href="https://www.worldcubeassociation.org/persons/2015YONG02"
              target="_blank"
            >
              [wca profile]
            </a>
          </div>

          {/* Info */}
          <h1 className="md:text-4xl text-2xl my-4">Info</h1>

          <ul className="list-disc md:text-xl text-md px-4">
            <li className="my-3">
              2021년부터 시작한 사이드프로젝트를 통해{' '}
              <Link href="https://silgam.app">앱 서비스</Link>를 운영하고
              있습니다.
            </li>
            <li className="my-3">
              큐브 맞추기는 삶에 큰 영향을 준 취미 활동입니다. 한 종목의{' '}
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
          </ul>

          {/* Education */}
          <h1 className="md:text-4xl text-2xl mt-8 mb-4">Education</h1>

          <div>
            {/* education 2 */}
            {/* <table className="w-[100%] mt-2">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="md:text-2xl text-xl leading-snug">
                        <b>대학원</b>
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="md:text-xl text-base leading-snug">
                        (202x.xx ~ 현재)
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="list-disc pl-10">
              <li className="md:text-xl text-base my-1 leading-snug">
                전공
              </li>
            </ul> */}

            {/* education 1 */}
            <table className="w-[100%] mt-2">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="md:text-2xl text-xl leading-snug">
                        <b>한양대학교</b>
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="md:text-xl text-base leading-snug">
                        (2022.03 ~ 현재)
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="list-disc md:pl-10 pl-4">
              <li className="md:text-xl text-sm my-1 leading-snug">
                데이터사이언스학부 (다중전공: 경제금융학부)
              </li>
            </ul>
          </div>
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

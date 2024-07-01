import Header from '@/app/header'

export default async function Profile() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <figure className="max-w-6xl mt-16 mx-auto px-5">
          <h1 className="text-5xl my-4 leading-snug text-center font-bold">
            강용진
          </h1>

          <h3 className="text-2xl mb-2 text-center">서울시 동대문구</h3>
          <h3 className="text-2xl mb-8 text-center">
            <a className="mx-1" href="/cv/en">
              [cv in english]
            </a>
          </h3>

          <h2 className="text-4xl my-2 font-bold leading-snug">관심 분야</h2>
          <hr />
          <div className="mt-4 mb-16">
            <ul className="list-disc pl-10">
              <li className="text-2xl my-1 leading-snug"></li>
              <li className="text-2xl my-1 leading-snug"></li>
            </ul>
          </div>

          <h2 className="text-4xl my-2 font-bold leading-snug">학력</h2>
          <hr />
          <div className="mt-4 mb-16">
            <table className="w-[100%] mb-2">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="text-3xl leading-snug">
                        <b>한양대학교</b>
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="text-2xl leading-snug">
                        (2022.03 ~ 현재)
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="list-disc pl-10">
              <li className="text-2xl my-1 leading-snug">
                데이터사이언스학부 <b>데이터사이언스</b>전공 (다중전공:{' '}
                <b>경제금융학부</b>)
              </li>
              <li className="text-2xl my-1 leading-snug">
                누적 평점: 0.00/4.5
              </li>
            </ul>
            <table className="w-[100%] mt-4 mb-2">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="text-3xl leading-snug">
                        <b>한국디지털미디어고등학교</b>
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="text-2xl leading-snug">
                        (2019.03 ~ 2022.01)
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="list-disc pl-10">
              <li className="text-2xl my-1 leading-snug">디지털콘텐츠과</li>
            </ul>
          </div>

          <h2 className="text-4xl my-2 font-bold leading-snug">연구 경험</h2>
          <hr />
          <div className="mt-4 mb-16">
            <table className="w-[100%] mb-2">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="text-3xl leading-snug">
                        <b>성대규 학부생 연구 장학 프로그램 (SURF)</b>{' '}
                        (한양대학교)
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="text-2xl leading-snug">
                        (2024.07 ~ 2024.08)
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-2xl my-4 leading-snug">Research Assistant</p>
            <ul className="list-disc pl-10">
              <li className="text-2xl my-1 leading-snug"></li>
              <li className="text-2xl my-1 leading-snug"></li>
            </ul>
          </div>

          {/* <h2 className="text-4xl my-2 font-bold leading-snug">
          Publications
        </h2>
        <hr />
        <div className="mb-16"></div> */}

          <h2 className="text-4xl my-2 font-bold leading-snug">Skills</h2>
          <hr />
          <div className="mt-4 mb-16">
            <h3 className="text-2xl font-bold leading-snug">Advanced</h3>
            <ul className="list-disc pl-10">
              <li className="text-2xl my-1 leading-snug">Python, PyTorch</li>
            </ul>
            <h3 className="text-2xl font-bold leading-snug">Moderate</h3>
            <ul className="list-disc pl-10">
              <li className="text-2xl my-1 leading-snug">LaTeX</li>
            </ul>
            <h3 className="text-2xl font-bold leading-snug">Novice</h3>
            <ul className="list-disc pl-10">
              <li className="text-2xl my-1 leading-snug">
                Next.js, Node.js, Nginx
              </li>
            </ul>
            <p className="text-2xl mt-4 leading-snug">
              기타: Notion, Slack, Figma.
            </p>
          </div>

          <h2 className="text-4xl my-2 font-bold leading-snug">프로젝트</h2>
          <hr />
          <div className="mt-4 mb-16">
            <table className="w-[100%] mb-2">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="text-3xl leading-snug">
                        <b>
                          <a href="https://silgam.app" target="_blank">
                            실전감각, 실감
                          </a>
                        </b>{' '}
                        (사이드 프로젝트)
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="text-2xl leading-snug">
                        (2021.11 ~ 현재)
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-2xl my-4 leading-snug">
              실감나는 수능 실전 모의고사 연습을 위한 앱서비스
            </p>

            <h3 className="text-2xl font-bold leading-snug">Job</h3>
            <ul className="list-disc pl-10">
              <li className="text-2xl my-1 leading-snug">
                Co-Founder, Business Developing, Marketing
              </li>
              <li className="text-2xl my-1 leading-snug">
                Contact:{' '}
                <a href="mailto:yongjin@silgam.app" target="_blank">
                  yongjin@silgam.app
                </a>{' '}
              </li>
            </ul>
            <h3 className="text-2xl font-bold leading-snug">Work</h3>
            <ul className="list-disc pl-10">
              <li className="text-2xl my-1 leading-snug">
                Developed and sold advertisement product
              </li>
              <li className="text-2xl my-1 leading-snug">
                <a href="https://blog.silgam.app/" target="_blank">
                  팀블로그
                </a>
              </li>
            </ul>
          </div>

          <h2 className="text-4xl my-2 font-bold leading-snug">기타</h2>
          <hr />

          <div className="mt-4 mb-16">
            <table className="w-[100%] mb-2">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="text-3xl leading-snug">
                        (취미) 큐브 맞추기
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="text-2xl leading-snug">
                        (Jun. 2013 ~ 현재)
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <a
              className="text-2xl my-1 leading-snug"
              href="https://www.worldcubeassociation.org/persons/2015YONG02"
              target="_blank"
            >
              세계큐브협회 프로필
            </a>
            <ul className="list-disc pl-10">
              <li className="text-2xl my-1 leading-snug">
                '스퀘어-1' 종목 - 단일 기록 부문 <b>한국 신기록</b> 수립
                (2016.08 ~ 2017.07)
                <a href="https://youtu.be/fIoTyCedidw" target="_blank">
                  [video]
                </a>
              </li>
              <li className="text-2xl my-1 leading-snug">
                '스퀘어-1' 종목 - 평균 기록 부문 <b>한국 신기록</b> 수립
                (2016.12 ~2017.07)
                <a href="https://youtu.be/JwlETZyrNBI" target="_blank">
                  [video]
                </a>
              </li>
            </ul>
          </div>
        </figure>
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

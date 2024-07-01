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
            Yongjin Kang
          </h1>

          <h3 className="text-2xl mb-2 text-center">Seoul, Korea</h3>
          <h3 className="text-2xl mb-8 text-center">
            <a className="mx-1" href="" target="_blank">
              [pdf]
            </a>
            <a className="mx-1" href="/cv/kr">
              [cv in korean]
            </a>
          </h3>

          <h2 className="text-4xl my-2 font-bold leading-snug">Interests</h2>
          <hr />
          <div className="mt-4 mb-16">
            <ul className="list-disc pl-10">
              <li className="text-2xl my-1 leading-snug"></li>
              <li className="text-2xl my-1 leading-snug"></li>
            </ul>
          </div>

          <h2 className="text-4xl my-2 font-bold leading-snug">Education</h2>
          <hr />
          <div className="mt-4 mb-16">
            <table className="w-[100%] mb-2">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="text-3xl leading-snug">
                        <b>Hanyang University</b>, Seoul, Korea
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="text-2xl leading-snug">
                        (Mar 2022 ~ Present)
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="list-disc pl-10">
              <li className="text-2xl my-1 leading-snug">
                B.S. in <b>Data Science</b> with a major in Data Science (2nd
                major: <b>Economics & Finance</b>)
              </li>
              <li className="text-2xl my-1 leading-snug">
                Current overall GPA: 0.00/4.5
              </li>
            </ul>
            <table className="w-[100%] mt-4 mb-2">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="text-3xl leading-snug">
                        <b>Korea Digital Media High School</b>, Ansan, Korea
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="text-2xl leading-snug">
                        (Mar 2019 ~ Jan 2022)
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="list-disc pl-10">
              <li className="text-2xl my-1 leading-snug">
                Major in Digital Contents
              </li>
            </ul>
          </div>

          <h2 className="text-4xl my-2 font-bold leading-snug">
            Research Experiences
          </h2>
          <hr />
          <div className="mt-4 mb-16">
            <table className="w-[100%] mb-2">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="text-2xl leading-snug">
                        <b>SUNG Dai Gou Undergraduate Research Fellowship</b>{' '}
                        (Hanyang University)
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="text-2xl leading-snug">
                        (Jul 2024 ~ Aug 2024)
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
              Also familiar with Notion, Slack, Figma.
            </p>
          </div>

          <h2 className="text-4xl my-2 font-bold leading-snug">Projects</h2>
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
                        (Side project)
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="text-2xl leading-snug">
                        (Nov. 2021 ~ Present)
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-2xl my-4 leading-snug">
              App service for simulating Korean SAT.
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
                Our{' '}
                <a href="https://blog.silgam.app/" target="_blank">
                  team blog (in korean)
                </a>
              </li>
            </ul>
          </div>

          <h2 className="text-4xl my-2 font-bold leading-snug">Achievements</h2>
          <hr />

          <div className="mt-4 mb-16">
            <table className="w-[100%] mb-2">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="text-3xl leading-snug">Rubik's Cube</h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="text-2xl leading-snug">
                        (Jun. 2013 ~ Present)
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
              World Cube Association Profile
            </a>
            <ul className="list-disc pl-10">
              <li className="text-2xl my-1 leading-snug">
                <b>National Record</b> single for Square-1 (2016.08 ~ 2017.07){' '}
                <a href="https://youtu.be/fIoTyCedidw" target="_blank">
                  [video]
                </a>
              </li>
              <li className="text-2xl my-1 leading-snug">
                <b>National Record</b> average for Square-1 (2016.12 ~2017.07){' '}
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

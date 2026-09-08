import Header from '@/app/header'
import Image from 'next/image'

export default async function Profile() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <div className="pt-8">
          {/* Full Name */}
          <h3 className="md:text-4xl text-3xl font-bold text-center leading-snug">
            Yongjin Kang (강용진)
          </h3>
        </div>
        <figure className="w-fit mt-4 mx-auto">
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
          <div className="space-x-2 text-center md:text-xl">
            <a href="/assets/cv/cv_20260908.pdf" target="_blank">
              [cv]
            </a>
            <a href="https://www.linkedin.com/in/yongjin-kang/" target="_blank">
              [linkedin]
            </a>
            <a href="https://www.github.com/rouxist/" target="_blank">
              [github]
            </a>
            <a
              href="https://www.worldcubeassociation.org/persons/2015YONG02"
              target="_blank"
            >
              [wca profile]
            </a>
          </div>
          <div>
            <h3 className="md:text-base text-sm text-center leading-snug">
              yjkang [a] kaist [d] ac [d] kr
            </h3>
          </div>

          {/* Bio */}
          <h1 className="md:text-4xl text-2xl mt-8 mb-4">{/* Bio */}</h1>

          <p className="md:text-xl text-base my-4 leading-snug indent-8">
            I am a first year Master's student in Finance at{' '}
            <a href="https://www.business.kaist.ac.kr" target="_blank">
              KAIST College of Business
            </a>
            . I am interested in exploring applications of AI to text and visual
            analysis in empirical corporate finance.
          </p>

          <p className="md:text-xl text-base my-4 leading-snug indent-8">
            Prior to KAIST, I received B.S. in Data Science and B.A. in
            Economics from{' '}
            <a href="https://www.hanyang.ac.kr/" target="_blank">
              Hanyang University
            </a>
            .
          </p>

          {/* Education */}
          <h1 className="md:text-4xl text-2xl mt-16 mb-4">Education</h1>

          <div>
            {/* education 3 */}
            <table className="w-[100%] mt-2">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="md:text-2xl text-xl leading-snug">
                        <b>KAIST College of Business</b>
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="md:text-xl text-base leading-snug">
                        (2026.03 ~ Present)
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="list-disc md:pl-10 pl-6">
              <li className="md:text-xl text-base my-1 leading-snug">
                M.S. in <b>Finance</b>
              </li>
            </ul>

            {/* education 2 */}
            <table className="w-[100%] mt-4">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="md:text-2xl text-xl leading-snug">
                        <b>Hanyang University</b>
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="md:text-xl text-base leading-snug">
                        (2022.03 ~ 2026.02)
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="list-disc md:pl-10 pl-6">
              <li className="md:text-xl text-sm my-1 leading-snug">
                B.S. in <b>Data Science</b> & B.A. in <b>Economics</b>
              </li>
            </ul>

            {/* education 1 */}
            <table className="w-[100%] mt-4">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="md:text-2xl text-xl leading-snug">
                        <b>Korea Digital Media High School</b>
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="md:text-xl text-base leading-snug">
                        (2019.03 ~ 2022.01)
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="list-disc md:pl-10 pl-6">
              <li className="md:text-xl text-sm my-1 leading-snug">
                Major: Digital Contents
              </li>
            </ul>
          </div>

          {/* Business */}
          <h1 className="md:text-4xl text-2xl mt-16 mb-4">Business</h1>

          <div>
            {/* business 1 */}
            <table className="w-[100%] mt-2">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="md:text-2xl text-xl leading-snug">
                        <b>Silgam</b>
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="md:text-xl text-base leading-snug">
                        (2021.11 ~ Present)
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="w-[100%] mt-2">
              <tbody>
                <tr>
                  <td>
                    <div className="text-left">
                      <h3 className="md:text-xl text-base leading-snug text-gray-500">
                        Co-Founder, Freelance
                      </h3>
                    </div>
                  </td>
                  <td>
                    <div className="text-right">
                      <h3 className="md:text-xl text-base leading-snug">
                        <a href="https://silgam.app" target="_blank">
                          [website]
                        </a>{' '}
                        <a href="https://blog.silgam.app" target="_blank">
                          [team blog]
                        </a>
                      </h3>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="list-disc md:pl-10 pl-4">
              <li className="md:text-xl text-sm my-1 leading-snug">
                A <b>mobile app</b> designated to helps students simulate the
                Korean SAT(수능) environment and organize their study.
              </li>
              <li className="md:text-xl text-sm my-1 leading-snug">
                Acquired <b>50k+ registered users</b>. In Nov. 2025, reached{' '}
                <b>13k DAU</b>, <b>31k MAU</b>, and <b>3k concurrent users</b>{' '}
                just before the Korean SAT.
              </li>
            </ul>
          </div>

          {/* Misc */}
          <h1 className="md:text-4xl text-2xl mt-16 mb-4">Misc</h1>

          <div>
            <ul className="list-disc md:pl-10 pl-4">
              <li className="md:text-xl text-sm my-1 leading-snug">
                I've spent more than half of my whole life solving{' '}
                <b>Rubik's cube</b>. My cubing history is outlined{' '}
                <a href="/cubing">here</a>.
              </li>
              <li className="md:text-xl text-sm my-1 leading-snug">
                City/Country visitied
                <ul className="list-disc md:pl-10 pl-4">
                  <li className="md:text-xl text-sm my-1 leading-snug">
                    <a href="https://youtu.be/3tGmhqUw2ik" target="_blank">
                      [Kyoto, Japan]
                    </a>{' '}
                    <a href="https://youtu.be/NPVL83JnmYI" target="_blank">
                      [Osaka, Japan]
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Personal Information */}
          <h1 className="md:text-4xl text-2xl mt-16 mb-4">
            Personal Information
          </h1>

          <div>
            <ul className="list-disc md:pl-10 pl-4">
              <li className="md:text-xl text-sm my-1 leading-snug">
                Citizenship: Republic of Korea
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  )
}

export function generateMetadata() {
  const title = 'About Me | Yongjin Kang'

  return {
    title,
    openGraph: {
      title,
      images: [
        {
          url: '/assets/blog/og_images/default_og.png',
          width: 1202,
          height: 630,
          alt: 'default_og_image',
        },
      ],
    },
  }
}

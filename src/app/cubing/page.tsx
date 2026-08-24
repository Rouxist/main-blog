import Header from '@/app/header'
import Link from 'next/link'

export default function Cubing() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <article className="md:w-[60vw] w-[90vw] mx-auto">
          {/* Bio */}
          <h1 className="md:text-4xl text-2xl mt-16 mb-4">Bio</h1>

          {/* <h3 className="md:text-xl text-base my-4 leading-snug indent-8"> */}
          <p className="md:text-xl text-base my-4 leading-snug indent-8">
            I started cubing on <b>June 14, 2013</b>, two minutes-ish to 9 PM;
            It was such a memorable moment that I remember the time quite
            exactly. It took me roughly two weeks to solve a 3x3 for the first
            time. Afterward, I started focusing on 3BLD, which I beagn on{' '}
            <b>September 18, 2013</b>, and Square-1, which I solved it for the
            first time on <b>November 13, 2013</b>.
          </p>
          <p className="md:text-xl text-base my-4 leading-snug indent-8">
            Afterward, this hobby began to shape virtually every facet of my
            life.
          </p>

          <p className="md:text-xl text-base my-4 leading-snug indent-8">
            <a
              href="https://www.worldcubeassociation.org/competitions/KoreanKAISTstyle2015"
              target="_blank"
            >
              Korean KAIST Style 2015
            </a>{' '}
            was the first WCA competition I ever compteted in. Since I was
            interested in filming videos, I started filming the comps like{' '}
            <a href="https://youtu.be/XpV71obXEIM" target="_blank">
              this
            </a>
            , and{' '}
            <a href="https://youtu.be/lmYZ7WJZC_I" target="_blank">
              this
            </a>
            . I also organized unofficial events with friends. I looked like{' '}
            <a href="/assets/main/cwr_2018_06_09.JPG" target="_blank">
              this
            </a>
            .
          </p>
          <p className="md:text-xl text-base my-4 leading-snug indent-8">
            In 2019, I entered high school in a different province with one of
            my cubing friends, where my interest in data science and in pursuing
            an academic career began. I consider this hobby to encapsulate my
            entire journey from adolescence into adulthood.
          </p>

          {/* Recent Activities */}

          <h1 className="md:text-4xl text-2xl mt-16 mb-4">Recent Activities</h1>
          <div>
            <ul className="list-disc pl-10">
              <li className="md:text-xl text-base my-1 leading-snug">
                (2026.06) 13-year anniversary solves :P{' '}
                <a href="https://youtu.be/zZte1DZWa-4" target="_blank">
                  [video]
                </a>
              </li>
              <li className="md:text-xl text-base my-1 leading-snug">
                (2019.01) 31.xx Official 3BLD DNF with 2 corners twisted :/{' '}
                <a href="https://youtu.be/pJZcmsPHiCQ" target="_blank">
                  [video]
                </a>
              </li>
              <li className="md:text-xl text-base my-1 leading-snug">
                (2018.08) 41.79 Official 3BLD single{' '}
                <a href="https://youtu.be/ZMQV9b_H7UA" target="_blank">
                  [video]
                </a>
              </li>
              <li className="md:text-xl text-base my-1 leading-snug">
                (2013.09) Probably the oldest video I have :0{' '}
                <a href="https://youtu.be/h_WWjz1QSWI" target="_blank">
                  [video]
                </a>
              </li>
            </ul>
          </div>

          {/* Achievements */}
          <h1 className="md:text-4xl text-2xl mt-16 mb-4">Achievements</h1>

          <div>
            <ul className="list-disc pl-10">
              <li className="md:text-xl text-base my-1 leading-snug">
                (2016.12) Square-1 <b>National Record</b> Average <b>12.92</b>{' '}
                <a
                  target="_blank"
                  href="https://www.worldcubeassociation.org/competitions/BusanWinter2016/results/all?event=sq1"
                >
                  [wca]
                </a>{' '}
                <a href="https://youtu.be/JwlETZyrNBI" target="_blank">
                  [video]
                </a>
              </li>
              <li className="md:text-xl text-base my-1 leading-snug">
                (2016.08) Square-1 <b>National Record</b> Single <b>10.63</b>{' '}
                <a
                  href="https://www.worldcubeassociation.org/competitions/KoreanChampionship2016/results/all?event=sq1"
                  target="_blank"
                >
                  [wca]
                </a>{' '}
                <a href="https://youtu.be/fIoTyCedidw" target="_blank">
                  [video]
                </a>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  )
}

export function generateMetadata() {
  const title = 'Cubing | Yongjin Kang'

  return {
    title,
    openGraph: {
      title,
    },
  }
}

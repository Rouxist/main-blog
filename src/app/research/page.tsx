import Header from '@/app/header'

export default function Research() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <article className="md:w-[60vw] w-[90vw] mx-auto">
          <h1 className="md:text-4xl text-2xl mt-16 mb-4">
            Research Interests
          </h1>
          <p className="md:text-xl text-base">
            Empirical Corporate Finance, AI Applications in Finance, Information
            Processing
          </p>
        </article>
      </section>
      <section>
        <article className="md:w-[60vw] w-[90vw] mx-auto">
          {/* Projects on Hold */}
          <h1 className="md:text-4xl text-2xl mt-16 mb-4">Projects on Hold</h1>

          {/* To-Do: store paper info in external .json file */}
          <div className="mt-2">
            <h3 className="md:text-xl text-base">
              Generalized Quantile Random Forest with Smoothed Estimating
              Equations
            </h3>
            <h3 className="text-gray-500">
              with{' '}
              <a href="https://seunghwarho.github.io/" target="_blank">
                Seunghwa Rho
              </a>
            </h3>
            <h3>
              {' '}
              <a
                href="https://github.com/Rouxist/generalized-random-forest"
                target="_blank"
              >
                [code]
              </a>
            </h3>
          </div>
        </article>
      </section>
    </main>
  )
}

export function generateMetadata() {
  const title = 'Research | Yongjin Kang'

  return {
    title,
    openGraph: {
      title,
    },
  }
}

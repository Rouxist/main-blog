import Header from '../header'

export default function Notice() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section className="my-16">
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none my-12 text-center md:text-center">
          History
        </h1>
        <article className="w-[75rem] mx-auto text-2xl">
          <ul className="list-disc">
            <li>2024.07.02 사이트 첫 배포</li>
          </ul>
        </article>
      </section>
      <section className="my-16">
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none my-12 text-center md:text-center">
          Ongoing
        </h1>
        <article className="w-[75rem] mx-auto text-2xl">
          <ol className="list-decimal">
            <li>remark-gfm 적용</li>
            <li>
              Importance Sampling 게시물에서 inline으로, de-gbm 게시물에서
              caption에서 TeX이 잘 안됨
            </li>
            <li>Photo-Timeline은 많은 디자인이 더 들어갈 예정</li>
          </ol>
        </article>
      </section>
    </main>
  )
}

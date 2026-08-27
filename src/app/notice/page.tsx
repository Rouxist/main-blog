import Header from '../header'

export default function Notice() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section className="my-16">
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none md:my-12 my-4 text-center md:text-center">
          History
        </h1>
        <article className="md:w-[75rem] w-[90vw] mx-auto md:text-2xl text-sm px-4">
          <ul className="list-disc">
            <li>2024.07.02 사이트 첫 배포</li>
            <li>2025.05.04 도메인 연결 (rouxist.com)</li>
            <li>2026.08.24 UI 디자인 개편</li>
          </ul>
        </article>
      </section>
      <section className="my-16">
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none md:my-12 my-4 text-center md:text-center">
          To-Do
        </h1>
        <article className="md:w-[75rem] w-[90vw] mx-auto md:text-2xl text-sm px-4">
          <h2 className="text-3xl md:text-5xl lg:text-4xl tracking-tighter leading-tight md:leading-none my-4 text-center ">
            features
          </h2>
          <ol className="list-decimal">
            <li>Blog: 태그 디자인 개선</li>
            <li>Blog: 카테고리 개선</li>
            <li>Blog: 게시물 마크다운 파일 db로 옮기기</li>
            <li>Essay: 화면 구현</li>
            <li>Photo: 디자인 개선</li>
            <li>Music: 디자인 개선</li>
            <li>
              etc:잡다한 코드 구현 아카이브 페이지 만들기 (e.g. indirect utility
              플롯)
            </li>
          </ol>
          <h2 className="text-3xl md:text-5xl lg:text-4xl tracking-tighter leading-tight md:leading-none my-4 text-center ">
            entertainments
          </h2>
          <ol className="list-decimal">
            <li>Cubing 페이지에 디데이 카운터 만들기</li>
            <li>웹사이트 내 랜덤한 페이지로 이동하는 버튼 만들기</li>
          </ol>
        </article>
      </section>
      <section className="my-16">
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none md:my-12 my-4 text-center md:text-center">
          Notes
        </h1>
        <article className="md:w-[75rem] w-[90vw] mx-auto md:text-2xl text-sm px-4">
          <ol className="list-decimal">
            <li>remark-gfm 적용</li>
            <li>
              Importance Sampling 게시물에서 inline으로, de-gbm 게시물에서
              caption에서 TeX이 잘 안됨
            </li>
          </ol>
        </article>
      </section>
    </main>
  )
}

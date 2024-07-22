import Header from '../header'

export default function Project() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section className="my-16">
        <article className="w-[75rem] mx-auto text-2xl">
          <ul className="list-disc">
            <li>work 1</li>
            <li>work 2</li>
            <li>work 3</li>
          </ul>
        </article>
      </section>
    </main>
  )
}

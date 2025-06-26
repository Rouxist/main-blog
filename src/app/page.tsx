import Link from 'next/link'
import TeXRenderer from './tex-renderer'

export default function Home() {
  return (
    <main>
      <section className="pb-0">
        <div className="flex w-full h-[85vh] items-center justify-center bg-gray-50">
          <Link
            className="text-black hover:text-veriperi transition-colors duration-200 ease-in-out"
            href="/profile"
          >
            <TeXRenderer content={'('} />
          </Link>
          <Link
            className="text-black hover:text-veriperi transition-colors duration-200 ease-in-out"
            href="/threads"
          >
            <TeXRenderer content={'$$\\Omega$$'} />
          </Link>
          <Link className="text-black" href="/">
            <TeXRenderer content={','} />
          </Link>
          <Link
            className="text-black hover:text-veriperi transition-colors duration-200 ease-in-out"
            href="/gallery/timeline"
          >
            <TeXRenderer content={'$$\\mathcal{F}$$'} />
          </Link>
          <Link className="text-black" href="/">
            <TeXRenderer content={','} />
          </Link>
          <Link
            className="text-black hover:text-veriperi transition-colors duration-200 ease-in-out"
            href="/posts"
          >
            <TeXRenderer content={'$$\\mathbb{P}$$'} />
          </Link>
          <Link
            className="text-black hover:text-veriperi transition-colors duration-200 ease-in-out"
            href="/notice"
          >
            <TeXRenderer content={')'} />
          </Link>
        </div>
      </section>
      <section className="h-[15vh] text-gray-300 text-center bg-gray-50">
        <p className="md:text-3xl text-xl px-16">
          We also need things that make us excited to be alive, that make us
          glad to wake up in the morning.
        </p>
        <p className="md:text-2xl text-base">- Elon Musk</p>
      </section>
    </main>
  )
}

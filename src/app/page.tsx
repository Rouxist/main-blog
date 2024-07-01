import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
    <main>
      <section>
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none my-12 text-center md:text-center">
          Gallery
        </h1>
        <figure className="w-fit mx-auto">
          <Image
            src="/assets/main/profile_full.png"
            width={300}
            height={400}
            alt="profile_image"
          />
          <figcaption className="text-gray-500">2024.04.27</figcaption>
        </figure>
        <p className="text-2xl my-2 text-center">
          제 삶에 있었던 하이라이트 순간들을 모아둔 전시관과 같은 공간입니다.
        </p>
        <p className="text-2xl my-2 text-center">
          마치 예술가와 같은 주도적인 삶을 누구나 살아갈 수 있다고 믿습니다.
        </p>
        <div className="w-[75rem] my-4 mx-auto text-center">
          <SimpleButton text="Profile" href="/profile" />
          <SimpleButton text="CV" href="/cv/en" />
          <SimpleButton text="Blog" href="/posts" />
          <SimpleButton text="Music" href="/music" />
          <SimpleButton text="Photo" href="/gallery/timeline" />
          <SimpleButton text="Threads" href="/threads" />
          <SimpleButton text="Notice" href="/notice" />
        </div>
      </section>
      <section className="mt-16 text-gray-300 text-center">
        <p className="text-3xl">
          We also need things that make us excited to be alive, that make us
          glad to wake up in the morning.
        </p>
        <p className="text-2xl">- Elon Musk</p>
      </section>
    </main>
  )
}

type Prop = {
  text: string
  href: string
}

export function SimpleButton({ text, href }: Prop) {
  return (
    <div className="my-6 mx-2 inline-block">
      <Link
        className={`w-[600px] text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800`}
        href={href}
      >
        {text}
      </Link>
    </div>
  )
}

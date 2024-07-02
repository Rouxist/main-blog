import { SimpleButton } from './_components_main/simple-button'
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

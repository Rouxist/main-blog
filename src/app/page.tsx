import { SimpleButton } from './_components_main/simple-button'
import Image from 'next/image'
export default function Home() {
  return (
    <main>
      <section>
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none my-12 text-center md:text-center">
          Gallery
        </h1>
        <figure className="w-fit mt-16 mx-auto">
          <Image
            src="/assets/main/profile_full.png"
            width={300}
            height={400}
            alt="profile_image"
          />
          <figcaption className="text-gray-500">2024.04.27</figcaption>
        </figure>
        <div className="md:w-[75vw] mt-16 px-4 mx-auto text-center">
          <SimpleButton text="Profile" href="/profile" />
          <SimpleButton text="Blog" href="/posts" />
          <SimpleButton text="Music" href="/music" />
          <SimpleButton text="Photo" href="/gallery/timeline" />
          <SimpleButton text="Threads" href="/threads" />
          <SimpleButton text="Notice" href="/notice" />
        </div>
      </section>
      <section className="mt-10 text-gray-300 text-center">
        <p className="md:text-3xl text-xl px-2">
          We also need things that make us excited to be alive, that make us
          glad to wake up in the morning.
        </p>
        <p className="md:text-2xl text-base">- Elon Musk</p>
      </section>
    </main>
  )
}

import { getAllGalleries } from '@/lib/api'
import { GalleryList } from '@/app/_components_gallery/gallery-list'
import Header from '@/app/header'

export default function Categories() {
  const allGalleries = getAllGalleries()

  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none my-12 text-center md:text-center">
          Gallery-Timeline
        </h1>
        <article></article>
        {allGalleries.length > 0 && <GalleryList galleries={allGalleries} />}
      </section>
    </main>
  )
}

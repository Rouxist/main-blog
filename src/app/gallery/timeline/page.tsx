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
        <h1 className="text-5xl font-bold tracking-tighter leading-tight mt-12 mb-8 text-center">
          Photo
        </h1>
        <article></article>
        {allGalleries.length > 0 && <GalleryList galleries={allGalleries} />}
      </section>
    </main>
  )
}

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
        <h1 className="md:text-5xl text-4xl font-bold tracking-tighter leading-tight mt-12 mb-8 text-center">
          Photo
        </h1>
        <article>
          {allGalleries.length > 0 && <GalleryList galleries={allGalleries} />}
        </article>
      </section>
    </main>
  )
}

export function generateMetadata() {
  const title = 'Gallery | Yongjin Kang'

  return {
    title,
    openGraph: {
      title,
    },
  }
}

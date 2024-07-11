import Header from '@/app/header'

export default function Weekly() {
  //   const allGalleries = getAllGalleries()

  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <h1 className="text-5xl font-bold tracking-tighter leading-tight mt-12 mb-8 text-center">
          Weekly records
        </h1>
        <article></article>
        {/* {allGalleries.length > 0 && <GalleryList galleries={allGalleries} />} */}
      </section>
    </main>
  )
}

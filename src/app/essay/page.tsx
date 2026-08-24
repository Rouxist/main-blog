import Header from '@/app/header'

export default function Essay() {
  return (
    <main>
      <header>
        <Header />
      </header>
    </main>
  )
}

export function generateMetadata() {
  const title = 'Essay | Yongjin Kang'

  return {
    title,
    openGraph: {
      title,
    },
  }
}

import { Metadata } from 'next'
import Link from 'next/link'

const categories = [
  { title: 'About Me', href: '/about-me' },
  { title: 'Research', href: '/research' },
  { title: 'Essay', href: '/essay' },
  { title: 'Cubing', href: '/cubing' },
  { title: 'Photo', href: '/gallery/timeline' },
]

export default function Home() {
  return (
    <main className="home-page">
      <header className="home-bar"></header>

      <div className="home-center">
        <div className="home-name">
          <h1>Yongjin Kang</h1>
          <p className="home-description text-gray-500">
            MSc Studnet @KAIST College of Business
          </p>
        </div>

        <div className="home-lower">
          <div className="home-navigation-area">
            <nav className="home-categories" aria-label="Main categories">
              {categories.map((category) => (
                <Link href={category.href} key={category.href}>
                  {category.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="home-quote">
            <blockquote className="text-gray-500">
              We also need things that make us excited to be alive, that make us
              glad to wake up in the morning.
              <cite>— Elon Musk</cite>
            </blockquote>
          </div>
        </div>
      </div>

      <footer className="home-bar home-footer">
        <p className="text-gray-500">
          Content on this website may not be scraped or used to train AI without
          prior permission.
        </p>
      </footer>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Yongjin Kang',
  description: 'Research, essays, cubing, and photography by Yongjin Kang.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Yongjin Kang',
    description: "Yongjin Kang's website",
    images: [
      {
        url: '/assets/blog/og_images/default_og.png',
        width: 1202,
        height: 630,
        alt: 'default_og_image',
      },
    ],
  },
}

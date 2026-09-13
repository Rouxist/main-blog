import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/app/header'
import {
  getEssayAuthorById,
  getEssayAuthors,
  getEssaysByAuthor,
} from '@/lib/api'
import { EssayList } from '../../_components/essay-list'

type Params = {
  params: { id: string }
}

export default function EssayAuthorPage({ params }: Params) {
  const author = getEssayAuthorById(params.id)
  if (!author) notFound()

  const essays = getEssaysByAuthor(author.id)

  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="mx-auto max-w-3xl px-6 py-10 md:py-16">
        <Link href="/essay" className="text-sm hover:underline">
          ← All essays
        </Link>
        <section className="mt-10" aria-labelledby="author-name">
          <div className="flex flex-col items-start gap-6 sm:flex-row">
            {author.picture && (
              <Image
                src={author.picture}
                alt={author.name}
                width={112}
                height={112}
                className="!m-0 h-28 w-28 shrink-0 rounded-full object-cover"
              />
            )}
            <div>
              <h1
                id="author-name"
                className="text-4xl leading-tight tracking-tight md:text-5xl"
              >
                {author.name}
              </h1>
              <p className="mt-4 leading-relaxed text-neutral-600">
                {author.description}
              </p>
            </div>
          </div>
        </section>
        <section aria-label={`Essays by ${author.name}`}>
          <h2 className="mb-6 text-xl">
            {essays.length} {essays.length === 1 ? 'essay' : 'essays'}
          </h2>
          <EssayList essays={essays} />
        </section>
      </div>
    </main>
  )
}

export function generateMetadata({ params }: Params): Metadata {
  const author = getEssayAuthorById(params.id)
  if (!author) notFound()

  const title = `${author.name} | Essay | Yongjin Kang`
  return {
    title,
    description: author.description,
    openGraph: {
      title,
      description: author.description,
      type: 'profile',
      ...(author.picture ? { images: [author.picture] } : {}),
    },
  }
}

export function generateStaticParams() {
  return Object.keys(getEssayAuthors()).map((id) => ({ id }))
}

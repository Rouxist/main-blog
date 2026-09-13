import { type Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from '@/app/header'
import DateFormatter from '@/app/_components_post/date-formatter'
import CoverImage from '@/app/_components_post/cover-image'
import { Tags } from '@/app/_components_post/tags'
import markdownStyles from '@/app/_components_post/markdown-styles.module.css'
import { getAllEssays, getEssayBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import styles from './essay.module.css'
import { AuthorLinks } from '../_components/author-links'
import 'highlight.js/styles/atom-one-dark.css'
import 'katex/dist/katex.min.css'

type Params = {
  params: { slug: string }
}

export default async function Essay({ params }: Params) {
  const essay = getEssayBySlug(params.slug)
  if (!essay) notFound()

  const content = await markdownToHtml(essay.content)

  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="mx-auto max-w-3xl px-6 py-10 md:py-16">
        <Link href="/essay" className="text-sm hover:underline">
          ← All essays
        </Link>
        <article className="mt-10">
          <div className="mb-10 border-b border-neutral-300 pb-8">
            <h1 className="mb-6 text-4xl leading-tight tracking-tight md:text-5xl">
              {essay.title}
            </h1>
            <div className="mb-4 text-sm text-neutral-600">
              <AuthorLinks authors={essay.authors} />
              <span className="mx-2" aria-hidden="true">
                ·
              </span>
              <DateFormatter dateString={essay.date} />
            </div>
            <Tags tags={essay.tags} />
          </div>
          {essay.coverImage && (
            <div className="mb-10">
              <CoverImage title={essay.title} src={essay.coverImage} />
            </div>
          )}
          <div
            className={`${markdownStyles.markdown} ${styles.document}`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <aside
            aria-labelledby="essay-authors"
            className="mt-12 border-t border-neutral-300 pt-8"
          >
            <h2 id="essay-authors" className="mb-6 text-xl">
              {essay.authors.length === 1
                ? 'About the author'
                : 'About the authors'}
            </h2>
            <ul className="space-y-6">
              {essay.authors.map((author) => (
                <li key={author.id} className="flex items-start gap-4">
                  {author.picture && (
                    <Image
                      src={author.picture}
                      alt={author.name}
                      width={64}
                      height={64}
                      className="m-0 h-16 w-16 shrink-0 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <h3 className="font-bold">
                      <AuthorLinks authors={[author]} />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 !text-left">
                      {author.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </article>
      </div>
    </main>
  )
}

export function generateMetadata({ params }: Params): Metadata {
  const essay = getEssayBySlug(params.slug)
  if (!essay) notFound()

  const title = `${essay.title} | Yongjin Kang`
  return {
    title,
    description: essay.excerpt,
    openGraph: {
      title,
      description: essay.excerpt,
      type: 'article',
      publishedTime: essay.date,
      authors: essay.authors.map((author) => author.name),
      ...(essay.ogImage?.url ? { images: [essay.ogImage.url] } : {}),
    },
  }
}

export function generateStaticParams() {
  return getAllEssays().map((essay) => ({ slug: essay.slug }))
}

'use client'

import { useEffect, useState } from 'react'
import { type Essay, type EssayTopic } from '@/interfaces/essay'
import { EssayList } from './essay-list'

export function FilteredEssayList({
  essays,
  topicDetails,
}: {
  essays: Essay[]
  topicDetails: EssayTopic[]
}) {
  const [topicPage, setTopicPage] = useState(1)
  const [topicsPerPage, setTopicsPerPage] = useState(3)

  useEffect(() => {
    const mediumScreen = window.matchMedia('(min-width: 768px)')
    const wideScreen = window.matchMedia('(min-width: 1024px)')
    const updatePageSize = () => {
      setTopicsPerPage(mediumScreen.matches && !wideScreen.matches ? 2 : 3)
      setTopicPage(1)
    }

    updatePageSize()
    mediumScreen.addEventListener('change', updatePageSize)
    wideScreen.addEventListener('change', updatePageSize)
    return () => {
      mediumScreen.removeEventListener('change', updatePageSize)
      wideScreen.removeEventListener('change', updatePageSize)
    }
  }, [])
  const latestEssays = [...essays].sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date),
  )
  const topicsById = new Map(topicDetails.map((topic) => [topic.id, topic]))
  const groupedEssays = new Map<string, Essay[]>(
    topicDetails.map(({ id }) => [id, []]),
  )

  for (const essay of latestEssays) {
    const group = groupedEssays.get(essay.topic) ?? []
    group.push(essay)
    groupedEssays.set(essay.topic, group)
  }

  const groups = Array.from(groupedEssays, ([id, items]) => ({
    id,
    title: topicsById.get(id)?.title ?? (id || 'Other essays'),
    description: topicsById.get(id)?.description,
    essays: items,
    latestPostDate: items.length ? Date.parse(items[0].date) : null,
  })).sort((a, b) => {
    if (a.latestPostDate === null && b.latestPostDate === null) return 0
    if (a.latestPostDate === null) return 1
    if (b.latestPostDate === null) return -1
    return b.latestPostDate - a.latestPostDate
  })
  const pageCount = Math.ceil(groups.length / topicsPerPage)
  const currentPage = Math.min(topicPage, Math.max(1, pageCount))
  const visibleGroups = groups.slice(
    (currentPage - 1) * topicsPerPage,
    currentPage * topicsPerPage,
  )

  return (
    <div>
      <div aria-live="polite">
        {groups.length === 0 ? (
          <EssayList
            essays={latestEssays}
            newestEssaySlug={latestEssays[0]?.slug}
          />
        ) : (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-0 lg:grid-cols-3 lg:gap-y-0">
            {visibleGroups.map((group, index) => (
              <section
                key={group.id}
                aria-label={group.title}
                className={`min-w-0 break-words lg:row-span-2 lg:grid lg:grid-rows-subgrid ${
                  index === 0
                    ? 'md:pr-8'
                    : index === 1
                      ? 'md:border-l md:border-neutral-300 md:pl-8 lg:pr-8'
                      : 'md:pr-8 lg:border-l lg:border-neutral-300 lg:pl-8 lg:pr-0'
                }`}
              >
                <header className="border-b border-black pb-3">
                  <h2 className="mb-1 text-2xl font-bold leading-snug">
                    {group.title}
                  </h2>
                  {group.description && (
                    <p className="whitespace-pre-line text-sm leading-relaxed text-neutral-500">
                      {group.description}
                    </p>
                  )}
                </header>
                <div
                  key={`${group.id}-essays`}
                  role="region"
                  aria-label={`${group.title} essays`}
                  tabIndex={0}
                  className="min-h-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 md:h-[60vh] md:overflow-y-auto md:pr-3 md:[scrollbar-gutter:stable]"
                >
                  <EssayList
                    essays={group.essays}
                    headingLevel={3}
                    newestEssaySlug={latestEssays[0]?.slug}
                  />
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
      {pageCount > 1 && (
        <nav
          aria-label="Topic pages"
          className="mt-5 flex justify-center gap-2 font-sans text-sm"
        >
          {Array.from({ length: pageCount }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                type="button"
                aria-label={`Topic page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
                onClick={() => setTopicPage(page)}
                className={`flex h-11 min-w-11 items-center justify-center border border-black px-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
                  currentPage === page
                    ? 'bg-black text-white'
                    : 'text-black hover:bg-black/5'
                }`}
              >
                {page}
              </button>
            ),
          )}
        </nav>
      )}
    </div>
  )
}

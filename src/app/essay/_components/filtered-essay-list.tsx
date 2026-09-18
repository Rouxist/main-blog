'use client'

import { useState } from 'react'
import { type Essay, type EssayTopic } from '@/interfaces/essay'
import { EssayList } from './essay-list'

const TOPICS_PER_PAGE = 3

export function FilteredEssayList({
  essays,
  topicDetails,
}: {
  essays: Essay[]
  topicDetails: EssayTopic[]
}) {
  const [topicPage, setTopicPage] = useState(1)
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
    // Essays are newest first, so the last essay establishes the topic's date.
    firstPostDate: items.length
      ? Date.parse(items[items.length - 1].date)
      : null,
  })).sort((a, b) => {
    if (a.firstPostDate === null && b.firstPostDate === null) return 0
    if (a.firstPostDate === null) return 1
    if (b.firstPostDate === null) return -1
    return b.firstPostDate - a.firstPostDate
  })
  const pageCount = Math.ceil(groups.length / TOPICS_PER_PAGE)
  const currentPage = Math.min(topicPage, Math.max(1, pageCount))
  const visibleGroups = groups.slice(
    (currentPage - 1) * TOPICS_PER_PAGE,
    currentPage * TOPICS_PER_PAGE,
  )

  return (
    <div>
      <div aria-live="polite">
        {groups.length === 0 ? (
          <EssayList essays={latestEssays} />
        ) : (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-0">
            {visibleGroups.map((group) => (
              <section
                key={group.id}
                aria-label={group.title}
                className="min-w-0 break-words lg:row-span-2 lg:grid lg:grid-rows-subgrid"
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
                  className="min-h-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 lg:max-h-[60vh] lg:overflow-y-auto lg:pr-3 lg:[scrollbar-gutter:stable]"
                >
                  <EssayList essays={group.essays} headingLevel={3} />
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

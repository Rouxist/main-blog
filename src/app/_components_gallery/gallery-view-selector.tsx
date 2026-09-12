'use client'

import { useRouter } from 'next/navigation'

export function GalleryViewSelector({
  view,
}: {
  view: 'timeline' | 'map' | 'travel'
}) {
  const router = useRouter()

  return (
    <div className="flex w-full items-center justify-between gap-3">
      <fieldset className="flex gap-1 border border-black p-1 font-sans text-sm">
        <legend className="sr-only">Gallery view</legend>
        {(['timeline', 'map'] as const).map((option) => (
          <label key={option} className="cursor-pointer">
            <input
              className="peer sr-only"
              type="radio"
              name="gallery-view"
              value={option}
              checked={view === option}
              onChange={() =>
                router.push(`/gallery/${option}`, { scroll: false })
              }
            />
            <span className="flex items-center gap-3 px-4 py-3 capitalize peer-checked:bg-black peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4">
              <span aria-hidden="true">{view === option ? '●' : '○'}</span>
              {option}
            </span>
          </label>
        ))}
      </fieldset>
      <button
        type="button"
        aria-pressed={view === 'travel'}
        onClick={() => router.push('/gallery/travel', { scroll: false })}
        className={`border border-black px-4 py-3 font-sans text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${view === 'travel' ? 'bg-black text-white' : 'text-black hover:bg-black/5'}`}
      >
        Travel
      </button>
    </div>
  )
}

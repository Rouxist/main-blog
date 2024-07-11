'use client'

import { Photo } from '@/interfaces/photo'
import { PhotoElement } from './photo-element'
import { useState } from 'react'

type Props = {
  photos: Photo[]
  year: string
}

export function PhotoList({ photos, year }: Props) {
  const [isHighlightedArray, setIsHighlightedArray] = useState(
    new Array(photos.length).fill(false),
  )

  function handleHighlighting(idx: number) {
    const nextArray = isHighlightedArray.map((c: boolean, i: number) => {
      if (i === idx) {
        return !c
      } else {
        return (c = false)
      }
    })
    setIsHighlightedArray(nextArray)
  }

  function isTransparentElement(idx: number) {
    if (isHighlightedArray[idx] == true) {
      return false
    } else {
      if (isHighlightedArray.includes(true)) {
        return true
      } else {
        return false
      }
    }
  }

  function isScaledElement(idx: number) {
    if (isHighlightedArray[idx] == true) {
      return true
    } else {
      return false
    }
  }

  function getLabelOfHighlightedImage(photos: Photo[]) {
    const idx = isHighlightedArray.indexOf(true)
    if (idx != -1) {
      return (
        <div>
          <p className="text-xl px-2 pt-1 font-bold">{photos[idx].title}</p>
          <p className="px-2">{photos[idx].desc}</p>
          <p className="px-2">
            {year} &nbsp;| &nbsp; {photos[idx].width} x {photos[idx].height}{' '}
            (px) &nbsp; | &nbsp; 사진
          </p>
        </div>
      )
    } else {
      return <></>
    }
  }

  function infoClsssName() {
    const idx = isHighlightedArray.indexOf(true)
    if (idx != -1) {
      return 'transition-opacity ease-in duration-800 opacity-100'
    } else {
      return 'transition-opacity ease-out duration-800 opacity-0'
    }
  }

  return (
    <div>
      <div className="w-[100vw] h-[70vh] p-8 flex items-center justify-start overflow-x-scroll scrollbar-hide">
        {photos.map((photo, idx) => (
          <PhotoElement
            key={'image_' + idx}
            src={photo.src}
            idx={idx}
            alt={photo.alt}
            video={photo.video}
            isTransparentElement={isTransparentElement(idx)}
            isScaledElement={isScaledElement(idx)}
            setHighlightedIdx={handleHighlighting}
          />
        ))}
      </div>
      <div className="md:w-[40vw] w-[300px] min-h-[9vh] border-2 border-black mx-auto mt-4">
        {getLabelOfHighlightedImage(photos)}
      </div>
    </div>
  )
}

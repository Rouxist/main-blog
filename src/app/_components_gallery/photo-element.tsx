import Image from 'next/image'

type Props = {
  src: string
  idx: number
  alt: string
  video: boolean
  isTransparentElement: boolean
  isScaledElement: boolean
  setHighlightedIdx: Function
}

export function PhotoElement({
  src,
  idx,
  alt,
  isTransparentElement,
  isScaledElement,
  setHighlightedIdx,
}: Props) {
  function heightSize() {
    if (window.innerWidth >= 768) {
      if (isScaledElement) {
        return '65vh'
      } else {
        return '40vh'
      }
    } else {
      return 'auto'
    }
  }

  function getClassName(isScaled: boolean, isTransparent: boolean) {
    if (isTransparent) {
      return 'px-8 transition-all duration-250 opacity-25'
    } else {
      if (isScaled) {
        return 'px-8 scale-140 transition-all duration-250'
      } else {
        return 'px-8 transition-all duration-250'
      }
    }
  }

  return (
    <Image
      onClick={() => {
        setHighlightedIdx(idx)
      }}
      className={getClassName(isScaledElement, isTransparentElement)}
      src={src}
      width={400}
      height={400}
      alt={alt}
      style={{ width: 'auto', height: heightSize() }}
    />
  )
}

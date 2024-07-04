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
    if (isScaledElement) {
      return '65vh'
    } else {
      return '40vh'
    }
  }

  function getClassName(isScaled: boolean, isTransparent: boolean) {
    if (isTransparent) {
      return 'mx-16 transition-all duration-250 opacity-25'
    } else {
      if (isScaled) {
        return 'mx-16 scale-140 transition-all duration-250'
      } else {
        return 'mx-16 transition-all duration-250 shadow-2xl'
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

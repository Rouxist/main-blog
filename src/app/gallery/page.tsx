import { Metadata } from 'next'
import { GalleryPage } from '@/app/_components_gallery/gallery-page'

export default function Gallery() {
  return <GalleryPage />
}

export function generateMetadata() {
  const title = 'Gallery | Yongjin Kang'

  return {
    title,
    openGraph: {
      title,
    },
  }
}

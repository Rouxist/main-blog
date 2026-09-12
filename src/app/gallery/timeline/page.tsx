import { Metadata } from 'next'
import { GalleryPage } from '@/app/_components_gallery/gallery-page'

export default function Timeline() {
  return <GalleryPage view="timeline" />
}

export const metadata: Metadata = {
  title: 'Timeline | Gallery | Yongjin Kang',
  description: 'Albums in chronological order.',
}

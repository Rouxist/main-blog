import { Metadata } from 'next'
import { GalleryPage } from '@/app/_components_gallery/gallery-page'

export default function Travel() {
  return <GalleryPage view="travel" />
}

export const metadata: Metadata = {
  title: 'Travel | Gallery | Yongjin Kang',
  description: 'Travel log.',
}

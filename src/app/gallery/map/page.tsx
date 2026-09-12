import { Metadata } from 'next'
import { GalleryPage } from '@/app/_components_gallery/gallery-page'

export default function Map() {
  return <GalleryPage view="map" />
}

export const metadata: Metadata = {
  title: 'Map | Gallery | Yongjin Kang',
  description: 'Albums by location.',
}

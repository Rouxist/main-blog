import { type Photo } from './photo'

export type Gallery = {
  slug: string
  date: string
  location: string[]
  category: string[]
  excerpt: string
  title: string
  desc: string
  thumbnail: string
  elements: Photo[]
}

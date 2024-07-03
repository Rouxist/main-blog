import { type Author } from './author'

export type Post = {
  slug: string
  title: string
  date: string
  categories: Array<string>
  tags: Array<string>
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  alert: string
}

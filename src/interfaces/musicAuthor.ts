import { type Music } from './music'

export type MusicAuthor = {
  slug: string
  order: number
  name: string
  profileImgSrc: string
  title: string
  desc: string
  elements: Music[]
}

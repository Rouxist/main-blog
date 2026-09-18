import { type Post } from './posts'

export type EssayAuthor = {
  id: string
  name: string
  picture: string
  description: string
}

export type EssayAuthors = Record<string, Omit<EssayAuthor, 'id'>>

export type EssayTopic = {
  id: string
  title: string
  description: string
}

export type Essay = Omit<Post, 'categories' | 'alert' | 'author' | 'coverImage'> & {
  topic: string
  authors: EssayAuthor[]
}

import { Post } from '@/interfaces/posts'
import { Gallery } from '@/interfaces/gallery'
import { Thread } from '@/interfaces/thread'
import { Music } from '@/interfaces/music'
import { MusicAuthor } from '@/interfaces/musicAuthor'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

// _posts

const postsDirectory = join(process.cwd(), 'public/_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string) {
  const slugs = getPostSlugs()
  const realSlug = slug.replace(/\.md$/, '')
  if (!slugs.includes(`${realSlug}.md`)) {
    return {
      title: '',
      excerpt: '',
      date: '',
      author: { name: '', picture: '' },
      ogImage: { url: '' },
      alert: '',
      slug: '',
      content: '',
    } as Post
  }

  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { ...data, slug: realSlug, content } as Post
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getQuriedPosts(category: string): Post[] {
  const slugs = getPostSlugs()
  const queriedPosts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.categories.includes(category))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return queriedPosts
}

// _gallery

const galleryInfoDirectory = join(process.cwd(), 'public/_gallery')

export function getGallerySlugs() {
  return fs.readdirSync(galleryInfoDirectory)
}

export function getGalleryBySlug(slug: string) {
  const slugs = getGallerySlugs()
  const realSlug = slug.replace(/\.json$/, '')
  if (!slugs.includes(`${realSlug}.json`)) {
    return {
      date: '',
      location: [''],
      category: [''],
      excerpt: '',
      title: '',
      desc: '',
      elements: [{ src: '', title: '', desc: '' }],
    } as Gallery
  }

  const fullPath = join(galleryInfoDirectory, `${realSlug}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const galleryData = JSON.parse(fileContents)

  return { ...galleryData, slug: realSlug } as Gallery
}

export function getAllGalleries(): Gallery[] {
  const slugs = getGallerySlugs()
  const galleries = slugs
    .map((slug) => getGalleryBySlug(slug))
    .sort((gallery1, gallery2) => (gallery1.date > gallery2.date ? -1 : 1))
  return galleries
}

// threads

const threadDirectory = join(process.cwd(), 'public/_threads')

export function getThreadSlugs() {
  return fs.readdirSync(threadDirectory)
}

export function getThreadBySlug(slug: string) {
  const slugs = getThreadSlugs()
  const realSlug = slug.replace(/\.json$/, '')
  if (!slugs.includes(`${realSlug}.json`)) {
    return {
      slug: '',
      date: '',
      title: '',
      content: '',
    } as Thread
  }

  const fullPath = join(threadDirectory, `${realSlug}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const threadData = JSON.parse(fileContents)

  return { ...threadData, slug: realSlug } as Thread
}

export function getAllThreads(): Thread[] {
  const slugs = getThreadSlugs()
  const threads = slugs
    .map((slug) => getThreadBySlug(slug))
    .sort((thread1, thread2) => (thread1.date > thread2.date ? -1 : 1))
  return threads
}

// profile

export function getProfile() {
  const fullPath = join(process.cwd(), 'public/_profile/profile.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return content
}

// musics

const musicAuthorDirectory = join(process.cwd(), 'public/_music')

export function getMusicAuthorSlugs() {
  return fs.readdirSync(musicAuthorDirectory)
}

export function getMusicAuthorBySlug(slug: string) {
  const slugs = getMusicAuthorSlugs()
  const realSlug = slug.replace(/\.json$/, '')
  if (!slugs.includes(`${realSlug}.json`)) {
    return {
      slug: '',
      order: 99,
      name: '',
      profileImgSrc: '',
      title: '',
      desc: '',
      elements: [{ year: 0, title: '', artist: '', src: '', desc: '' }],
    } as MusicAuthor
  }

  const fullPath = join(musicAuthorDirectory, `${realSlug}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const musicsData = JSON.parse(fileContents)

  return { ...musicsData, slug: realSlug } as MusicAuthor
}

export function getAllMusicAuthors(): MusicAuthor[] {
  const slugs = getMusicAuthorSlugs()
  // console.log(slugs)
  const musicAuthors = slugs
    .map((slug) => getMusicAuthorBySlug(slug))
    .sort((musicAuthor1, musicAuthor2) =>
      musicAuthor1.order < musicAuthor2.order ? -1 : 1,
    )
  return musicAuthors
}

// weekly

const pastWeeklyPostsDirectory = join(process.cwd(), 'public/_threads')

export function getHTMLstring(): string {
  const fullPath = join(pastWeeklyPostsDirectory, '690-07.01—07.07.html')
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  return fileContents
}

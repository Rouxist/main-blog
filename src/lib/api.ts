import { Post } from '@/interfaces/posts'
import { Essay, EssayAuthor, EssayAuthors } from '@/interfaces/essay'
import { Gallery } from '@/interfaces/gallery'
import { TravelAlbum } from '@/interfaces/travel'
import { Thread } from '@/interfaces/thread'
import { CategoryTree } from '@/interfaces/categoryTree'
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
      categories: [''],
      tags: [''],
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
  const idx = slugs.indexOf('.DS_Store')
  if (idx > -1) slugs.splice(idx, 1)
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getPostCategoriesArray(): string[][] {
  const slugs = getPostSlugs()
  const postCategoriesArray = slugs.map(
    (slug) => getPostBySlug(slug).categories,
  )
  return postCategoriesArray
}

export function getCategoryTree(): CategoryTree {
  const postsCategories = getPostCategoriesArray()
  const tree: CategoryTree = {}

  postsCategories
    .filter((category) => category.length > 0 && category[0] !== '')
    .forEach((categories) => {
      let currentLevel = tree

      categories.forEach((category) => {
        if (!currentLevel[category]) {
          currentLevel[category] = { count: 0, subcategories: {} }
        }
        currentLevel[category].count += 1 // Increment count for the category
        currentLevel = currentLevel[category].subcategories
      })
    })

  return tree
}

// _essay

const essaysDirectory = join(process.cwd(), 'public/_essay')

export function getEssayAuthors(): EssayAuthors {
  const fullPath = join(essaysDirectory, 'authors.json')
  return JSON.parse(fs.readFileSync(fullPath, 'utf8')) as EssayAuthors
}

export function getEssayAuthorById(id: string): EssayAuthor | undefined {
  const authors = getEssayAuthors()
  if (!Object.prototype.hasOwnProperty.call(authors, id)) return undefined
  return { ...authors[id], id }
}

export function getEssaysByAuthor(id: string): Essay[] {
  return getAllEssays().filter((essay) =>
    essay.authors.some((author) => author.id === id),
  )
}

export function getEssaySlugs(): string[] {
  return fs
    .readdirSync(essaysDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => entry.name)
}

export function getEssayBySlug(slug: string): Essay | undefined {
  const realSlug = slug.replace(/\.md$/, '')
  if (!getEssaySlugs().includes(`${realSlug}.md`)) {
    return undefined
  }

  const fullPath = join(essaysDirectory, `${realSlug}.md`)
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))
  const topic = data.topic ?? ''
  if (typeof topic !== 'string') {
    throw new Error(`Essay "${realSlug}" must specify topic as a string.`)
  }
  if (
    !Array.isArray(data.authors) ||
    data.authors.length === 0 ||
    data.authors.some((id: unknown) => typeof id !== 'string')
  ) {
    throw new Error(
      `Essay "${realSlug}" must specify an authors array of author IDs.`,
    )
  }

  const profiles = getEssayAuthors()
  const authors = data.authors.map((id: string) => {
    if (!Object.prototype.hasOwnProperty.call(profiles, id)) {
      throw new Error(
        `Unknown author "${id}" in essay "${realSlug}". Add this author to public/_essay/authors.json.`,
      )
    }
    return { ...profiles[id], id }
  })

  return { ...data, slug: realSlug, content, topic, authors } as Essay
}

export function getAllEssays(): Essay[] {
  return getEssaySlugs()
    .map((slug) => getEssayBySlug(slug))
    .filter((essay): essay is Essay => essay !== undefined)
    .sort((essay1, essay2) => essay2.date.localeCompare(essay1.date))
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
  const idx = slugs.indexOf('.DS_Store')
  if (idx > -1) slugs.splice(idx, 1)
  const galleries = slugs
    .map((slug) => getGalleryBySlug(slug))
    .sort((gallery1, gallery2) => (gallery1.date > gallery2.date ? -1 : 1))
  return galleries
}

// _travel

const travelDirectory = join(process.cwd(), 'public/_travel')

export function getTravelSlugs(): string[] {
  return fs
    .readdirSync(travelDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => entry.name.replace(/\.json$/, ''))
}

export function getTravelBySlug(slug: string): TravelAlbum | undefined {
  const realSlug = slug.replace(/\.json$/, '')
  if (!getTravelSlugs().includes(realSlug)) return undefined

  const data = JSON.parse(
    fs.readFileSync(join(travelDirectory, `${realSlug}.json`), 'utf8'),
  )
  const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value)
  const hasStrings = (value: Record<string, unknown>, keys: string[]) =>
    keys.every((key) => typeof value[key] === 'string')
  const hasValidImageQuality = (value: Record<string, unknown>) =>
    value.imageQuality === undefined ||
    (Number.isInteger(value.imageQuality) &&
      (value.imageQuality as number) >= 1 &&
      (value.imageQuality as number) <= 100)

  if (
    !isRecord(data) ||
    !hasStrings(data, ['date', 'title', 'excerpt', 'desc', 'thumbnail']) ||
    !hasValidImageQuality(data) ||
    !Number.isFinite(Date.parse(data.date as string)) ||
    !Array.isArray(data.location) ||
    !data.location.every((location: unknown) => typeof location === 'string') ||
    !Array.isArray(data.elements) ||
    !data.elements.every(
      (photo: unknown) =>
        isRecord(photo) &&
        hasStrings(photo, ['title', 'date', 'src', 'alt', 'desc']) &&
        Number.isFinite(Date.parse(photo.date as string)),
    )
  ) {
    throw new Error(`Invalid travel album: ${realSlug}.json`)
  }

  return { ...data, slug: realSlug } as TravelAlbum
}

export function getAllTravels(): TravelAlbum[] {
  return getTravelSlugs()
    .map((slug) => getTravelBySlug(slug))
    .filter((album): album is TravelAlbum => album !== undefined)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
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
  const idx = slugs.indexOf('.DS_Store')
  if (idx > -1) slugs.splice(idx, 1)
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

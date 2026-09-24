export type TravelPhoto = {
  title: string
  date: string
  src: string
  width: number
  height: number
  alt: string
  desc: string
}

export type TravelAlbum = {
  slug: string
  date: string
  location: string[]
  title: string
  excerpt: string
  desc: string
  thumbnail: string
  imageQuality?: number
  elements: TravelPhoto[]
}

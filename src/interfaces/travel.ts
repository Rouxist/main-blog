export type TravelPhoto = {
  title: string
  date: string
  src: string
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
  elements: TravelPhoto[]
}

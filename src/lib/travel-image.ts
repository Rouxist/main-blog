import { stat } from 'fs/promises'
import { resolve, sep } from 'path'
import sharp from 'sharp'

// Read metadata on the server; album JSON does not need manual dimensions.
export async function getTravelImageDimensions(src: string) {
  const directory = resolve(process.cwd(), 'public/assets/gallery/travel')
  if (!src.startsWith('/assets/gallery/travel/')) {
    throw new Error(
      `Travel image must be inside /assets/gallery/travel/: ${src}`,
    )
  }
  const file = resolve(process.cwd(), 'public', src.slice(1))
  if (!file.startsWith(`${directory}${sep}`)) {
    throw new Error(`Invalid travel image path: ${src}`)
  }

  try {
    await stat(file)
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return undefined
    throw error
  }

  const metadata = await sharp(file).metadata()
  if (!metadata.width || !metadata.height) {
    throw new Error(`Cannot read travel image dimensions: ${src}`)
  }
  // EXIF orientations 5–8 rotate the displayed image by 90 or 270 degrees.
  const rotated =
    metadata.orientation !== undefined && metadata.orientation >= 5
  return {
    width: rotated ? metadata.height : metadata.width,
    height: rotated ? metadata.width : metadata.height,
  }
}

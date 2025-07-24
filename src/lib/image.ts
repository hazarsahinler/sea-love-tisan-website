// src/lib/image.ts
import imageUrlBuilder from '@sanity/image-url'
import type { Image } from '@sanity/types'
import sanityClient from './sanityClient' // Daha önce oluşturduğumuz client'ı kullanıyoruz

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: Image) {
  return builder.image(source)
}
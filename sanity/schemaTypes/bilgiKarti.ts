// Dosya Yolu: sanity/schemaTypes/bilgiKarti.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bilgiKarti',
  title: 'Bilgi Kartları (Tisan Hakkında)',
  type: 'document',
  fields: [
    defineField({
      name: 'baslik',
      title: 'Başlık',
      type: 'string',
      description: 'Kartın başlığı (Örn: Zengin Balık Popülasyonu)',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'aciklama',
      title: 'Açıklama',
      type: 'text',
      description: 'Kartın bilgilendirici metni.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'resim',
      title: 'Resim',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'baslik',
      media: 'resim',
    },
  },
})
// Dosya Yolu: sanity/schemaTypes/galeri.ts

import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export default defineType({
  name: 'galeri',
  title: 'Galeri',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    // --- Resim Alanı ---
    defineField({
      name: 'resim',
      title: 'Resim',
      type: 'image',
      options: {
        hotspot: true, // Resmin önemli noktasını seçmeyi sağlar
      },
      validation: Rule => Rule.required().error('Resim alanı zorunludur.'),
    }),

    // --- Açıklama Alanı ---
    defineField({
      name: 'aciklama',
      title: 'Açıklama',
      type: 'string',
      description: 'Resim hakkında kısa bir bilgi (isteğe bağlı).',
    }),

    // --- YENİ EKLENEN ANA SAYFA SLIDER ALANI ---
    defineField({
      name: 'anaSayfaSliderdaGoster',
      title: 'Ana Sayfa Slider\'ında Göster',
      type: 'boolean',
      description: 'Bu resmi ana sayfadaki kayan resimler bölümünde göstermek için işaretleyin.',
      initialValue: false, // Varsayılan olarak işaretsiz gelir
    }),
  ],

  // --- Panelde Görüntüleme Ayarı (Preview) ---
  // Galeri listesinde her bir öğenin nasıl görüneceğini belirler
  preview: {
    select: {
      title: 'aciklama', // Önizleme başlığı olarak 'aciklama' alanını kullan
      media: 'resim',     // Önizleme resmi olarak 'resim' alanını kullan
    },
  },
})
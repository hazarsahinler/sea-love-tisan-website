// sanity/schemaTypes/siteAyarlari.ts
import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons' // Panele ikon eklemek için

export default defineType({
  name: 'siteAyarlari',
  title: 'Site Ayarları',
  type: 'document',
  icon: CogIcon, // Sol menüde Ayarlar ikonu görünür
  fields: [
    defineField({
      name: 'telefonNumarasi',
      title: 'Telefon Numarası',
      type: 'string',
      description: 'Görünür formatta yazın (örn: 0532 123 45 67).',
    }),
    defineField({
      name: 'whatsappNumarasi',
      title: 'WhatsApp Numarası (Tıkla-Ara için)',
      type: 'string',
      description: 'Uluslararası formatta, boşluksuz yazın (örn: 905321234567).',
    }),
    defineField({
      name: 'email',
      title: 'E-posta Adresi',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram Profil URL',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook Sayfa URL',
      type: 'url',
    }),
    defineField({
      name: 'adres',
      title: 'İşletme Adresi',
      type: 'string',
      description: 'Teknenin kalkış noktası veya ofis adresi.',
    }),
    defineField({
        name: 'googleMapsLink',
        title: 'Google Harita Gömme (Embed) Linki',
        type: 'url',
        description: 'Google Haritalar\'dan "Harita yerleştir" seçeneği ile alınan URL\'yi buraya yapıştırın.',
    }),
  ],
})
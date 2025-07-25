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
    // --- YENİ ALANLAR ---
    defineField({
      name: 'telefonNumarasi2',
      title: '2. Telefon Numarası (Görünür)',
      type: 'string',
      description: 'İkinci hat için. Görünür formatta yazın.',
    }),
    defineField({
      name: 'whatsappNumarasi2',
      title: '2. WhatsApp Numarası (Tıkla-Ara için)',
      type: 'string',
      description: 'İkinci hat için. Uluslararası formatta, boşluksuz yazın.',
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
  name: 'weatherApiKey', // Adını daha genel yapalım
  title: 'Hava Durumu API Anahtarı (WeatherAPI.com)',
  type: 'string',
  description: 'WeatherAPI.com\'dan alınan API anahtarı.'
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
     defineField({
    name: 'anaSayfaVideoLink',
    title: 'Ana Sayfa Arka Plan Video Linki (YouTube)',
    type: 'url',
    description: 'Ana sayfada, resim slider\'ı yerine tam ekran gösterilecek olan YouTube videosunun linki. (Örn: https://www.youtube.com/watch?v=VIDEO_ID)',
  }),
  // --- YENİ ALAN ---
  defineField({
    name: 'mobilAnaSayfaVideoLink',
    title: 'Ana Sayfa Arka Plan Videosu (Mobil)',
    type: 'url',
    description: 'Dikey (9:16) formatındaki YouTube video linki. Reels/Shorts videoları idealdir.',
  }),
  ],
})
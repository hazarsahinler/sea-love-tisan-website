// sanity/schemaTypes/tur.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  // --- Temel Bilgiler ---
  name: 'tur', // API'da kullanılacak isim (sadece küçük harf)
  title: 'Turlar', // Yönetim panelinde görünecek başlık
  type: 'document', // Bunun bir "belge" tipi olduğunu belirtir (ana içerik)

  // --- Alanlar (Fields) ---
  // Yönetim panelinde görünecek form alanları
  fields: [
    defineField({
      name: 'turAdi',
      title: 'Tur Adı',
      type: 'string',
      description: 'Örn: Kelebekler Vadisi Mavi Tur',
      validation: Rule => Rule.required().error('Tur adı alanı zorunludur.'),
    }),
    defineField({
      name: 'slug',
      title: 'URL Uzantısı (Slug)',
      type: 'slug',
      options: {
        source: 'turAdi', // Otomatik olarak "Tur Adı" alanından oluşturulur
        maxLength: 96,
      },
      description: 'Web sitesindeki link yapısı için kullanılır (örn: /turlar/kelebekler-vadisi-turu).',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'fiyat',
      title: 'Fiyat (Kişi Başı)',
      type: 'number',
      description: 'Sadece rakam giriniz (örn: 850).',
    }),
    defineField({
      name: 'aciklama',
      title: 'Detaylı Tur Açıklaması',
      type: 'text', // Uzun metinler için "text" kullanılır
      description: 'Tur hakkında detaylı bilgi, hizmetler, saatler vb.',
    }),
    defineField({
      name: 'rota',
      title: 'Tur Rotası (Uğranacak Yerler)',
      type: 'array', // Bir liste veya dizi oluşturmak için kullanılır
      of: [{type: 'string'}], // Bu liste metin (string) öğelerinden oluşacak
      description: 'Her bir durağı ayrı bir öğe olarak ekleyin. "Add item" butonuna basın.',
    }),
    defineField({
      name: 'kapakFotografi',
      title: 'Kapak Fotoğrafı',
      type: 'image',
      description: 'Tur listelerinde ve detay sayfasının başında görünecek ana fotoğraf.',
      options: {
        hotspot: true, // Resmin farklı ekran boyutlarında nasıl kırpılacağını kontrol etmeyi sağlar
      },
    }),
    defineField({
        name: 'oneCikan',
        title: 'Ana Sayfada Öne Çıkar',
        type: 'boolean',
        description: 'Bu turu ana sayfada göstermek için işaretleyin.',
        initialValue: false, // Varsayılan olarak işaretsiz gelir
    }),
  ],
  // Panelde daha güzel bir görünüm için önizleme ayarı
  preview: {
    select: {
      title: 'turAdi',
      media: 'kapakFotografi',
    },
  },
})
// sanity/schemaTypes/index.ts

// 1. Adım: Oluşturduğumuz tüm şema dosyalarını buraya import ediyoruz.
import tur from './tur'
import siteAyarlari from './siteAyarlari'
import galeri from './galeri'

// 2. Adım: Hepsini tek bir liste (array) içinde dışa aktarıyoruz.
// Sanity'nin ana yapılandırma dosyası bu listeyi kullanacak.
export const schemaTypes = [tur, siteAyarlari, galeri]
// Dosya Yolu: src/scripts/slider.js
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Sayfa yüklendiğinde Swiper'ı başlat
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.hero-swiper', {
    modules: [Navigation, Autoplay],
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
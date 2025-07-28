// Dosya Yolu: src/scripts/about-slider.js
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sayfa tamamen yüklendiğinde bu kodu çalıştır
document.addEventListener('DOMContentLoaded', () => {
  const aboutSliderElement = document.querySelector('.about-swiper');
  
  // Sadece sayfada "about-swiper" elementi varsa devam et
  if (aboutSliderElement) {
    new Swiper(aboutSliderElement, {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      autoplay: { 
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: { 
        el: '.swiper-pagination', 
        clickable: true 
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        beforeInit: function (swiper) {
          if (swiper.params.loop) {
            swiper.params.loop = swiper.slides.length > 1;
          }
        },
      },
    });
  }
});
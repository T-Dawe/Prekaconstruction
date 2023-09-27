var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: 'fade',
  loop: true,
  speed: 300,
  mousewheel: {
    invert: false,
    // disable mousewheel
    enabled: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  // disable touch events
  touchEventsTarget: 'container',
  simulateTouch: false,
  // disable keyboard navigation
  keyboard: {
    enabled: false,
  }
});

setInterval(() => {
  swiper.slideNext();
}, 5000);

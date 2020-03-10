var swiper = new Swiper('.catSwiper', {
    navigation: {
      nextEl: '.swiper-button-next_catM',
      prevEl: '.swiper-button-prev_catM',
    },
    pagination: {
        el: '.swiper-pagination',
      },
  });
var swiper2 = new Swiper('.swiper-mode-my-swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next_cat2',
    prevEl: '.swiper-button-prev_cat2',
  },
  pagination: {
    el: '.swiper-pagination',
    centeredSlides: true,
  },
});
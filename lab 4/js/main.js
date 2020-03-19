if (document.documentElement.clientWidth <= 768) {
  var sl = 1
}
else
{
  sl = 2
}

var swiper = new Swiper('.catSwiper', {
    navigation: {
      nextEl: '.swiper-button-next_catM',
      prevEl: '.swiper-button-prev_catM',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });
var swiper2 = new Swiper('.swiper-mode-my-swiper', {
  slidesPerView: sl,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next_cat2',
    prevEl: '.swiper-button-prev_cat2',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    centeredSlides: true,
  },
});

window.onload=function(){
  var h = document.getElementById('sCont').clientHeight;
  console.log(h);
  document.getElementById("map").style.height = h + "px";
}
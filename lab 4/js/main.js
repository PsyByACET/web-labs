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

$("a.scroll-to").on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60
  }, 800);
});
// когда страница готова
window.onload=function(){
  // подгон размера карты под размер  
  let h = document.getElementById('sCont').clientHeight;
  document.getElementById("map").style.height = h + "px";
}



var sss
$('.check_b0x').click(function(){
  sss = $(':checkbox:checked').length;
	if (sss>0){
		$('#but_filt').show(200);
	} else {
		$('#but_filt').hide(200);
	}
}); 


// Сбросить галочки
$('.button_reset').click(function() {
  $('input:checked').prop('checked', false);
  $('#but_filt').hide(200);
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});


$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});

$(document).ready(function($) {
	$('.popup-open2').click(function() {
		$('.popup-fade2').fadeIn();
		return false;
	});	
	
	$('.popup-close2').click(function() {
		$(this).parents('.popup-fade2').fadeOut();
		return false;
  });
  $('.popup-close-button').click(function() {
		$(this).parents('.popup-fade2').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade2').fadeOut();
		}
	});
	
	$('.popup-fade2').click(function(e) {
		if ($(e.target).closest('.popup2').length == 0) {
			$(this).fadeOut();					
		}
	});
});
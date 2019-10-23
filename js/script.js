$(function(){

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider',
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    vertical: true
  });
  $('.slider__item').zoom();
})


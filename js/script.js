jQuery(document).ready(function() {
jQuery("a.scrollto").click(function () {
elementClick = jQuery(this).attr("href")
destination = jQuery(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
return false;
});
});
$(document).ready(function(){
	$('.menu__icon').click(function(event){
		$('.menu__icon,.header__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document).ready(function(){
  $('.scrollto').click(function(event){
    $('.menu__icon,.header__list').removeClass('active');
    $('body').removeClass('lock');
  });
});
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
$(document).ready(function () {


  
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".navbar").addClass('sticky');
        } else {
            $(".navbar").removeClass('sticky');
        }
    });

    
});

$( document ).ready(function() {
  $('#headerVideoLink').magnificPopup({
   type:'inline',
   midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
 });

//  jQuery(document).ready(function($) {
//   $('.counter').counterUp({
//       delay: 10,
//       time: 1000
//   });
// });

$('.counter').counterUp({
  delay: 10,
  time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');
   
 });


 
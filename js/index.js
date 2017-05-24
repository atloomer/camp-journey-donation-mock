$(".mobile-nav-btn").on("click", function() {
  $(this).toggleClass("close-btn");
  $(".mobile-menu").toggleClass("open-mobile-menu");
  $(".mobile-list").toggleClass("display-ul");
  $(".link-anim").toggleClass("display-links");
});

$(".link-anim").on("click", function(){
  $(".mobile-menu").removeClass('open-mobile-menu');
  $('.mobile-nav-btn').removeClass("close-btn");
  $(".mobile-menu").removeClass("open-mobile-menu");
  $(".mobile-list").removeClass("display-ul");
  $(".link-anim").removeClass("display-links");
});

$('.donate-click').on('click', function() {
  $('.donate-modal').addClass('open-modal');
  $('.modal-info').addClass('open-modal-sidebar');
  $('.wrapper').delay(300).hide(0);
});

$('.close-modal').on('click', function(){
  $('.donate-modal').removeClass('open-modal');
  $('.modal-info').removeClass('open-modal-sidebar');
  $('.wrapper').show();
});

// Quick donate
$(".checkbox").click(function() {
  $('.checkbox').not(this).removeClass("checked");
  $(this).toggleClass("checked");
});


// Thank you animation
$('.submit-donation-btn').on('click', function(){
  $('.modal-form-container').addClass('modal-form-container-hide');
  $('.modal-info').addClass('thank-you-full-width');
  $('.dollar-body').addClass('dollar-body-animate');
  $('.dollar-corner').addClass('dollar-corner-animate');
  $('.dollar-head').addClass('dollar-head-animate');
  $('.heart').addClass('fill-heart');
  $('.donate-heading').html('Thank You!').css('font-size', '2em');
});

// Get date
var today = new Date();
var year = today.getFullYear();

// Set or display year
$('.current-year').text(year);

// SMOOTH SCROLLING

$(function() {
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
});

// END SMOOTH SCROLLING
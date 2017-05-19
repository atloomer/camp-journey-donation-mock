$(".mobile-nav-btn").on("click", function() {
  $(this).toggleClass("close-btn");
  $(".mobile-menu").toggleClass("open-mobile-menu");
  $(".mobile-list").toggleClass("display-ul");
  $(".link-anim").toggleClass("display-links");
});

$('.donate-click').on('click', function() {
  $('.donate-modal').addClass('open-modal');
});

$('.close-modal').on('click', function(){
  $('.donate-modal').removeClass('open-modal');
});

// Quick donate
$(".checkbox").click(function() {
  $('.checkbox').not(this).removeClass("checked");
  $(this).toggleClass("checked");
});
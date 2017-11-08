// Carousel slider
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[767,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        slideSpeed:500,
        autoPlay:false
    });
});
// Mobile Nav functions
function openNav() {
       document.getElementById("mySidenav").style.width = "100%";
    }

function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

// Menu active scroll
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
$(document).ready(function () {
    $(window).resize(function () { 
        if ($(window).width() > 992) {
            $('.menu-control').prop('checked', false);
        }
        if ($(window).width() <= 992) {
          $('.homepage-work-content').removeClass('text-white')
        }
        if ($(window).width() > 992) {
          $('.homepage-work-content').addClass('text-white')
        }
    });
});


const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // ...
    },
    grid: {
      rows: 3,  // ...
    },
    breakpoints: {
      768: {      // ...
        grid: {
          rows: 1,  // ...
        },
        slidesPerView: 2,  // ...
        spaceBetween: 24, // ...
      },
      993: {      // ...
        slidesPerView: 3,  // ...
      },
    }
  });
  
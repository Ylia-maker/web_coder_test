const swiper = new Swiper('.join-block__slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

// const swiper_2 = new Swiper('.info-block__slider', {
//   slidesPerView: 5,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });

$('.info-block__slider').each(function(index, value) {
  new Swiper(value, {
    navigation: {
      nextEl: value.nextElementSibling.children[1],
      prevEl: value.nextElementSibling.children[0],
    },
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 10,
    simulateTouch: true,
    observer: true,
    observeParents: true,
    observeSliderChildren: true,
    watchOverflow: true,
    breakpoints: {
      630: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
    },
  });
});
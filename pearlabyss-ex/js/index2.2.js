window.onload = function(){
  const news_station = new Swiper('.news_station', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 1500,
      disableOnInteraction:false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 3,
      },
    }
  });

  const notice = new Swiper('.notice', {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 1500,
      disableOnInteraction:false,
    },
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 4,
      },
    }
  });
}
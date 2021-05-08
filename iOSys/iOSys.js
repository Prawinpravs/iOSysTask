$(".owl-carousel").owlCarousel({
  loop: true,
  center: true,
  items: 3,
  dots: true,
  autoplay: true,
  autoplayTimeout: 7000,
  loop: true,
  smartSpeed: 450,
  margin: 0,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

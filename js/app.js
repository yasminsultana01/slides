$(function () {
  // jquary
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoPlaySpeed: 1000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: ".arrows .leftArrow",
    nextArrow: ".arrows .rightArrow",
  });
});

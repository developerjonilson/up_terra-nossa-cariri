$(document).ready(function(){

  $('.main-slide-show').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.slide-show-testimonial').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 4000
  });

  $('.works-completed-slide').slick({
    variableWidth: true,
    arrows: false,
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplaySpeed: 1000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  $('.partners-slide').slick({
    variableWidth: true,
    arrows: false,
    dots: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplaySpeed: 1000,
    autoplay: true,
    centerMode: true,
    responsive: [
      {
        // breakpoint: 1024,
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

  $('.work-completed-slide-modal-one').slick({
    infinite: true,
    variableWidth: true,
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  });

  $('.work-completed-slide-modal-two').slick({
    infinite: true,
    variableWidth: true,
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  });

  $('.work-completed-slide-modal-three').slick({
    infinite: true,
    variableWidth: true,
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  });

  $('.work-completed-slide-modal-four').slick({
    infinite: true,
    variableWidth: true,
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  });

  $('.work-completed-slide-modal-five').slick({
    infinite: true,
    variableWidth: true,
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  });

});

document.addEventListener('DOMContentLoaded', () => {
  const scroller = new SweetScroll({ duration: 2000/* some options */});
}, false);

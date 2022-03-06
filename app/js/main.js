$(function () {
  $('[data-header="toggler"]').on('click', function (e) {
    $('.header-mobile').toggleClass('open');
  });
  $('.slider__box').slick({
    vertical: true,
    arrows: false,
    dots: true,
    appendDots: $('.slider__dots'),
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          vertical: false,
        },
      },
    ],
  });

  $('.number__window').on('click', function (e) {
    animateNumber();
  });

  function animateNumber() {
    const $oldNumber = $('.number__phone--old');
    $oldNumber.addClass('old').removeClass('bad-num');

    setTimeout(() => {
      $oldNumber.addClass('crossed-out');
    }, 300);

    $('.number__phone--8800').removeClass('bad-num old');
    $('.number-image-black').css({ opacity: 0 });
    $('.number-image-1').css({ opacity: 1 });
    setTimeout(() => {
      $('.number__info-title').addClass('animated');
    }, 600);
    setTimeout(() => {
      $('.number__info-text').addClass('animated');
    }, 750);
    setTimeout(() => {
      $('.number-image-2').css({ opacity: 1 });
    }, 900);
    setTimeout(() => {
      $('.number-image-3').css({ opacity: 1 });
    }, 1100);
  }

  function useAnimation() {
    let numberPosition = $('#number').offset().top;
    let windowHeight = document.documentElement.clientHeight;
    $(document).on('resize', (e) => {
      setPositionValues();
      checkPosition();
    });
    $(window).on('orientationchange', function (event) {
      windowHeight = document.documentElement.clientHeight;
      setPositionValues();
      checkPosition();
    });

    $(document).on('scroll', (e) => {
      checkPosition();
    });

    function checkPosition() {
      const position = Math.round(pageYOffset) + windowHeight;
      console.log(position - numberPosition);
      if (position - numberPosition > 500) {
        setTimeout(() => {
          animateNumber();
        }, 100);
      }
    }
  }

  // useAnimation();
});

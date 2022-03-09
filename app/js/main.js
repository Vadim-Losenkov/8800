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
    $('.number-image-black, .number-mobile-image-black').css({ opacity: 0 });
    $('.number-image-1, .number-mobile-image-1').css({ opacity: 1 });
    setTimeout(() => {
      $('.number__info-title').addClass('animated');
    }, 600);
    setTimeout(() => {
      $('.number__info-text').addClass('animated');
    }, 750);
    setTimeout(() => {
      $('.number-image-2, .number-mobile-image-2').css({ opacity: 1 });
    }, 900);
    setTimeout(() => {
      $('.number-image-3, .number-mobile-image-3').css({ opacity: 1 });
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
      if (position - numberPosition > 300) {
        setTimeout(() => {
          animateNumber();
        }, 200);
      }
    }
  }

  useAnimation();
  const $container = $('.container');
  let containerCoords = $container.offset().left;
  setSliderPosition();
  $(window).on('resize', setSliderPosition);
  $(window).on('orientationchange', setSliderPosition);

  function setSliderPosition() {
    containerCoords = $container.offset().left;
    console.log(containerCoords);

    $('.features__inner').css({ marginLeft: `${containerCoords + 15}px` });
    $('.features__title').css({ marginRight: `${containerCoords + 115}px` });
  }

  let counter = 0;
  const $sliderLine = $('.features__slider-line');
  const $sliderItems = $('.features__slider-item');
  $('[slider-arrow]').on('click', (e) => {
    const $target = e.currentTarget.getAttribute('slider-arrow');

    if ($target === 'right' && counter < $sliderItems.length - 1) {
      counter++;
      $sliderItems[counter].classList.add('checked');
    } else if ($target === 'left' && counter > 0) {
      $sliderItems[counter].classList.remove('checked');
      counter--;
    }
    $sliderLine.css({
      transform: `translateX(${-550 * counter}px)`,
    });
  });
});

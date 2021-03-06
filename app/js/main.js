$(function () {
  $('[data-button="toSecton"]').on('click', function (e) {
    e.preventDefault()
    const sectionID = $(this).attr('href')

    $('html, body').animate({
      scrollTop: $(sectionID).offset().top
    }, {
      duration: 500,
    });
  })
  
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

  setTimeout(() => {
    $('.open-popup').magnificPopup({
      type: 'inline',
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr('data-effect');
        },
      },
      midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
    $('[data-popup="close"]').on('click', () => $('.open-popup').magnificPopup('close'));
    $('.popup-request__checkbox').on('click', () => {
      $('.popup-request__checkbox-button').toggleClass('active');
    });
    $('[data-header="toggler"]').on('click', function (e) {
      $('.header-mobile').toggleClass('open');
      $('[data-search="field"]')[0].value = '';
      $('[data-search="wrapper"]').removeClass('active');
    });
    $('[data-banner-bottom="close"]').on('click', () => {
      $('[data-banner-bottom="wrapper"]').css({
        transform: `translateY(100px)`,
        opacity: 0,
        transition: 'all .3s',
      });
      setTimeout(() => {
        $('[data-banner-bottom="wrapper"]').css({ display: 'none' });
      }, 300);
    });
    $('[data-form="number"]').mask('+7 (999) 999-9999');
    $('.header__menu-link.home').hover(
      function () {
        $('.banner-top').addClass('open');
      },
      function () {
        setTimeout(() => {
          $('.banner-top').removeClass('open');
        }, 100);
      },
    );

    $('.tariff__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.tariff__arrows-arrow--prev'),
      nextArrow: $('.tariff__arrows-arrow--next'),
      autoplay: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 570,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    if (window.innerWidth <= 768) {
      $('.users__box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: 2000,
        centerMode: false,
        variableWidth: true,
        arrows: false
      })
    }
    $('.scope__items').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: 2000,
      prevArrow: $('.scope__arrows-arrow--prev'),
      nextArrow: $('.scope__arrows-arrow--next'),
      centerMode: false,
      variableWidth: true,
      dots: true,
      appendDots: $('.scope__dots'),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            variableWidth: false,
          },
        },
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 2,
            variableWidth: false,
          },
        },
        {
          breakpoint: 570,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
          },
        },
      ],
    });
    $('.reviews__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: 2000,
      prevArrow: $('.reviews__arrows-arrow--prev'),
      nextArrow: $('.reviews__arrows-arrow--next'),
      centerMode: false,
      variableWidth: true,
    });
    $('.footer__slider').slick({
      autoplay: 2000,
      prevArrow: $('.footer__slider-arrow--left'),
      nextArrow: $('.footer__slider-arrow--right'),
      variableWidth: true,
    });
    
    let iCount = 1
    
    function animateNumber() {
      const k = 1;
      const $oldNumber = $('.number__phone--old');
      $oldNumber.addClass('old').removeClass('bad-num');

      setTimeout(() => {
        $oldNumber.addClass('crossed-out');
      }, 300 * k);

      $('.number__phone--8800').removeClass('bad-num old').css({opacity: 1});
      $('.number-image-black, .number-mobile-image-black').css({ opacity: 0 });
      $('.number-image-1, .number-mobile-image-1').css({ opacity: 1 });
      setTimeout(() => {
        $('.number__info-title').addClass('animated');
        $('.number__info-title--black').removeClass('animated');
      }, 600 * k);
      setTimeout(() => {
        $('.number__info-text').addClass('animated');
        $('.number__info-text--black').removeClass('animated');
      }, 750 * k);
      setTimeout(() => {
        $('.number-image-2, .number-mobile-image-2').css({ opacity: 1 });
      }, 900 * k);
      setTimeout(() => {
        $('.number-image-3, .number-mobile-image-3').css({ opacity: 1 });
      }, 1100 * k);
    }
    function reanimateNumber() {
      const k = 1;
      const $oldNumber = $('.number__phone--old');
      $oldNumber.removeClass('old').addClass('bad-num');
      $('.number__phone--8800').css({opacity: 0})
        $('.number__phone--8800').removeClass('bad-num old');

      setTimeout(() => {
        $oldNumber.removeClass('crossed-out');
        $('.number-image-1, .number-mobile-image-1').css({ opacity: 0 });
      }, 300 * k);

      setTimeout(() => {
        $('.number__info-title--black').addClass('animated');
        $('.number__info-text--black').addClass('animated');
      }, 900 * k);
      setTimeout(() => {
        $('.number__info-title').removeClass('animated');
        $('.number__info-text').removeClass('animated');
        $('.number-image-black, .number-mobile-image-black').css({ opacity: 1 });
      }, 750 * k);
      setTimeout(() => {
        $('.number-image-3, .number-mobile-image-3').css({ opacity: 0 });
      }, 600 * k);
      setTimeout(() => {
        $('.number-image-2, .number-mobile-image-2').css({ opacity: 0 });
      }, 300 * k);
    }
    function animation() {
      if (iCount % 2 !== 0) {
        animateNumber()
      // } else if (iCount >= 2) {
      //   return
      } else {
        reanimateNumber()
      }
    }
    
    setInterval(function() {
      animation()
      iCount++
    }, 3000);

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
            // animateNumber();
          }, 2000);
        }
      }
    }

    let slideWidth = 550;
    useAnimation();
    const $container = $('.container');
    let containerCoords = $container.offset().left;
    setSliderPosition();
    $(window).on('resize', setSliderPosition);
    $(window).on('orientationchange', setSliderPosition);

    function setSliderPosition() {
      if (window.innerWidth <= 610) {
        slideWidth = window.innerWidth - 30;
      }

      containerCoords = $container.offset().left;

      $('.features__inner').css({ marginLeft: `${containerCoords + 15}px` });
      $('.features__title').css({ marginRight: `${containerCoords + 115}px` });
    }

    let counter = 0;
    const $sliderLine = $('.features__slider-line');
    const $sliderItems = $('.features__slider-item');
    $sliderItems.css({ width: slideWidth + 'px' });
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
        transform: `translateX(${-slideWidth * counter}px)`,
      });
    });

    $('.choise__numbers-item').on('click', function (e) {
      $('.choise__numbers-item').removeClass('active');
      $(this).addClass('active');
    });
    $('.questions__item').on('click', function (e) {
      $(this).toggleClass('active').children('.questions__item-info').slideToggle(300);
    });

    $('[data-search="close"]').on('click', () => {
      $('[data-search="field"]')[0].value = '';
      $('[data-search="wrapper"]').removeClass('active');
    });
    $('[data-search="open"]').on('click', (e) => {
      e.preventDefault();
      $('[data-search="wrapper"]').addClass('active');
    });
    $('.phone-select').niceSelect();

    function customInput(id = 1) {
      const $item = $(`[data-input="${id}"]`);
      if (id !== 1) {
        $item.focus();
      }

      if ($item) {
        $item.on('input', function (e) {
          this.value = this.value.replace(/[^0-9]/g, '');

          if ($(this).val().length >= 1) {
            customInput(id + 1);
          } else {
            customInput(id - 1);
          }
        });
      }
    }
    customInput(1);
  }, 0);
});

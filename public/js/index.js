/* INICIO */

$(document).ready(function () {

  var Page = (function () {

    var $nav = $('#nav-dots > span'),
      slitslider = $('#slider').slitslider({
        onBeforeChange: function (slide, pos) {

          $nav.removeClass('nav-dot-current');
          $nav.eq(pos).addClass('nav-dot-current');

        }
      }),

      init = function () {

        initEvents();

      },
      initEvents = function () {

        $nav.each(function (i) {

          $(this).on('click', function (event) {

            var $dot = $(this);

            if (!slitslider.isActive()) {

              $nav.removeClass('nav-dot-current');
              $dot.addClass('nav-dot-current');

            }

            slitslider.jump(i + 1);
            return false;

          });

        });

      };

    return { init: init };

  })();

  Page.init();

  $('.nav-dots').children(':first').addClass('nav-dot-current');

  /**
   * Notes:
   *
   * example how to add items:
   */

  /*

  var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');

  // call the plugin's add method
  ss.add($items);

  */

  // metodo para el efecto de scroll en la clase animated
  $('.animacion-li-title').waypoint(function () {
    $(this).toggleClass('fadeInDownBig animated');
  },
  {
    offset: '70%',
    triggerOnce: true
  });

  $('.animacion-li-uno').waypoint(function () {
    $(this).toggleClass('fadeInLeftBig animated');
  },
  {
    offset: '70%',
    triggerOnce: true
  });

  $('.animacion-li-dos').waypoint(function () {
    $(this).toggleClass('fadeInDownBig animated');
  },
  {
    offset: '70%',
    triggerOnce: true
  });

  $('.animacion-li-tres').waypoint(function () {
    $(this).toggleClass('fadeInDownBig animated');
  },
  {
    offset: '70%',
    triggerOnce: true
  });

  $('.animacion-li-cuatro').waypoint(function () {
    $(this).toggleClass('fadeInRightBig animated');
  },
  {
    offset: '70%',
    triggerOnce: true
  });

});

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

  // metodo para el efectos de los servicios especificos
  $( '#fc-slideshow' ).flipshow();

//EFECTOS DE SERVICIOS SECCION 2
  $(this).children(':last');
  $('.item_hover').hover(function(){
     $(this).parent().children(':last').addClass('animated');
     $(this).parent().children(':last').addClass('fadeOutDown');
  },function() {
    $(this).parent().children(':last').addClass('fadeInUp');
    $(this).parent().children(':last').removeClass('fadeOutDown');

  });

  //EFECTO FIXED NAVBAR


  $(document).scroll(function(){
    scrollListener();
  });
  var scrollTop=$('.nav_content').position().top;
  scrollTop=scrollTop-1;
  var scrollListener=function(){
    if($(this).scrollTop()>scrollTop){
        $('.nav_content').addClass('fixed_nav');
        $('.nav_brand').removeClass('col-md-4');
        $('.nav_brand').addClass('col-md-3')
    }else{
        $('.nav_content').removeClass('fixed_nav');
        $('.nav_brand').removeClass('col-md-3');
        $('.nav_brand').addClass('col-md-4')
    }
  };

  //SCROLL A SECCIONES INDIVIDUALES Y MANEJO DE ELEMENTOS EN EL NAV

  $('.nav_content a').click(function(evt){
      evt.preventDefault();
      scrollNavAction($(this));

  });
  var navActive="#inicio";
  var scrollNavAction=function(sectionThis){
    var section=$(sectionThis).attr('href');
    koderScroll(section);
    $('.nav_content a[href=\''+navActive+'\']').removeClass('active');
    $(thisSe).addClass('active');
    navActive=section;

  }
  //CONVERTIR DE VH A PIXELES
  var vhToPx=function(vh){
    return (window.innerHeight/100)*vh;
  }
  //HACER SCROLL A UNA SECCION ESPECIFICA YA EXCLUYENDO EL NAV
  var koderScroll=function(section){
    var position=section=="#inicio"?$(section).offset().top:($(section).offset().top - vhToPx(15));
    $('html,body').animate({scrollTop:position},500);
  }
  //HACER SCROLL CON SOLO AGREGAR UNA clase
  $('.koderScroll').click(function(evt){
      var section=$(this).attr('href');
      koderScroll(section);
      evt.preventDefault();
  });
});

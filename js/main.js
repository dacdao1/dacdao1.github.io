(function($) {

  "use strict";




  /// modal video player

  var $videoSrc;
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);



  // when the modal is opened autoplay it
  $('#myModal').on('shown.bs.modal', function (e) {

  // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
  $("#video").attr('src',$videoSrc + "?modestbranding=1&rel=0&iv_load_policy=3&fs=0&disablekb=1&showinfo=0&autoplay=1&controls=0");

  // autoplay=0&amp;modestbranding=1&amp;showinfo=0;controls=0" );
  })



  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#video").attr('src',$videoSrc);

  })

  $(document).ready(function(){
    $("#scheduleDemo").click(function(){
      $("html, body").animate({
              scrollTop: $(
                'html, body').get(0).scrollHeight
          }, 5000);
    });
  });



  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /*
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    // one page navigation
    $('.main-navigation').onePageNav({
            currentClass: 'active'
    });

    $(window).on('load', function() {

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

    // Slick Nav
    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      closeOnClick: true,
      parentTag: 'span',
      allowParentLinks: true,
      duplicate: false,
      label: '',

    });


/*
   CounterUp
   ========================================================================== */
    $('.counter').counterUp({
      time: 1000
    });

/*
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

/*
   Touch Owl Carousel
   ========================================================================== */
    var owl = $(".touch-slider");
    owl.owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall: [1024, 2],
      itemsTablet: [600, 1],
      itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');

/*
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

/*
   VIDEO POP-UP
   ========================================================================== */
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });


  /*
   SMOOTH SCROLL
   ========================================================================== */
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';

    $('a.scrollto').on('bind', 'click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });

/*
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

/* Nivo Lightbox
  ========================================================*/
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });


/* stellar js
  ========================================================*/
  $.stellar({
    horizontalScrolling: true,
    verticalOffset: 40,
    responsive: true
  });

/*
   Page Loader
   ========================================================================== */
  $('#loader').fadeOut();

  $(document).ready(function () {
  	$('#uiSlider').carousel('pause'); // stop carousel autoplay


    // check next slide transition started
  	$('#uiSlider').on('slide.bs.carousel', function () {
  		$('#uiSlider video').each(function () {
  		  this.pause(); // pause all videos inside carousel
  			this.currentTime = 0; // reset video timing to zero
  		});
  	});

    // play active carousel once carousel transition completed
  	$('#uiSlider').on('slid.bs.carousel', function () {
  	  if($('#uiSlider .active').find('video').length > 0){
  		  $('#uiSlider .active').find('video')[0].play();
  		} else {
        // if no video found in carousel item move current slider after five seconds
  		  setTimeout(function(){
  			  $('#uiSlider').carousel('next');
  			}, 5000);
  		}
  	});
  });

}(jQuery));

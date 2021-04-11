jQuery(document).ready(function($) {
  "use strict";
  //PRETTYPHOTO
  $("a[data-rel]").each(function() {
    $(this).attr("rel", $(this).data("rel"));
    $(".pretty-gallery a[rel^='prettyPhoto']").prettyPhoto();
  });

  if ($(".gallery").length) {
    $(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({
      animation_speed: "normal",
      theme: "light_square",
      slideshow: 3000,
      autoplay_slideshow: true
    });
    $(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({
      animation_speed: "fast",
      slideshow: 10000,
      hideflash: true
    });
  }

  //TESTIMONIAL STYLE 3
  if ($(".testimonial-3").length) {
    $(".testimonial-3").owlCarousel({
      loop: false,
      dots: false,
      nav: true,
      items: 1
    });
  }

  // //BANNER STYLE 1 HOME 1
  // if ($(".banner-1").length) {
  //   $(".banner-1").owlCarousel({
  //     loop: false,
  //     dots: false,
  //     nav: false,
  //     items: 1
  //   });
  // }

  //COMMINGSOON
  if ($(".countdown236").length) {
    var austDay = new Date();
    austDay = new Date(2018, 11 - 1, 11, 15, 35, 0);
    $(".countdown236").countdown({
      until: austDay
    });
    $("#year").text(austDay.getFullYear());
  }

  //LATEST BOOK
  if ($("#lates-book-slider").length) {
    $("#lates-book-slider").owlCarousel({
      loop: true,
      dots: true,
      nav: false,
      navText: "",
      items: 3,
      smartSpeed: 1000,
      padding: 0,
      margin: 30,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 2
        },
        1199: {
          items: 3
        }
      }
    });
  }

  //RELATED PRODUCTS
  if ($("#related-products").length) {
    $("#related-products").owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      navText: "",
      items: 3,
      smartSpeed: 1000,
      padding: 0,
      margin: 30,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 2
        },
        1199: {
          items: 3
        }
      }
    });
  }

  //Accordion
  if ($(".accordion_cp").length) {
    $.fn.slideFadeToggle = function(speed, easing, callback) {
      return this.animate(
        {
          opacity: "toggle",
          height: "toggle"
        },
        speed,
        easing,
        callback
      );
    };
    $(".accordion_cp").accordion({
      defaultOpen: "section1",
      cookieName: "nav",
      speed: "slow",
      animateOpen: function(elem, opts) {
        //replace the standard slideUp with custom function
        elem
          .next()
          .stop(true, true)
          .slideFadeToggle(opts.speed);
      },
      animateClose: function(elem, opts) {
        //replace the standard slideDown with custom function
        elem
          .next()
          .stop(true, true)
          .slideFadeToggle(opts.speed);
      }
    });
  }

  // //ALBUM BOOK
  // if ($("#album-book-slider").length) {
  //   $("#album-book-slider").owlCarousel({
  //     loop: true,
  //     dots: false,
  //     nav: false,
  //     navText: "",
  //     items: 5,
  //     smartSpeed: 1000,
  //     padding: 0,
  //     margin: 30,
  //     responsiveClass: true,
  //     responsive: {
  //       0: {
  //         items: 1
  //       },
  //       768: {
  //         items: 2
  //       },
  //       992: {
  //         items: 2
  //       },
  //       1199: {
  //         items: 5
  //       }
  //     }
  //   });
  // }

  //HOME GALLERY
  if ($(".home-gallery").length) {
    $(".home-gallery").owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      navText: "",
      items: 5,
      smartSpeed: 1000,
      padding: 0,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 2
        },
        1199: {
          items: 5
        }
      }
    });
  }

  //CONTACT MAP
  if ($("#map_contact_1").length) {
    // var map;
    // var myLatLng = new google.maps.LatLng(40.712784, -74.005941);
    // //Initialize MAP
    // var myOptions = {
    //     zoom: 12,
    //     center: myLatLng,
    //     //disableDefaultUI: true,
    //     zoomControl: true,
    //     scrollwheel: false,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP,
    //     mapTypeControl: false,
    //     styles: [{
    //         stylers: [{
    //             hue: '#2b2b2b'
    //         }, {
    //             saturation: -100,
    //         }, {
    //             lightness: 10
    //         }]
    //     }],
    // }
    // map = new google.maps.Map(document.getElementById('map_contact_1'), myOptions);
    // //End Initialize MAP
    // //Set Marker
    // var marker = new google.maps.Marker({
    //     position: map.getCenter(),
    //     map: map,
    //     icon: 'images/map-icon-1.png'
    // });
    // marker.getPosition();
    // //End marker
  }
  //Function End

  /*ISOTOPE GALLERY CLASSIC
	======================================================*/
  if ($(".filter-gallery-metro-1 .isotope").length) {
    var $container = $(".filter-gallery-metro-1 .isotope");
    $container.isotope({
      itemSelector: ".item",
      transitionDuration: "0.6s",
      masonry: {
        columnWidth: 3
      },
      layoutMode: "masonry"
    });

    $(window).resize(function() {
      $container.isotope({
        masonry: {
          columnWidth: $container.width() / 12
        }
      });
    });
  }
});

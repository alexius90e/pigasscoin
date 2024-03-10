var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var w = 0;
$(function() {
 "use strict";
    /* -------- preloader ------- */
    $(document).ready(function(){
        $('#preloader').delay(2000).fadeOut(500);
    });
    /* -------- preloader End ------- */

    /*----- Sticky Header -----*/
    $(window).on("scroll", function(){
        if ($(this).scrollTop() > 50) {
            $('header, .top-scroll').addClass('fixed');
        } else {
            $('header, .top-scroll').removeClass('fixed');
        }
    });
    /*----- Sticky Header End -----*/

    /*----- Top scrolling -----*/
    $(".scrollTo").on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: ($(target).offset().top)
        }, 1000);
    });
    /*----- Top scrolling End -----*/

    /* -------- Images Parallax ------- */
    if ($(".parallax").length > 0) {
        (function($) {
            var parallax = -0.5;

            var $bg_images = $(".parallax");
            var offset_tops = [];
            $bg_images.each(function(i, el) {
                offset_tops.push($(el).offset().top);
            });

            $(window).scroll(function() {
                var dy = $(this).scrollTop();
                $bg_images.each(function(i, el) {
                    var ot = offset_tops[i];
                    $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
                });
            });
        })(jQuery);
    }
    if ($(".parallax-2").length > 0) {
        (function($) {
            var parallax = 0.3;

            var $bg_images = $(".parallax-2");
            var offset_tops = [];
            $bg_images.each(function(i, el) {
                offset_tops.push($(el).offset().top);
            });

            $(window).scroll(function() {
                var dy = $(this).scrollTop();
                $bg_images.each(function(i, el) {
                    var ot = offset_tops[i];
                    $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
                });
            });
        })(jQuery);
    }
    /* -------- Images Parallax ------- */

    /*index : Roadmap slider*/
    if ($(".roadmap-slider").length > 0) {
        $(".roadmap-slider").owlCarousel({
            loop: true,
            autoplay: false,
            dots: true,
            nav: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    loop: true,
                    nav: false
                },
                420: {
                    items: 2,
                    loop: true,
                    nav: false,
                    margin: 0
                },
                767: {
                    items: 3,
                    loop: true,
                    nav: false,
                    margin: 0
                },
                1200: {
                    items: 4,
                    loop: true,
                    nav: false,
                    margin: 0
                },
            }
        });
    }
    /*end Roadmap slider*/

    /* Tokan Graph */
    function tokan_graph () {
        var scrollDistance = $(window).scrollTop();
        var scrollDistance1 = $('#tokensale-part').offset().top - 100;

        if ( scrollDistance >= (scrollDistance1 - 100) && scrollDistance <= (scrollDistance1 + 100)) {
            $('.donut').listtopie({
              startAngle:270,
              strokeWidth:5,
                hoverEvent:true,
                hoverBorderColor:'#6239d7',
            //    hoverAnimate:false,
                drawType:'round',
                speedDraw:150,
                hoverColor:'#ffffff',
                textColor:'#3d1f94',
                strokeColor:'#3d1f94',
                textSize:'18',
                hoverAnimate:true,
                marginCenter:85,
            });
        }
    }

    if ($("#tokensale-part").length > 0) {
    

    $(window).scroll(function(){
        tokan_graph();
    })

    $(window).on("resize", function(){
        $( window ).resize( function(){

          if( w != $( window ).width() ){
            if ( $(window).width() < 767 ){
                $('.donut').listtopie('refresh');
            }
            w = $( window ).width();
          }

        });
    })

  $(".token-graph").addClass("token-graph-right");
  }
  /* Tokan Graph End */

    function responsive_dropdown () {
        /* Responsive Menu */
        $(".menu-toggle").on("click", function(){
            $(".menu-toggle").toggleClass("active");
            $(".menu").slideToggle("slow");
        });
        $(".mega-menu > .opener").on("click", function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this)
                    .siblings(".menu ul ul")
                    .slideUp(200);
            } else {
                $(".mega-menu > .opener").removeClass("active");
                $(this).addClass("active");
                $(".menu ul ul").slideUp(200);
                $(this)
                    .siblings(".menu ul ul")
                    .slideDown(200);
            }
        });
        /* Responsive Menu End */

    };
    $(document).ready(function() {
        responsive_dropdown ();
		$(".modalswin__wrapper").bind("click", function (e) {
		   if($(this).has(e.target).length === 0) $(".modalswin").fadeOut();
		});
		$(".modalswin__close, .modal__link.white-bg").click(function(e){
			e.preventDefault();
			$(".modalswin").fadeOut();
		})
		$(document).mouseleave(function () {
			if($(window).width() > 767)
				checkStore();
				
		});
    });
		
	function checkStore(){
		var timeUp = localStorage.getItem('timeUp'),
			timeNow = new Date().getTime(),
			modalSwin = $(".modalswin");
		
		if(timeUp === null){
			timeUp = new Date().getTime() + (86500 * 3000);
			localStorage.setItem('timeUp', timeUp);
			modalSwin.fadeIn();
			return;
		}
			
		
		if(parseInt((timeUp - timeNow) / (24*3600*1000)) < 0){
			localStorage.setItem('timeUp', new Date().getTime() + (86500 * 3000));
			modalSwin.fadeIn();
		}
		
	}

    function accordion_faq () {
        /* Accordion FAQ */
        if ($(".accordion-faq-box").length > 0) {
            $(".accordion-faq-title").on("click", function() {
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                    $(this)
                        .siblings(".accordion-faq-content")
                        .slideUp(200);
                } else {
                    $(this)
                    $(".accordion-faq-title").removeClass("active");
                    $(this).addClass("active");
                    $(".accordion-faq-content").slideUp(200);
                    $(this)
                        .siblings(".accordion-faq-content")
                        .slideDown(200);
                }
            });
        };
        /* Accordion FAQ End */
    };
    $(document).ready(function() {
        accordion_faq ();
    });

    function coins_progress() {
        $(".coins-progress span").each(function () {
            $(this).animate({
                width: $(this).attr("data-progress") + "%",
            },1000
            );
            $(this).text($(this).attr("data-progress") + "%");
        });
    };

    /* -------- Coins Progress --------*/
    if ($(".coins-progress").length > 0) {
        setTimeout(coins_progress, 3000);
        
    }
    /* -------- Coins Progress End --------*/

    $(document).mouseup(function (e){ 
		var div = $("#navbarSupportedContent"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			div.removeClass('show'); 
		}
	});

    $('.nav-link').click(function(){
        var div = $("#navbarSupportedContent"); 
			div.removeClass('show'); 
    })

    var stry = navigator.userAgent;
    if (stry.indexOf('YaBrowser/14.12') > 0)
        $('.ya-hide').hide();

});



/* -------- Google Map End --------*/

}

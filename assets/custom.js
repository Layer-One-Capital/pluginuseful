  // ===================================================
  // Footer Height
  // ===================================================

  $(document).ready(function() {
    //	"use strict";
    //   var footerHeight = $('footer').height();
    //    $('body').css('padding-bottom', footerHeight +'px' );
    });
    
      // ===================================================
      // Smooth Scroll to #
      // ===================================================
    
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    
      // ===================================================
      // Fade in on scroll
      // ===================================================
      
      (function($) {
    
      $.fn.visible = function(partial) {
        
          var $t            = $(this),
              $w            = $(window),
              viewTop       = $w.scrollTop(),
              viewBottom    = viewTop + $w.height(),
              _top          = $t.offset().top,
              _bottom       = _top + $t.height(),
              compareTop    = partial === true ? _bottom : _top,
              compareBottom = partial === true ? _top : _bottom;
        
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    
      };
        
    })(jQuery);
        
    $(window).scroll(function(event) {
        
        $(".ani").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("in-view"); 
        } 
        });

        $('.seq.in-view').each(function(i,el) { 
            'use strict';
          $(el).delay(30*i).queue(function() {
              $(this).addClass('show').dequeue();
          });
        });
        
        
    });    
            
    var win = $(window);
    var allMods = $(".ani");
    
    allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
        el.addClass("in-view"); 
        } 
    });

    $('.seq.in-view').each(function(i,el) { 
        'use strict';
      $(el).delay(30*i).queue(function() {
          $(this).addClass('show').dequeue();
      });
    });
    
    win.scroll(function(event) {
        
        allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("in-view"); 
        } 
        });

        $('.seq.in-view').each(function(i,el) { 
            'use strict';
          $(el).delay(30*i).queue(function() {
              $(this).addClass('show').dequeue();
          });
        });
        
    });
    
       // ===================================================
       // Function: Waves Home Parallax
       // ===================================================
    
        function wavesParallax() {	
    
            $(window).scroll(function(){
                var scrollTop = $(window).scrollTop();
                var docHeight = $(document).height();
                var winHeight = $(window).height();
                var scrollPercent = (scrollTop) / (docHeight - winHeight);
                 var controlTransform = (scrollPercent*250);
                var controlTransformRounded = Math.round(controlTransform);
                  
              $('.appshapeholdertwo').css('transform', 'translateY(' + controlTransformRounded + 'px)');
              $('.appshapeholderone').css('transform', 'translateY(-' + controlTransformRounded + 'px)');
    
            });
         
        }
        wavesParallax(true);
        $(window).resize(function() {
                wavesParallax(true);
            });
    
      // ===================================================
      // Mobile Menu
      // ===================================================
        
        $(document).ready(function() {
            $('.hamburger').click(function(){
                $('html').toggleClass('overflow');
                $('body').toggleClass('overflow');
                $('body').toggleClass('menu');
                $('body').toggleClass('showoverlay');
            });
        });
    
        $(document).ready(function() {
            'use strict';
            $('#overlay').click(function(){
                $('html').removeClass('overflow');
                $('body').removeClass('overflow');
                $('body').removeClass('menu');
                $('body').removeClass('showoverlay');
            });
        });
        
        function checkWidth(init)
        {
            /*If browser resized, check width again */
            if ($(window).width() > 992) {
          $('html').removeClass('overflow');
                $('body').removeClass('overflow');
                $('body').removeClass('menu');
                $('body').removeClass('showoverlay');
            }
        }
    
        $(document).ready(function() {
            checkWidth(true);
    
            $(window).resize(function() {
                checkWidth(false);
            });
        });
    
      // ===================================================
      // Carousels
      // ===================================================
        
        $('#team').flickity({
            prevNextButtons: false,
            cellAlign: 'left',
            pageDots: false ,
            adaptiveHeight: true,
            imagesLoaded: true,
            wrapAround: false,
            contain: true,
            autoPlay: 6000,
            pauseAutoPlayOnHover: false
        });

      // ===================================================
      // Carousel with Pop Up
      // ===================================================    

      $('#product').flickity({
          prevNextButtons: false,
          cellAlign: 'left',
          pageDots: false ,
          adaptiveHeight: true,
          imagesLoaded: true,
          wrapAround: false,
          contain: true,
          autoPlay: 6000,
          pauseAutoPlayOnHover: false
      });
      
      $(document).ready(function() {

      // Define flickity carousel
      var $gallery = $('#productcarousel').flickity({
        imagesLoaded: true,
        percentPosition: false,
        wrapAround: true,
        pageDots: true,
        imagesLoaded: true,
        prevNextButtons: true
      });

      $('.carousel-nav').flickity({
        asNavFor: '#productcarousel',
        prevNextButtons: false,
        contain: true,
        pageDots: false,
        autoPlay: 6000,
        imagesLoaded: true
      });

      var flkty = $gallery.data('flickity');
        
      var arr = $.map($("#productcarousel .carousel-cell").find("img"), function(el) { 
        return {"src":el.src} 
      });
      
      
      $gallery.on('staticClick', function(event, pointer, cellElement, cellIndex) {
        if (!cellElement) {
          return;
        }
        
        $.magnificPopup.open({
            items: arr
          ,
          gallery: {
            enabled: true
          },
          type: 'image'
        }, cellIndex );
      });

    });
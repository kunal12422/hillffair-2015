(function(){


    angular.module('hillffair15App').controller('homepageCtrl',[ '$window',function($window){

        var vm = this;


           $window.mobile = false;
        // var isMobile = $window.matchMedia("only screen and (max-width: 760px)");

        // if(isMobile.matches){
        //         $window.mobile = true;
        // }
        // Uncomment while use for production

          var isMobile = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i);
                },
                any: function() {
                    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
                }
            };



            if(isMobile.any()) {
                     $window.mobile = true;
                }
        


        // console.log($('html').hasClass('fp-enabled'));
        vm.options = {
          
            anchors:['firstPage', 'secondPage', 'thirdPage', 'fouthPage', 'fifthPage','sixthPage'],
            autoScrolling:true,
            scrollOverflow:true,
             navigationTooltips: ['HOME', 'ABOUT', 'EVENTS', 'GALLERY', 'SPONSORS','CONTACT'],
          
            //verticalCentered:false,
            scrollBar: false,
            easing: 'easeInSine',
            css3: true,
            scrollingSpeed: 1000,

            //fitToSection:true,

            navigation: ((mobile) ? false : true),
            navigationPosition: 'right',
            slidesNavigation: true,
            afterRender: function(){
                //console.log("mobile= " + mobile);
                      if (!mobile) {
                                $.fn.fullpage.setAllowScrolling(true);
                                $.fn.fullpage.setAutoScrolling(true);
                                $.fn.fullpage.setKeyboardScrolling(true);
                                $.fn.fullpage.setFitToSection(true);

                                 $('.scene2_heading').addClass('animated hidden');
                                $('.scene2_content').addClass('animated hidden');

                                 $('.scene3_heading').addClass('animated hidden');
                                $('.scene3_images').addClass('animated hidden');
                                $('.gallery-link').addClass('animated hidden');
                            
                            }
            },
            afterLoad: function(anchorLink, index) {

                if(!mobile){
                     if(index == 2){
                        $('.scene2_heading').removeClass('hidden').addClass('fadeInDownBig');
                        $('.scene2_content').removeClass('hidden').addClass('fadeIn');
                    }
                    if(index == 3){
                        $('.scene3_heading').removeClass('hidden').addClass('fadeInDownBig');
                        $('.scene3_images').removeClass('hidden').addClass('fadeIn');
                    }
                    if (index == 4) {
                         $('.gallery-link').removeClass('hidden').addClass('fadeInDownBig');
                        $('#fp-nav').hide();
                        $('.fp-controlArrow.fp-prev').css('display', 'none');
                    }
                }
               
            },

            onLeave: function(index, nextIndex, direction) {

                if(index == 4) {
                    $('#fp-nav').show();
                    
                }
            },
            afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
           

            
            if(anchorLink == 'fouthPage' && slideIndex == 1){
                
                $('.fp-controlArrow.fp-prev').css('display', '');
            }

            
            
        }


        };
     //END OF VM.OPTIONS

    }]);

})();

/**
 * Desktop main.js.
 * version 2.0
 * trimatrixlab
 */

(function ($) {
    'use strict';

    jQuery(document).on('ready', function () {


        /* ---------------------------------------------
         INITIALIZE TILE-NAV FUNCTION
         --------------------------------------------- */
        function initTileNav() {

            /*TILE-NAV BUTTON ACTION*/
            $('button#menu-tile-btn').on('click', function () {

                var tileMenu = '#tile-menu';
                if ($(tileMenu).hasClass('hidden')) {
                    $(tileMenu).removeClass('fadeOut hidden');
                }
                else {
                    $(tileMenu).addClass('fadeOut');
                    setTimeout(function () {
                        $(tileMenu).addClass('hidden');
                    }, 900);
                }
            });

            /*FLEXBOX PROPERTIES FOR SLIDER*/
            $('#tile-menu').find('.slide-flex').css({
                'display': 'flex',
                'justify-content': 'center',
                'align-items': 'center',
                'flex-direction': 'column',
                'height': '100%'
            });

            /*TILE NAV PREVIEW SLIDER*/
            $('#big-tile-slider').pogoSlider({
                autoplayTimeout: 4000,
                autoplay: true,
                displayProgress: false,
                preserveTargetSize: false,
                targetWidth: 1000,
                generateNav: false,
                generateButtons: false,
                targetHeight: 300,
                responsive: false,
                pauseOnHover: true
            }).data('plugin_pogoSlider');
        }


        /* ---------------------------------------------
         INITIALIZE LAUNCHER-NAV FUNCTION
         --------------------------------------------- */
        function initLauncherNav() {

            /*LAUNCHER NAV BUTTON ACTION*/
            $('button#menu-launcher-btn').on('click', function () {

                /*ANIMATE LAUNCHER MENU*/
                var launcherMenu = '#launcher-menu';
                if ($(launcherMenu).hasClass('hidden')) {
                    $(launcherMenu).removeClass('fadeOut hidden');
                }
                else {
                    $(launcherMenu).addClass('fadeOut');
                    setTimeout(function () {
                        $(launcherMenu).addClass('hidden');
                    }, 900);
                }
                launcherNav.update(true);
            });


            /*LAUNCHER NAV SLIDER*/
            var launcherNav = new Swiper('#launcher-slider', {
                //loop: true,
                speed: 600,
                observer: true,
                observeParents: true,
                a11y: true,
                slidesPerView: 1,
                paginationClickable: true,
                onInit: function () {
                    $('#launcher-slider').find('.swiper-slide-next').find('.overlay-btn')
                        .fadeOut();
                },
                onSlideChangeStart: function () {
                    $('#launcher-slider .swiper-slide-next,#launcher-slider .swiper-slide-prev').find('.overlay-btn')
                        .fadeOut();
                },
                onSlideChangeEnd: function () {
                    $('#launcher-slider').find('.swiper-slide-active').find('.overlay-btn')
                        .fadeIn();
                },
                pagination: '.swiper-pagination-launcher',
                keyboardControl: true
            });

            /*INITIALIZE TOOLTIP*/
            $('[data-toggle="tooltip"]').tooltip({trigger: 'focus hover'});
        }


        /* ---------------------------------------------
         BACKGROUND BLUR FOR OVERLAY MENU [Enable FOR BACKGROUND BLUR]
         --------------------------------------------- */
        /*$('#tile-menu,#launcher-menu').backgroundBlur({
         imageURL: 'img/polygon/3.jpg',              //CHANGE IMAGE TO UR LIKE
         blurAmount : 10,
         imageClass : 'bg-blur'
         });*/


        /* ---------------------------------------------
         TYPING TEXT INITIALIZATION
         --------------------------------------------- */
        /*TYPING FOR SERVICE*/
        function initServiceTyping() {
            $('#animated-text-service').typed({
                stringsElement: $('#typed-strings-service'),
                typeSpeed: 90,
                startDelay: 0,
                backSpeed: 0,
                shuffle: true,
                backDelay: 500,
                loop: true,
                loopCount: false,
                showCursor: true,
                attr: null,
                contentType: 'html'
            });
        }

        /*TYPING FOR ABOUT ME*/
        function initAboutMeTyping() {
            $('#animated-text-me').typed({
                stringsElement: $('#typed-strings-me'),
                typeSpeed: 90,
                startDelay: 0,
                backSpeed: 0,
                shuffle: true,
                backDelay: 500,
                loop: true,
                loopCount: false,
                showCursor: true,
                attr: null,
                contentType: 'html'
            });
        }

        /*TYPING FOR MORE DETAILS*/
        function initMoreDetailsLandingTyping() {
            $('#animated-text-landing').typed({
                stringsElement: $('#typed-strings-landing'),
                typeSpeed: 90,
                startDelay: 0,
                backSpeed: 0,
                shuffle: true,
                backDelay: 500,
                loop: true,
                loopCount: false,
                showCursor: true,
                attr: null,
                contentType: 'html'
            });
        }

        /*TYPING FOR SINGLE GALLERY*/
        function initSingleGalleryTyping() {
            $('#animated-text-gallery').typed({
                stringsElement: $('#typed-strings-gallery'),
                typeSpeed: 90,
                startDelay: 0,
                backSpeed: 0,
                shuffle: true,
                backDelay: 500,
                loop: true,
                loopCount: false,
                showCursor: true,
                attr: null,
                contentType: 'html'
            });
        }

        /*TYPING FOR RES PLACE*/
        function initResPlaceTyping() {
            $('#animated-text-place').typed({
                stringsElement: $('#typed-strings-place'),
                typeSpeed: 90,
                startDelay: 0,
                backSpeed: 0,
                shuffle: true,
                backDelay: 500,
                loop: true,
                loopCount: false,
                showCursor: true,
                attr: null,
                contentType: 'html'
            });
        }

        /*TYPING FOR COMING-SOON*/
        function initComingSoonTyping() {
            $('#animated-text-soon').typed({
                stringsElement: $('#typed-strings-soon'),
                typeSpeed: 90,
                startDelay: 0,
                backSpeed: 0,
                shuffle: true,
                backDelay: 500,
                loop: true,
                loopCount: false,
                showCursor: true,
                attr: null,
                contentType: 'html'
            });
        }

        /*TYPING FOR TEAM DESIGN TWO*/
        function initTeamTyping() {
            $('#animated-text-team').typed({
                stringsElement: $('#typed-strings-team'),
                typeSpeed: 90,
                startDelay: 0,
                backSpeed: 0,
                shuffle: true,
                backDelay: 500,
                loop: true,
                loopCount: false,
                showCursor: true,
                attr: null,
                contentType: 'html'
            });
        }


        /* ---------------------------------------------
         INITIALIZE SOCIAL CENTRE TOGGLE
         --------------------------------------------- */
        function initSocialCentreToggle() {
            $('button#side-tile,button.social-centre-launcher').on('click', function () {
                var sidePanel = '.side-panel';
                if ($(sidePanel).hasClass('hidden')) {
                    $(sidePanel).removeClass('fadeOutRightBig hidden'); //checks if it has hidden class
                } else {
                    $(sidePanel).addClass('fadeOutRightBig');     //adds fadeout to smoothly hide the div
                    setTimeout(function () {
                        $(sidePanel).addClass('hidden');  //finally adds the hidden class
                    }, 400);
                }
            });
        }


        /* ---------------------------------------------
         IMAGE AND SOLID AND GRADIENT BACKGROUND
         --------------------------------------------- */
        function initBackgroundOptions() {
            $('body,.timeline-image,.interest-image,.project-preview,.gear-preview,.whats-hot-preview,.screenshot-preview,.product-preview,.services-image,.details-image,.desktop,.swiper-slide,.about-image,.feature-image,.place-preview-image,.coming-preview,.error-preview,.clients-block,.gallery-preview,.bg-data-call').each(function () {
                if ($(this).attr('data-image-bg') && $(this).attr('data-image-overlay')) {

                    //hide in retina
                    $(this).css({
                        'background': 'linear-gradient(' + $(this).data('image-overlay') + ',' + $(this).data('image-overlay') + '), url(' + $(this).data('image-bg') + ') center center / cover no-repeat'
                    });

                    //enable for retina background images

                    // if (window.devicePixelRatio >= 2) {
                    //     //retina image
                    //     $(this).css({
                    //         'background': 'linear-gradient(' + $(this).data('image-overlay') + ',' + $(this).data('image-overlay') + '), url(' + $(this).data('image-bg').replace(/\.\w+$/, function(m) { return '@2x' + m; }) + ') center center / cover no-repeat'
                    //     });
                    // } else {
                    //    //no retina
                    //     $(this).css({
                    //         'background': 'linear-gradient(' + $(this).data('image-overlay') + ',' + $(this).data('image-overlay') + '), url(' + $(this).data('image-bg') + ') center center / cover no-repeat'
                    //     });
                    // }

                }
                if ($(this).attr('data-solid-bg')) {
                    $(this).css({
                        'background': $(this).data('solid-bg')
                    });
                }
                if ($(this).attr('data-gradient-color-one') && $(this).attr('data-gradient-color-two') && $(this).attr('data-gradient-color-three')) {
                    $(this).css({
                        'background': 'linear-gradient(220deg,' + $(this).data('gradient-color-one') + ',' + $(this).data('gradient-color-two') + ',' + $(this).data('gradient-color-three') + ')',
                        'background-size': '600% 600%',
                        '-webkit-animation': 'gradientWave 38s ease infinite',
                        'animation': 'gradientWave 38s ease infinite'
                    });
                }
            });
        }


        /* ---------------------------------------------
         CONTENT HEIGHT FOR HOME SLIDER
         --------------------------------------------- */
        function initHomeContentHeight() {
            $('#home-slider').find('.content').height($(window)[0].innerHeight);
        }

        /*INITIALIZE BEFORE SLIDER*/
        initHomeContentHeight();                                         //fix height issue in home slider


        /* ---------------------------------------------
         FULL SCREEN TOGGLE FUNCTION
         --------------------------------------------- */
        function toggleFullscreen(elem) {
            elem = elem || document.documentElement;
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                    elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        }


        /* ---------------------------------------------
         TOGGLE FULL SCREEN
         --------------------------------------------- */
        $('button.full-screen').on('click', function () {
            toggleFullscreen();
        });


        /* ---------------------------------------------
         SKILL-BAR ANIMATION FUNCTION
         --------------------------------------------- */
        function animateSkillsBar(sectionId) {
            if ($(sectionId).hasClass('hidden')) {

                $(sectionId).find('.skills-bar').css({width: 0});

                $(sectionId).find('.skills-bar').each(function () {
                    $(this).animate({
                        width: $(this).attr('data-percent')
                    }, 5000, 'swing');
                });
            }
        }


        /* ---------------------------------------------
         COUNTER ANIMATION FUNCTION
         --------------------------------------------- */
        function counterAnimation(sectionId) {
            if ($(sectionId).hasClass('hidden')) {
                $('.counter-numbers').countTo('restart');
            }
        }


        /* ---------------------------------------------
         NOTIFICATION SOUND
         --------------------------------------------- */
        var baseUrl = 'https://notificationsounds.com/message-tones/your-turn-491/download/mp3';


        /* ---------------------------------------------
         NOTIFICATION FUNCTION
         --------------------------------------------- */
        function notificationPopup(text) {
            new Audio(baseUrl).play(); //play sound
            $('<div id="quick-notification" class="notification-wrapper animated fadeOutRight delay8s"><div class="notification animated fadeInRight"><div class="icon animated rollIn"><i class="ion-android-notifications"></i></div><div class="message animated fadeInLeft delay0-4s">+html(text)+</div></div></div>').appendTo('body').find(".message").html(text).delay(8200).fadeOut(600, function () {
                $('#quick-notification').remove();
            });
        }

        /*GALLERY SLIDER*/
        var gallerySlider = new Swiper('.swiper-container-gallery', {
            pagination: '.swiper-pagination-gallery',
            a11y: true,
            observer: true,
            speed: 1000,
            freeMode: true,
            observeParents: true,
            keyboardControl: true,
            paginationClickable: true
        });

        /*EDU SLIDER*/
        var educationSlider = new Swiper('#edu-slider', {
            pagination: '.swiper-pagination-edu',
            a11y: true,
            observer: true,
            speed: 1000,
            observeParents: true,
            keyboardControl: true,
            autoHeight: true,
            paginationClickable: true
        });

        /*EXP SLIDER*/
        var experienceSlider = new Swiper('#exp-slider', {
            pagination: '.swiper-pagination-exp',
            a11y: true,
            observer: true,
            speed: 1000,
            observeParents: true,
            keyboardControl: true,
            autoHeight: true,
            paginationClickable: true
        });

        /*CLIENTS SLIDER*/
        var clientsSlider = new Swiper('#clients-slider', {
            pagination: '.swiper-pagination-clients',
            a11y: true,
            observer: true,
            speed: 1000,
            //loop: true,                               //enable to use autoplay
            //autoplay: 2500,                           //enable to use autoplay
            //autoplayDisableOnInteraction: false,      //enable to use autoplay
            observeParents: true,
            keyboardControl: true,
            autoHeight: true,
            paginationClickable: true
        });
        //clientsSlider.stopAutoplay();                 //enable to use autoplay


        /*ACHIEVEMENT SLIDER*/
        var achievementSlider = new Swiper('#achievement-slider', {
            a11y: true,
            observer: true,
            observeParents: true,
            speed: 1000,
            keyboardControl: true,
            autoHeight: true,
            paginationClickable: true
        });
        $('#ah-one').on('click', function () {
            achievementSlider.slideTo(0, 900);
        });
        $('#ah-two').on('click', function () {
            achievementSlider.slideTo(1, 900);
        });
        $('#ah-three').on('click', function () {
            achievementSlider.slideTo(2, 900);
        });
        $('#ah-four').on('click', function () {
            achievementSlider.slideTo(3, 900);
        });
        $('#ah-five').on('click', function () {
            achievementSlider.slideTo(4, 900);
        });
        $('#ah-six').on('click', function () {
            achievementSlider.slideTo(5, 900);
        });

        /*CLIENTS LOGO SLIDER*/
        function initLogoSliders() {
            var rotating = true;
            var clientSpeed = 1800;
            setInterval(rotateClients, clientSpeed);

            $(document).on({
                mouseenter: function () {
                    rotating = false;
                    // Turn off rotation when hovering
                },
                mouseleave: function () {
                    rotating = true;
                }
            }, '.clients-logos');

            function rotateClients() {
                if (rotating !== false) {
                    var $first = $('.clients-logos').find('img:first-child');
                    $first.animate({'margin-left': '-150px'}, 2000, function () {
                        $first.remove().css({'margin-left': '0px'});
                        $('.clients-logos').find('img:last').after($first);
                    });
                }
            }
        }


        /* ---------------------------------------------
         INITIALIZE POPUP
         --------------------------------------------- */


        /* ---------------------------------------------
         MAGNIFIC POPUP IMAGE
         --------------------------------------------- */
        function initPopupImage() {
            $('.popup-image').magnificPopup({
                type: 'image',
                tLoading: '',
                // retina: {
                //     ratio: 2 // can also be function that should return this number
                // },
                image: {
                    titleSrc: function (item) {
                        return item.el.attr('title') + '<small>' + item.el.attr('data-subtitle') + '</small>';
                    }
                },
                removalDelay: 500, //delay removal by X to allow out-animation
                callbacks: {
                    beforeOpen: function () {
                        // just a hack that adds mfp-anim class to markup
                        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                        this.st.mainClass = this.st.el.attr('data-effect');
                    },
                    open: function () {
                        $('.mfp-title').addClass('animated fadeInLeft delay0-5s');
                    }
                },
                closeOnContentClick: true,
                midClick: true
            });
        }


        /* ---------------------------------------------
         MAGNIFIC POPUP MODAL
         --------------------------------------------- */
        function initPopupModal() {
            $('.popup-modal').magnificPopup({
                type: 'inline',
                preloader: false,
                removalDelay: 500, //delay removal by X to allow out-animation
                callbacks: {
                    beforeOpen: function () {
                        this.st.mainClass = this.st.el.attr('data-effect');
                    }
                },
                midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
            });
        }


        /* ---------------------------------------------
         MAGNIFIC POPUP GALLERY
         --------------------------------------------- */
        function initPopupGallery() {
            $('a.gallery-link').on('click', function () {
                $(this).next().magnificPopup('open');
            });

            $('.gallery').each(function () {
                $(this).magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    tLoading: '',
                    // retina: {
                    //     ratio: 2 // can also be function that should return this number
                    // },
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true
                    },
                    image: {
                        titleSrc: function (item) {
                            return item.el.attr('title') + '<small>' + item.el.attr('data-subtitle') + '</small>';
                        }
                    },
                    fixedContentPos: false,
                    mainClass: 'mfp-zoom-in',
                    removalDelay: 160, //delay removal by X to allow out-animation
                    callbacks: {
                        open: function () {
                            //overwrite default prev + next function. Add timeout for css3 crossfade animation

                            $('.mfp-title').addClass('animated fadeInLeft delay0-5s');

                            $.magnificPopup.instance.next = function () {
                                var self = this;
                                self.wrap.removeClass('mfp-image-loaded');
                                setTimeout(function () {
                                    $.magnificPopup.proto.next.call(self);
                                }, 120);
                            }
                            $.magnificPopup.instance.prev = function () {
                                var self = this;
                                self.wrap.removeClass('mfp-image-loaded');
                                setTimeout(function () {
                                    $.magnificPopup.proto.prev.call(self);
                                }, 120);
                            }
                        },
                        imageLoadComplete: function () {
                            var self = this;
                            setTimeout(function () {
                                self.wrap.addClass('mfp-image-loaded');
                            }, 16);
                        }
                    },
                    closeOnContentClick: true,
                    midClick: true
                });
            });
        }


        /* ---------------------------------------------
         MAGNIFIC POPUP VIDEO
         --------------------------------------------- */
        function initPopupIframe() {
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-zoom-in',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }


        /* ---------------------------------------------
         INIT MAIL
         --------------------------------------------- */
        function initMail() {
            /*MAIL SCRIPT*/

            var mailForm = 'form#mail-form';
            var sendButton = '#send-button';

            $(mailForm).on('submit', function (e) {
                e.preventDefault(); //Prevents default submit
                var form = $(this);
                $(sendButton).addClass('btn-progress');
                $(sendButton).attr('disabled', 'disabled'); //Disable the submit button on click
                var post_data = form.serialize(); //Serialized the form data
                var recaptcha = $('#g-recaptcha-response').val();

                if (recaptcha === '') {
                    event.preventDefault();
                    notificationPopup('Please Submit Re-captcha');
                    $(sendButton).removeClass('btn-progress');
                    $(sendButton).removeAttr('disabled', 'disabled'); // Enable submit button
                }

                else {
                    $.ajax({
                        type: 'POST',
                        url: 'php/mail_handler.php', // Form script
                        data: post_data
                    })
                        .done(function () {
                            $(sendButton).removeClass('btn-progress');
                            notificationPopup('Message Sent. Thanks for your Message, I will contact you soon.');
                            $(mailForm)[0].reset();
                            grecaptcha.reset();
                            $(sendButton).removeAttr('disabled', 'disabled'); // Enable submit button

                        })
                        .fail(function () {
                            $(sendButton).removeClass('btn-progress').fadeIn(500);
                            notificationPopup('Sending Failed. Please Try Again');
                            $(sendButton).removeAttr('disabled', 'disabled'); // Enable submit button
                        });
                }
            });
        }


        /*----------------------------------------------
         MAILCHIMP INIT
         ----------------------------------------------*/
        var mailChimpForm = 'form#mc-form';
        var subscribeButton = '#mc-subscribe';

        function initAjaxMailChimp() {
            $(mailChimpForm).ajaxChimp({
                url: 'http://trimatrixlab.us14.list-manage.com/subscribe/post?u=1534b72985e1d9ad8605bccdb&id=750451a215',
                callback: callbackFunction
            });

            $(mailChimpForm).on('submit', function (e) {
                $(subscribeButton).addClass('btn-progress');
                $(subscribeButton).attr('disabled', 'disabled');
            });
        }

        function callbackFunction(resp) {
            var msg;
            try {
                var parts = resp.msg.split(' - ', 2);
                if (parts[1] === undefined) {
                    msg = resp.msg;
                } else {
                    var i = parseInt(parts[0], 10);
                    if (i.toString() === parts[0]) {
                        msg = parts[1];
                    } else {
                        msg = resp.msg;
                    }
                }
            }
            catch (e) {
                msg = resp.msg;
            }
            notificationPopup(msg);
            if (resp.result === 'success') {
                $(mailChimpForm)[0].reset();
                $(subscribeButton).removeClass('btn-progress');
                $(subscribeButton).removeAttr('disabled', 'disabled'); // Enable submit button
            }
            else {
                $(subscribeButton).removeClass('btn-progress');
                $(subscribeButton).removeAttr('disabled', 'disabled'); // Enable submit button
            }
        }


        /* ---------------------------------------------
         REFRESH ALL SLIDERS
         --------------------------------------------- */
        function sectionSliderRefresh() {

            /*GENERAL, RES, PHOTOGRAPHY, AGENCY, PORT, CV*/
            gallerySlider.update(true);
            clientsSlider.update(true);

            /*CV*/
            educationSlider.update(true);
            experienceSlider.update(true);


            /*CV AND PORTFOLIO*/
            achievementSlider.update(true);

        }


        /* ---------------------------------------------
         SECTION NAVIGATOR FUNCTION
         --------------------------------------------- */
        function sectionNavigator(sectionId, buttonId) {

            var btmTile = '#btm-tile';
            var btmLauncher = '#btm-launcher';
            var tileMenu = '#tile-menu';
            var launcherMenu = '#launcher-menu';
            var launchIntro = 'div#intro';
            var sectionClass = 'section.section';
            var sectionIntro = 'div.section-intro';
            var btmNavLauncher = '#btm-launcher';
            var btmNavTile = '#btm-tile';
            var sidePanel = 'div.side-panel';

            //clientsSlider.stopAutoplay();           //enable for autoplay
            $(btmTile).find('button').prop('disabled', true);
            $(btmLauncher).find('button').prop('disabled', true);

            $('[data-toggle="tooltip"]').tooltip('hide');

            $(tileMenu).addClass('fadeOut');
            $(launcherMenu).addClass('fadeOut');

            setTimeout(function () {
                $(tileMenu).addClass('hidden');
                $(launcherMenu).addClass('hidden');
            }, 900);

            if ($(sectionId).hasClass('hidden')) {
                $('.loading-center button').remove(); //remove button
                $('#' + buttonId).clone().insertAfter('.loader-content').delay(3000).queue(function () {
                    $(this).remove();
                    $(this).dequeue();
                });

                $(sidePanel).addClass('fadeOutRightBig');     //adds fadeout to smoothly hide the div
                setTimeout(function () {
                    $(sidePanel).addClass('hidden').removeClass('fadeOutRightBig');  //finally adds the hidden class
                }, 400);

                $(launchIntro).fadeIn().removeClass('fadeOut');

                setTimeout(function () {
                    $(launchIntro).addClass('fadeOut').delay(500).fadeOut();
                }, 1800);

                $(sectionIntro).addClass('slideOutUp');
                $(btmNavLauncher).addClass('slideOutDown');
                $(btmNavTile).addClass('slideOutDown');

                setTimeout(function () {
                    $(sectionClass).addClass('animated fadeOut');
                }, 700); //400

                setTimeout(function () {
                    $(sectionClass).addClass('hidden').removeClass('animated fadeOut');
                    $(sectionIntro).addClass('hidden').removeClass('slideOutUp');
                    $(btmNavLauncher).addClass('hidden').removeClass('slideOutDown');
                    $(btmNavTile).addClass('hidden').removeClass('slideOutDown');
                }, 1200);

                setTimeout(function () {
                    $(sectionId).removeClass('hidden');
                    $(sectionId).find(sectionIntro).removeClass('hidden');
                    $(btmNavLauncher).removeClass('hidden');
                    $(btmNavTile).removeClass('hidden');
                    sectionSliderRefresh();
                    if ($(sectionId).find('#map').length) {
                        initMap();
                    }
                    $(btmTile).find('button').prop('disabled', false);
                    $(btmLauncher).find('button').prop('disabled', false);
                }, 1500);
            }
            else {
                $(btmTile).find('button').prop('disabled', false);
                $(btmLauncher).find('button').prop('disabled', false);
            }
        }


        /* ---------------------------------------------
         ON WINDOW RESIZE
         --------------------------------------------- */
        $(window).on('resize', function () {
            initHomeContentHeight();
            sectionSliderRefresh();
        });


        /* ---------------------------------------------
         HIDE STUFF ON LOAD
         --------------------------------------------- */
        $('div#intro').hide();
        $('nav.nav-launcher,nav.nav-tile,#launcher-menu,#tile-menu').addClass('hidden'); //optimized
        //$('#home-slider').find('.slide-content').addClass('hidden');
        $('div[class*="-home-holder"]').addClass('hidden');


        /* ---------------------------------------------
         INITIALIZE MAP
         --------------------------------------------- */
        function initMap() {
            var myLatLng = {lat: -25.363, lng: 131.044};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: myLatLng
            });

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: 'img/svg/map-marker.svg',
                title: 'Location!'
            });
        }


        /* ---------------------------------------------
         INITIALIZE ALL NECESSARY FUNCTIONS
         --------------------------------------------- */
        /*NAV OPTIONS*/
        initTileNav();                                   //enable for tile-nav
        initLauncherNav();                               //enable for launcher-nav

        /*TYPING ANIMATION*/
        //initServiceTyping();                             //enable for service section
        initAboutMeTyping();                             //enable for about me in cv and portfolio
        //initMoreDetailsLandingTyping();                  //enable for more details in landing page
        initSingleGalleryTyping();                       //enable for single gallery
        //initResPlaceTyping();                            //enable for restaurant place
        //initComingSoonTyping();                          //enable for coming soon page
        //initTeamTyping();                                //enable for team 2

        /*SOCIAL CENTRE*/
        initSocialCentreToggle();                        //toggles social centre

        /*BACKGROUND DATA ATTRIBUTE*/
        initBackgroundOptions();                         //embeds background from data attributes


        /*LOGO SLIDER AND POPUPS*/
        initLogoSliders();                               //client logo slider roll
        initPopupImage();                                //magnific popup image
        initPopupModal();                                //magnific popup modal
        initPopupGallery();                              //magnific popup gallery
        initPopupIframe();                               //magnific popup Iframe

        /*CONTACT FORM AND MAIL-CHAMP*/
        initMail();                                      //for contact form
        //initAjaxMailChimp();                             //for subscription form

        /* ---------------------------------------------
         SECTION NAVIGATION BUTTON ACTIONS
         --------------------------------------------- */
        $('body').on('click', 'button', function () {
            var id = this.id;

            /* ---------------------------------------------
             CV NAVIGATION
             --------------------------------------------- */
            if (id == 'tile-cv-home' || id == 'launcher-cv-home' || id == 'cv-btm-nav-home' || $(this).hasClass('cv-close') || id == 'cv-btm-tile-home') {
                var cvHome = '#cv-home';
                sectionNavigator(cvHome, id);
            }

            else if (id == 'tile-cv-about' || id == 'launcher-cv-about' || id == 'cv-btm-nav-me') {
                var cvAbout = '#cv-about';
                sectionNavigator(cvAbout, id);
            }

            else if (id == 'tile-cv-skills' || id == 'launcher-cv-skills' || id == 'cv-btm-nav-skills') {
                var cvSkills = '#cv-skills';
                sectionNavigator(cvSkills, id);
                counterAnimation(cvSkills);
                animateSkillsBar(cvSkills);
            }

            else if (id == 'tile-cv-education' || id == 'launcher-cv-education' || id == 'cv-btm-nav-edu' || id == 'cv-btm-tile-edu') {
                var cvEducation = '#cv-education';
                sectionNavigator(cvEducation, id);
            }

            else if (id == 'tile-cv-experience' || id == 'launcher-cv-experience' || id == 'cv-btm-nav-exp') {
                var cvExperience = '#cv-experience';
                sectionNavigator(cvExperience, id);
            }

            else if (id == 'tile-cv-portfolios' || id == 'launcher-cv-portfolios' || id == 'cv-btm-nav-port' || id == 'cv-btm-tile-port') {
                var cvPortfolios = '#cv-portfolios';
                sectionNavigator(cvPortfolios, id);
            }

            else if (id == 'tile-cv-testimonials' || id == 'launcher-cv-testimonials' || id == 'cv-btm-tile-testi') {
                var cvTestimonials = '#cv-testimonials';
                sectionNavigator(cvTestimonials, id);
                counterAnimation(cvTestimonials);
                //clientsSlider.startAutoplay();                     //enable if use auto play
            }

            else if (id == 'tile-cv-interest' || id == 'launcher-cv-interest') {
                var cvInterest = '#cv-interest';
                sectionNavigator(cvInterest, id);
            }

            else if (id == 'tile-cv-achievements' || id == 'launcher-cv-achievements') {
                var cvAchievements = '#cv-achievements';
                sectionNavigator(cvAchievements, id);
            }

            else if (id == 'tile-cv-extra' || id == 'launcher-cv-extra') {
                var cvExtra = '#cv-extra';
                sectionNavigator(cvExtra, id);
            }

            else if (id == 'tile-cv-blog' || id == 'launcher-cv-blog' || id == 'cv-btm-nav-blog') {
                var cvBlog = '#cv-blog';
                sectionNavigator(cvBlog, id);
            }

            else if (id == 'tile-cv-map' || id == 'launcher-cv-map') {
                var cvMap = '#cv-map';
                sectionNavigator(cvMap, id);
            }

            else if (id == 'tile-cv-contact' || id == 'launcher-cv-contact' || id == 'cv-btm-nav-cont' || id == 'cv-btm-tile-contact') {
                var cvContact = '#cv-contact';
                sectionNavigator(cvContact, id);
            }

        });

        /***ON-LOAD***/
        jQuery(window).on('load', function () {

            /* ---------------------------------------------
             HIDE STUFF
             --------------------------------------------- */
            $('section.section').addClass('hidden'); //optimized


            /* ---------------------------------------------
             REMOVE PRELOADER
             --------------------------------------------- */
            $('div#pre-loader').addClass('animated fadeOut').delay(200).fadeOut();


            /* ---------------------------------------------
             SHOW HOME AND NAV
             --------------------------------------------- */
            $('section[id$="-home"],nav[class*="nav-"]').removeClass('hidden');
            //$('#home-slider').find('.slide-content').removeClass('hidden');
            $('div[class*="-home-holder"]').removeClass('hidden');


            /* ---------------------------------------------
             WELCOME MESSAGE
             --------------------------------------------- */
            setTimeout(function () {
                // notificationPopup("Hi, Welcome to My CV, There is a contact form if you want to know anything. Plus don't forget to check out my resume PDF in About. Happy Exploring :)");
            }, 6000);

        });

    });

})(jQuery);
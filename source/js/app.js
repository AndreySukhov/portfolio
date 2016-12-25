$(document).ready(function (e) {

    /**
     * заинитим графики
     */
    var donutChart = $('.js-skill-pie__graphic');

    if (donutChart.length) {
        $(".js-skill-pie__graphic").peity("donut")
    }


    /**
     * Блюр для формы
     */

    var blurForm = $('.js-form-ctn');

    if (blurForm.length) {
        $(document)
            .on('focus', '.js-focus-input', function (e) {
                var $this = $(this);

                if (!$this.parents('.js-form-ctn').hasClass('form-ctn-focused')) {
                    $this.parents('.js-form-ctn').addClass('form-ctn-focused');
                }

            })
            .on('blur', '.js-focus-input', function (e) {
                var $this = $(this);
                var form = $('.js-form-ctn');

                if ($this.parents('.js-form-ctn').hasClass('form-ctn-focused')) {
                    $this.parents('.js-form-ctn').removeClass('form-ctn-focused');
                }
            });
    }


    /**
     * Флип для авторизации
     */

    var flipCtn = $('.flip-ctn');

    if (flipCtn.length) {
        $(document).on('click', '.js-authorise-flip', function (e) {
            e.preventDefault();
            if (!$('.flip-ctn').hasClass('flipped')) {
                $('.flip-ctn').addClass('flipped');
            }
            $(this).addClass('hidden');
        });

        $(document).on('click', '.js-back-to-greet-link', function (e) {
            e.preventDefault();
            if ($('.flip-ctn').hasClass('flipped')) {
                $('.flip-ctn').removeClass('flipped');
            }
            $('.js-authorise-flip').removeClass('hidden');
        });

        $(document).on('click', function (e) {
            var registerCtn = $('.flip-ctn');

            var authorizeBtn = $('.js-authorise-flip');

            if ((!registerCtn.is(e.target) && registerCtn.has(e.target).length === 0)
                && (!authorizeBtn.is(e.target) && authorizeBtn.has(e.target).length === 0)) {
                if (registerCtn.hasClass('flipped')) {
                    registerCtn.removeClass('flipped');
                    authorizeBtn.removeClass('hidden');
                }

            }
        });

    };


    /**
     * Оверлэй для меню
     */

    $(document).on('click', '.js-burger-trigger', function(e){
        e.preventDefault();

        if (!$('body').hasClass('fixed')) {
            $('body').addClass('fixed');
        }
        else {
            $('body').removeClass('fixed');
        }

        if (!$('html').hasClass('fixed')) {
            $('html').addClass('fixed');
        }
        else {
            $('html').removeClass('fixed');
        }

        if (!$('.menu-overlay-ctn').hasClass('visible')) {
            $('.menu-overlay-ctn').addClass('visible');
        }
        else {
            $('.menu-overlay-ctn').removeClass('visible');
        }

        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).addClass('open-started');

            setTimeout(function(e){
              $('.js-burger-trigger').addClass('open-finished');
            },301)

        }
        else {
            $(this).removeClass('active');
            $(this).removeClass('open-finished');

            setTimeout(function(e){
                $('.js-burger-trigger').removeClass('open-started');
            },301)

        }
    });

    /**
     * Навигация в блоге
     */

    var blogNav = $('.js-side-nav-list');

    if (blogNav.length) {
        $(document).on('click', '.js-side-nav-list__item', function(e){
            e.preventDefault();
            var $this = $(this);
            var ctn = $('.js-side-nav-list');
            var linkToSearch = $this.data('target');
            var itemToScroll = $('.blog-main-content').find('.blog-content__item[data-item="'+linkToSearch+'"]')
            ctn.find('.side-nav-list__item--active').removeClass('side-nav-list__item--active');
            $this.addClass('side-nav-list__item--active');

            $('html, body').animate({
                scrollTop: itemToScroll.offset().top
            }, 300);

        });

        function fixBlogNav() {
            var itemToScroll = $('.js-side-nav-list');
            var elHeight = itemToScroll.outerHeight();
            var itemoffset = $('.blog-content').offset().top;
            var scroll = $(window).scrollTop();
            var textBlockHeight = $('.blog-content').outerHeight() - 150;


            if ((itemoffset + textBlockHeight) - (scroll + elHeight) > 0 ) {
                if (scroll > itemoffset ) {

                    if (!itemToScroll.hasClass('fixed')) {
                        itemToScroll.addClass('fixed');

                    }
                }
                else {
                    if (itemToScroll.hasClass('fixed')) {
                        itemToScroll.removeClass('fixed');
                    }
                }

                if (itemToScroll.hasClass('bottom-fixed')) {
                    itemToScroll.removeClass('bottom-fixed')
                }

            }

            else {

                if (itemToScroll.hasClass('fixed')) {
                    itemToScroll.removeClass('fixed')
                }

                if (!itemToScroll.hasClass('bottom-fixed')) {
                    itemToScroll.addClass('bottom-fixed');

                }

            }

        }

        fixBlogNav();

        $(window).on('scroll', function(e){
            fixBlogNav();
        })

    }

    /**
    *  скроллим к верху страницы
    * */

    $(document).on('click', '.contacts-arrow', function(e){
        e.preventDefault();
        $('.parallax').scrollTop(0);
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });


    /**
     * Слайдер
     */

    var slider = $('.slider-ctn');

    if (slider.length) {
        var textCtn = $('.work-example-description');
        var mainCtn = $('.current-work-holder');


        $(document).on('click', '.work-toggle-btn--prev', function(e){
            e.preventDefault();

            var $this = $(this);

            var currentItem = parseInt(mainCtn.find('.current-work--active').data('item'), 10);
            var itemToSearch = parseInt(currentItem, 10) - 1;
            var prevItem = parseInt(itemToSearch, 10) - 1;
            var nextItem =  parseInt(currentItem, 10) + 1;
            var nextCtn = $('.work-toggle-btn--next');
            var lastItem = (parseInt($this.parents('.works-toggle-ctn-item').find('.work-img-holder:last-of-type').data('item'),10));


            var minItem = 1;

            if (currentItem > minItem) {
                textCtn.find('.work-example-description__item--active').removeClass('work-example-description__item--active');
                textCtn.find('.work-example-description__item[data-item="'+itemToSearch+'"]').addClass('work-example-description__item--active');

                mainCtn.find('.current-work--active').removeClass('current-work--active');
                mainCtn.find('.current-work[data-item="'+itemToSearch+'"]').addClass('current-work--active');

            }


            if (minItem === (itemToSearch  )) {
                $this.addClass('locked');
                $this.find('.work-arrow-ctn').fadeOut('300');


            }

            if (nextCtn.hasClass('locked')) {
                nextCtn.addClass('locked');
                nextCtn.find('.work-arrow-ctn').fadeIn('300');
            }

            $('.current-work--active').fadeTo(100, 0.2).delay(100).fadeTo(600, 1);

            setTimeout(function(e){
                var currentItem = parseInt($('.current-work-holder').find('.current-work--active').data('item'), 10);
                var prev = (parseInt(currentItem, 10) - 1 );
                var next = (parseInt(currentItem, 10) + 1 );
                var nextCtn = $('.work-img-holder-ctn--next');
                var prevCtn = $('.work-img-holder-ctn--prev');
                var lastItem = (parseInt($('.current-work-holder').find('.current-work:last-of-type').data('item'),10));


                if (currentItem > 1) {
                    prevCtn.find('.work-img-holder--current').removeClass('work-img-holder--current');
                    prevCtn.find('.work-img-holder[data-item="'+prev+'"]').addClass('work-img-holder--current');
                }


                if (currentItem === 1) {
                    prevCtn.find('.work-img-holder--current').removeClass('work-img-holder--current');
                    prevCtn.find('.work-img-holder[data-item="1"]').addClass('work-img-holder--current');
                }

                if (currentItem < lastItem) {
                    nextCtn.find('.work-img-holder--current').removeClass('work-img-holder--current');
                    nextCtn.find('.work-img-holder[data-item="'+next+'"]').addClass('work-img-holder--current');
                }

                if (currentItem === lastItem) {
                    nextCtn.find('.work-img-holder--current').removeClass('work-img-holder--current');
                    nextCtn.find('.work-img-holder[data-item="'+lastItem+'"]').addClass('work-img-holder--current');
                }

            },10);

        });


        $(document).on('click', '.work-toggle-btn--next', function(e){
            e.preventDefault();
            var $this = $(this);
            var currentItem = mainCtn.find('.current-work--active').data('item');
            var prevCtn = $('.work-toggle-btn--prev');
            var prev = parseInt(currentItem, 10) - 1;
            var itemToSearch = (parseInt(currentItem, 10) + 1);
            var nextItemToSearch = (parseInt(itemToSearch, 10) + 1);

            var lastItem = (parseInt($this.parents('.works-toggle-ctn-item').find('.work-img-holder:last-of-type').data('item'),10));


            if (lastItem > currentItem) {
                textCtn.find('.work-example-description__item--active').removeClass('work-example-description__item--active');
                textCtn.find('.work-example-description__item[data-item="'+itemToSearch+'"]').addClass('work-example-description__item--active');

                mainCtn.find('.current-work--active').removeClass('current-work--active');
                mainCtn.find('.current-work[data-item="'+itemToSearch+'"]').addClass('current-work--active');

            }


            if (lastItem === (itemToSearch  )) {
                $this.addClass('locked');
                $this.find('.work-arrow-ctn').fadeOut('300');
            }

            if (prevCtn.hasClass('locked')) {
                prevCtn.addClass('locked');
                prevCtn.find('.work-arrow-ctn').fadeIn('300');
            }

            $('.current-work--active').fadeTo(100, 0.2).delay(100).fadeTo(600, 1);

            setTimeout(function(e){
                var currentItem = parseInt($('.current-work-holder').find('.current-work--active').data('item'), 10);
                var prev = (parseInt(currentItem, 10) - 1);
                var next = (parseInt(currentItem, 10) + 1);
                var nextCtn = $('.work-img-holder-ctn--next');
                var prevCtn = $('.work-img-holder-ctn--prev');
                var lastItem = parseInt($('.current-work-holder').find('.current-work:last-of-type').data('item'),10);

                if (currentItem > 1) {
                    prevCtn.find('.work-img-holder--current').removeClass('work-img-holder--current');
                    prevCtn.find('.work-img-holder[data-item="'+prev+'"]').addClass('work-img-holder--current');
                }
                if (currentItem === 1) {
                    prevCtn.find('.work-img-holder--current').removeClass('work-img-holder--current');
                    prevCtn.find('.work-img-holder[data-item="1"]').addClass('work-img-holder--current');
                }


                if (currentItem < lastItem) {
                    nextCtn.find('.work-img-holder--current').removeClass('work-img-holder--current');
                    nextCtn.find('.work-img-holder[data-item="' + next + '"]').addClass('work-img-holder--current');
                }
                if (currentItem === lastItem) {
                    nextCtn.find('.work-img-holder--current').removeClass('work-img-holder--current');
                    nextCtn.find('.work-img-holder[data-item="'+lastItem+'"]').addClass('work-img-holder--current');
                }
            },10);


        });


        /**
         * Отправляем форму
         */

        $(document).on('submit','#js-contacts-form',function(e){
            var $this = $(this);
            e.preventDefault();
            var data = $('#js-contacts-form').serialize();

            $.ajax({
                type: 'POST',
                data: data
            }).success(function(){
                $('#js-contacts-form').find('.form-result-text').text('Сообщение отправлено');
            }).error(function(){
                $('#js-contacts-form').find('.form-result-text').text('Произошла ошибка');
            });

        });


    };



    /**
     Прелоадер
     */

    function preload(){
        var increase = true;
        var value = 0;
        var increment = 1;
        var top = 100;

        $('body').addClass('fixed');
        $('html').addClass('fixed');

        function PerformCalc()
        {
            if (increase == true && value <= top)
            {
                value += increment
                $('.preload-circle').css({'opacity':value/100});

                if (value == top) {
                    increase = false;
                    $('body').removeClass('fixed');
                    $('html').removeClass('fixed');
                    $('.preload-overlay-ctn').fadeOut(300);

                    setTimeout(function(e){
                        $('.preload-overlay-ctn').remove();
                    },310)

                }
            }


            $('.preloader-text').text(value);
        }
        setInterval(PerformCalc, 15);
    }

    if ($('.preload-overlay-ctn').length){
        preload();
    }


    /**
     * Карта
     */


    if ($('#js-map').length) {


        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

            var centerLat;

            var centerLng;

            if ($(window).width() > 1024) {
                centerLat = 55.821965;
                centerLng = 37.583834;
            }
            else if ($(window).width() <= 1024 && $(window).width() > 767) {
                centerLat = 55.822062;
                centerLng = 37.589504;
            }
            else {
                centerLat = 55.825894;
                centerLng = 37.595139;
            }


            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 16,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(centerLat, centerLng),
                scrollwheel: false,
                zoomControl: true,
                streetViewControl: false,

                // How you would like to style the map.
                // This is where you would paste any style found on Snazzy Maps.
                styles: [
                    {
                        "featureType": "all",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "weight": "2.00"
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#9c9c9c"
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#7b7b7b"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#243994"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#243994"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#070707"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    }
                ]
            };

            // Get the HTML DOM element that will contain your map
            // We are using a div with id="map" seen below in the <body>


            var mapElement = document.getElementById('js-map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);
            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(55.825894, 37.595139),
                map: map,
                icon: 'assets/img/marker.svg'   });
        }
    }


});



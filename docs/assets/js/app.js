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



//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKGUpIHtcblxuICAgIC8qKlxuICAgICAqINC30LDQuNC90LjRgtC40Lwg0LPRgNCw0YTQuNC60LhcbiAgICAgKi9cbiAgICB2YXIgZG9udXRDaGFydCA9ICQoJy5qcy1za2lsbC1waWVfX2dyYXBoaWMnKTtcblxuICAgIGlmIChkb251dENoYXJ0Lmxlbmd0aCkge1xuICAgICAgICAkKFwiLmpzLXNraWxsLXBpZV9fZ3JhcGhpY1wiKS5wZWl0eShcImRvbnV0XCIpXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQkdC70Y7RgCDQtNC70Y8g0YTQvtGA0LzRi1xuICAgICAqL1xuXG4gICAgdmFyIGJsdXJGb3JtID0gJCgnLmpzLWZvcm0tY3RuJyk7XG5cbiAgICBpZiAoYmx1ckZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICQoZG9jdW1lbnQpXG4gICAgICAgICAgICAub24oJ2ZvY3VzJywgJy5qcy1mb2N1cy1pbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIGlmICghJHRoaXMucGFyZW50cygnLmpzLWZvcm0tY3RuJykuaGFzQ2xhc3MoJ2Zvcm0tY3RuLWZvY3VzZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5wYXJlbnRzKCcuanMtZm9ybS1jdG4nKS5hZGRDbGFzcygnZm9ybS1jdG4tZm9jdXNlZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignYmx1cicsICcuanMtZm9jdXMtaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm0gPSAkKCcuanMtZm9ybS1jdG4nKTtcblxuICAgICAgICAgICAgICAgIGlmICgkdGhpcy5wYXJlbnRzKCcuanMtZm9ybS1jdG4nKS5oYXNDbGFzcygnZm9ybS1jdG4tZm9jdXNlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnBhcmVudHMoJy5qcy1mb3JtLWN0bicpLnJlbW92ZUNsYXNzKCdmb3JtLWN0bi1mb2N1c2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQpNC70LjQvyDQtNC70Y8g0LDQstGC0L7RgNC40LfQsNGG0LjQuFxuICAgICAqL1xuXG4gICAgdmFyIGZsaXBDdG4gPSAkKCcuZmxpcC1jdG4nKTtcblxuICAgIGlmIChmbGlwQ3RuLmxlbmd0aCkge1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzLWF1dGhvcmlzZS1mbGlwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICghJCgnLmZsaXAtY3RuJykuaGFzQ2xhc3MoJ2ZsaXBwZWQnKSkge1xuICAgICAgICAgICAgICAgICQoJy5mbGlwLWN0bicpLmFkZENsYXNzKCdmbGlwcGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5qcy1iYWNrLXRvLWdyZWV0LWxpbmsnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKCQoJy5mbGlwLWN0bicpLmhhc0NsYXNzKCdmbGlwcGVkJykpIHtcbiAgICAgICAgICAgICAgICAkKCcuZmxpcC1jdG4nKS5yZW1vdmVDbGFzcygnZmxpcHBlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnLmpzLWF1dGhvcmlzZS1mbGlwJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHJlZ2lzdGVyQ3RuID0gJCgnLmZsaXAtY3RuJyk7XG5cbiAgICAgICAgICAgIHZhciBhdXRob3JpemVCdG4gPSAkKCcuanMtYXV0aG9yaXNlLWZsaXAnKTtcblxuICAgICAgICAgICAgaWYgKCghcmVnaXN0ZXJDdG4uaXMoZS50YXJnZXQpICYmIHJlZ2lzdGVyQ3RuLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICYmICghYXV0aG9yaXplQnRuLmlzKGUudGFyZ2V0KSAmJiBhdXRob3JpemVCdG4uaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlZ2lzdGVyQ3RuLmhhc0NsYXNzKCdmbGlwcGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJDdG4ucmVtb3ZlQ2xhc3MoJ2ZsaXBwZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXplQnRuLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiDQntCy0LXRgNC70Y3QuSDQtNC70Y8g0LzQtdC90Y5cbiAgICAgKi9cblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuanMtYnVyZ2VyLXRyaWdnZXInLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghJCgnYm9keScpLmhhc0NsYXNzKCdmaXhlZCcpKSB7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISQoJ2h0bWwnKS5oYXNDbGFzcygnZml4ZWQnKSkge1xuICAgICAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEkKCcubWVudS1vdmVybGF5LWN0bicpLmhhc0NsYXNzKCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICQoJy5tZW51LW92ZXJsYXktY3RuJykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICQoJy5tZW51LW92ZXJsYXktY3RuJykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb3Blbi1zdGFydGVkJyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICQoJy5qcy1idXJnZXItdHJpZ2dlcicpLmFkZENsYXNzKCdvcGVuLWZpbmlzaGVkJyk7XG4gICAgICAgICAgICB9LDMwMSlcblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvcGVuLWZpbmlzaGVkJyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgJCgnLmpzLWJ1cmdlci10cmlnZ2VyJykucmVtb3ZlQ2xhc3MoJ29wZW4tc3RhcnRlZCcpO1xuICAgICAgICAgICAgfSwzMDEpXG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICog0J3QsNCy0LjQs9Cw0YbQuNGPINCyINCx0LvQvtCz0LVcbiAgICAgKi9cblxuICAgIHZhciBibG9nTmF2ID0gJCgnLmpzLXNpZGUtbmF2LWxpc3QnKTtcblxuICAgIGlmIChibG9nTmF2Lmxlbmd0aCkge1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzLXNpZGUtbmF2LWxpc3RfX2l0ZW0nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgY3RuID0gJCgnLmpzLXNpZGUtbmF2LWxpc3QnKTtcbiAgICAgICAgICAgIHZhciBsaW5rVG9TZWFyY2ggPSAkdGhpcy5kYXRhKCd0YXJnZXQnKTtcbiAgICAgICAgICAgIHZhciBpdGVtVG9TY3JvbGwgPSAkKCcuYmxvZy1tYWluLWNvbnRlbnQnKS5maW5kKCcuYmxvZy1jb250ZW50X19pdGVtW2RhdGEtaXRlbT1cIicrbGlua1RvU2VhcmNoKydcIl0nKVxuICAgICAgICAgICAgY3RuLmZpbmQoJy5zaWRlLW5hdi1saXN0X19pdGVtLS1hY3RpdmUnKS5yZW1vdmVDbGFzcygnc2lkZS1uYXYtbGlzdF9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnc2lkZS1uYXYtbGlzdF9faXRlbS0tYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGl0ZW1Ub1Njcm9sbC5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gZml4QmxvZ05hdigpIHtcbiAgICAgICAgICAgIHZhciBpdGVtVG9TY3JvbGwgPSAkKCcuanMtc2lkZS1uYXYtbGlzdCcpO1xuICAgICAgICAgICAgdmFyIGVsSGVpZ2h0ID0gaXRlbVRvU2Nyb2xsLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgaXRlbW9mZnNldCA9ICQoJy5ibG9nLWNvbnRlbnQnKS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgdmFyIHRleHRCbG9ja0hlaWdodCA9ICQoJy5ibG9nLWNvbnRlbnQnKS5vdXRlckhlaWdodCgpIC0gMTUwO1xuXG5cbiAgICAgICAgICAgIGlmICgoaXRlbW9mZnNldCArIHRleHRCbG9ja0hlaWdodCkgLSAoc2Nyb2xsICsgZWxIZWlnaHQpID4gMCApIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaXRlbW9mZnNldCApIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW1Ub1Njcm9sbC5oYXNDbGFzcygnZml4ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRvU2Nyb2xsLmFkZENsYXNzKCdmaXhlZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtVG9TY3JvbGwuaGFzQ2xhc3MoJ2ZpeGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Ub1Njcm9sbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpdGVtVG9TY3JvbGwuaGFzQ2xhc3MoJ2JvdHRvbS1maXhlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Ub1Njcm9sbC5yZW1vdmVDbGFzcygnYm90dG9tLWZpeGVkJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbVRvU2Nyb2xsLmhhc0NsYXNzKCdmaXhlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Ub1Njcm9sbC5yZW1vdmVDbGFzcygnZml4ZWQnKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghaXRlbVRvU2Nyb2xsLmhhc0NsYXNzKCdib3R0b20tZml4ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtVG9TY3JvbGwuYWRkQ2xhc3MoJ2JvdHRvbS1maXhlZCcpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZpeEJsb2dOYXYoKTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZml4QmxvZ05hdigpO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiAg0YHQutGA0L7Qu9C70LjQvCDQuiDQstC10YDRhdGDINGB0YLRgNCw0L3QuNGG0YtcbiAgICAqICovXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNvbnRhY3RzLWFycm93JywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLnBhcmFsbGF4Jykuc2Nyb2xsVG9wKDApO1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9KTtcblxuXG4gICAgLyoqXG4gICAgICog0KHQu9Cw0LnQtNC10YBcbiAgICAgKi9cblxuICAgIHZhciBzbGlkZXIgPSAkKCcuc2xpZGVyLWN0bicpO1xuXG4gICAgaWYgKHNsaWRlci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHRleHRDdG4gPSAkKCcud29yay1leGFtcGxlLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHZhciBtYWluQ3RuID0gJCgnLmN1cnJlbnQtd29yay1ob2xkZXInKTtcblxuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcud29yay10b2dnbGUtYnRuLS1wcmV2JywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIHZhciBjdXJyZW50SXRlbSA9IHBhcnNlSW50KG1haW5DdG4uZmluZCgnLmN1cnJlbnQtd29yay0tYWN0aXZlJykuZGF0YSgnaXRlbScpLCAxMCk7XG4gICAgICAgICAgICB2YXIgaXRlbVRvU2VhcmNoID0gcGFyc2VJbnQoY3VycmVudEl0ZW0sIDEwKSAtIDE7XG4gICAgICAgICAgICB2YXIgcHJldkl0ZW0gPSBwYXJzZUludChpdGVtVG9TZWFyY2gsIDEwKSAtIDE7XG4gICAgICAgICAgICB2YXIgbmV4dEl0ZW0gPSAgcGFyc2VJbnQoY3VycmVudEl0ZW0sIDEwKSArIDE7XG4gICAgICAgICAgICB2YXIgbmV4dEN0biA9ICQoJy53b3JrLXRvZ2dsZS1idG4tLW5leHQnKTtcbiAgICAgICAgICAgIHZhciBsYXN0SXRlbSA9IChwYXJzZUludCgkdGhpcy5wYXJlbnRzKCcud29ya3MtdG9nZ2xlLWN0bi1pdGVtJykuZmluZCgnLndvcmstaW1nLWhvbGRlcjpsYXN0LW9mLXR5cGUnKS5kYXRhKCdpdGVtJyksMTApKTtcblxuXG4gICAgICAgICAgICB2YXIgbWluSXRlbSA9IDE7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbSA+IG1pbkl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0ZXh0Q3RuLmZpbmQoJy53b3JrLWV4YW1wbGUtZGVzY3JpcHRpb25fX2l0ZW0tLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCd3b3JrLWV4YW1wbGUtZGVzY3JpcHRpb25fX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRleHRDdG4uZmluZCgnLndvcmstZXhhbXBsZS1kZXNjcmlwdGlvbl9faXRlbVtkYXRhLWl0ZW09XCInK2l0ZW1Ub1NlYXJjaCsnXCJdJykuYWRkQ2xhc3MoJ3dvcmstZXhhbXBsZS1kZXNjcmlwdGlvbl9faXRlbS0tYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBtYWluQ3RuLmZpbmQoJy5jdXJyZW50LXdvcmstLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdjdXJyZW50LXdvcmstLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIG1haW5DdG4uZmluZCgnLmN1cnJlbnQtd29ya1tkYXRhLWl0ZW09XCInK2l0ZW1Ub1NlYXJjaCsnXCJdJykuYWRkQ2xhc3MoJ2N1cnJlbnQtd29yay0tYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZiAobWluSXRlbSA9PT0gKGl0ZW1Ub1NlYXJjaCAgKSkge1xuICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdsb2NrZWQnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCcud29yay1hcnJvdy1jdG4nKS5mYWRlT3V0KCczMDAnKTtcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXh0Q3RuLmhhc0NsYXNzKCdsb2NrZWQnKSkge1xuICAgICAgICAgICAgICAgIG5leHRDdG4uYWRkQ2xhc3MoJ2xvY2tlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDdG4uZmluZCgnLndvcmstYXJyb3ctY3RuJykuZmFkZUluKCczMDAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLmN1cnJlbnQtd29yay0tYWN0aXZlJykuZmFkZVRvKDEwMCwgMC4yKS5kZWxheSgxMDApLmZhZGVUbyg2MDAsIDEpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SXRlbSA9IHBhcnNlSW50KCQoJy5jdXJyZW50LXdvcmstaG9sZGVyJykuZmluZCgnLmN1cnJlbnQtd29yay0tYWN0aXZlJykuZGF0YSgnaXRlbScpLCAxMCk7XG4gICAgICAgICAgICAgICAgdmFyIHByZXYgPSAocGFyc2VJbnQoY3VycmVudEl0ZW0sIDEwKSAtIDEgKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IChwYXJzZUludChjdXJyZW50SXRlbSwgMTApICsgMSApO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0Q3RuID0gJCgnLndvcmstaW1nLWhvbGRlci1jdG4tLW5leHQnKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJldkN0biA9ICQoJy53b3JrLWltZy1ob2xkZXItY3RuLS1wcmV2Jyk7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RJdGVtID0gKHBhcnNlSW50KCQoJy5jdXJyZW50LXdvcmstaG9sZGVyJykuZmluZCgnLmN1cnJlbnQtd29yazpsYXN0LW9mLXR5cGUnKS5kYXRhKCdpdGVtJyksMTApKTtcblxuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2Q3RuLmZpbmQoJy53b3JrLWltZy1ob2xkZXItLWN1cnJlbnQnKS5yZW1vdmVDbGFzcygnd29yay1pbWctaG9sZGVyLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZDdG4uZmluZCgnLndvcmstaW1nLWhvbGRlcltkYXRhLWl0ZW09XCInK3ByZXYrJ1wiXScpLmFkZENsYXNzKCd3b3JrLWltZy1ob2xkZXItLWN1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2Q3RuLmZpbmQoJy53b3JrLWltZy1ob2xkZXItLWN1cnJlbnQnKS5yZW1vdmVDbGFzcygnd29yay1pbWctaG9sZGVyLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZDdG4uZmluZCgnLndvcmstaW1nLWhvbGRlcltkYXRhLWl0ZW09XCIxXCJdJykuYWRkQ2xhc3MoJ3dvcmstaW1nLWhvbGRlci0tY3VycmVudCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbSA8IGxhc3RJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRDdG4uZmluZCgnLndvcmstaW1nLWhvbGRlci0tY3VycmVudCcpLnJlbW92ZUNsYXNzKCd3b3JrLWltZy1ob2xkZXItLWN1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEN0bi5maW5kKCcud29yay1pbWctaG9sZGVyW2RhdGEtaXRlbT1cIicrbmV4dCsnXCJdJykuYWRkQ2xhc3MoJ3dvcmstaW1nLWhvbGRlci0tY3VycmVudCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbSA9PT0gbGFzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEN0bi5maW5kKCcud29yay1pbWctaG9sZGVyLS1jdXJyZW50JykucmVtb3ZlQ2xhc3MoJ3dvcmstaW1nLWhvbGRlci0tY3VycmVudCcpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0Q3RuLmZpbmQoJy53b3JrLWltZy1ob2xkZXJbZGF0YS1pdGVtPVwiJytsYXN0SXRlbSsnXCJdJykuYWRkQ2xhc3MoJ3dvcmstaW1nLWhvbGRlci0tY3VycmVudCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwxMCk7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLndvcmstdG9nZ2xlLWJ0bi0tbmV4dCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50SXRlbSA9IG1haW5DdG4uZmluZCgnLmN1cnJlbnQtd29yay0tYWN0aXZlJykuZGF0YSgnaXRlbScpO1xuICAgICAgICAgICAgdmFyIHByZXZDdG4gPSAkKCcud29yay10b2dnbGUtYnRuLS1wcmV2Jyk7XG4gICAgICAgICAgICB2YXIgcHJldiA9IHBhcnNlSW50KGN1cnJlbnRJdGVtLCAxMCkgLSAxO1xuICAgICAgICAgICAgdmFyIGl0ZW1Ub1NlYXJjaCA9IChwYXJzZUludChjdXJyZW50SXRlbSwgMTApICsgMSk7XG4gICAgICAgICAgICB2YXIgbmV4dEl0ZW1Ub1NlYXJjaCA9IChwYXJzZUludChpdGVtVG9TZWFyY2gsIDEwKSArIDEpO1xuXG4gICAgICAgICAgICB2YXIgbGFzdEl0ZW0gPSAocGFyc2VJbnQoJHRoaXMucGFyZW50cygnLndvcmtzLXRvZ2dsZS1jdG4taXRlbScpLmZpbmQoJy53b3JrLWltZy1ob2xkZXI6bGFzdC1vZi10eXBlJykuZGF0YSgnaXRlbScpLDEwKSk7XG5cblxuICAgICAgICAgICAgaWYgKGxhc3RJdGVtID4gY3VycmVudEl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0ZXh0Q3RuLmZpbmQoJy53b3JrLWV4YW1wbGUtZGVzY3JpcHRpb25fX2l0ZW0tLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCd3b3JrLWV4YW1wbGUtZGVzY3JpcHRpb25fX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRleHRDdG4uZmluZCgnLndvcmstZXhhbXBsZS1kZXNjcmlwdGlvbl9faXRlbVtkYXRhLWl0ZW09XCInK2l0ZW1Ub1NlYXJjaCsnXCJdJykuYWRkQ2xhc3MoJ3dvcmstZXhhbXBsZS1kZXNjcmlwdGlvbl9faXRlbS0tYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBtYWluQ3RuLmZpbmQoJy5jdXJyZW50LXdvcmstLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdjdXJyZW50LXdvcmstLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIG1haW5DdG4uZmluZCgnLmN1cnJlbnQtd29ya1tkYXRhLWl0ZW09XCInK2l0ZW1Ub1NlYXJjaCsnXCJdJykuYWRkQ2xhc3MoJ2N1cnJlbnQtd29yay0tYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZiAobGFzdEl0ZW0gPT09IChpdGVtVG9TZWFyY2ggICkpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnbG9ja2VkJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnLndvcmstYXJyb3ctY3RuJykuZmFkZU91dCgnMzAwJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcmV2Q3RuLmhhc0NsYXNzKCdsb2NrZWQnKSkge1xuICAgICAgICAgICAgICAgIHByZXZDdG4uYWRkQ2xhc3MoJ2xvY2tlZCcpO1xuICAgICAgICAgICAgICAgIHByZXZDdG4uZmluZCgnLndvcmstYXJyb3ctY3RuJykuZmFkZUluKCczMDAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLmN1cnJlbnQtd29yay0tYWN0aXZlJykuZmFkZVRvKDEwMCwgMC4yKS5kZWxheSgxMDApLmZhZGVUbyg2MDAsIDEpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SXRlbSA9IHBhcnNlSW50KCQoJy5jdXJyZW50LXdvcmstaG9sZGVyJykuZmluZCgnLmN1cnJlbnQtd29yay0tYWN0aXZlJykuZGF0YSgnaXRlbScpLCAxMCk7XG4gICAgICAgICAgICAgICAgdmFyIHByZXYgPSAocGFyc2VJbnQoY3VycmVudEl0ZW0sIDEwKSAtIDEpO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gKHBhcnNlSW50KGN1cnJlbnRJdGVtLCAxMCkgKyAxKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dEN0biA9ICQoJy53b3JrLWltZy1ob2xkZXItY3RuLS1uZXh0Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZDdG4gPSAkKCcud29yay1pbWctaG9sZGVyLWN0bi0tcHJldicpO1xuICAgICAgICAgICAgICAgIHZhciBsYXN0SXRlbSA9IHBhcnNlSW50KCQoJy5jdXJyZW50LXdvcmstaG9sZGVyJykuZmluZCgnLmN1cnJlbnQtd29yazpsYXN0LW9mLXR5cGUnKS5kYXRhKCdpdGVtJyksMTApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2Q3RuLmZpbmQoJy53b3JrLWltZy1ob2xkZXItLWN1cnJlbnQnKS5yZW1vdmVDbGFzcygnd29yay1pbWctaG9sZGVyLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZDdG4uZmluZCgnLndvcmstaW1nLWhvbGRlcltkYXRhLWl0ZW09XCInK3ByZXYrJ1wiXScpLmFkZENsYXNzKCd3b3JrLWltZy1ob2xkZXItLWN1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZDdG4uZmluZCgnLndvcmstaW1nLWhvbGRlci0tY3VycmVudCcpLnJlbW92ZUNsYXNzKCd3b3JrLWltZy1ob2xkZXItLWN1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldkN0bi5maW5kKCcud29yay1pbWctaG9sZGVyW2RhdGEtaXRlbT1cIjFcIl0nKS5hZGRDbGFzcygnd29yay1pbWctaG9sZGVyLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZW0gPCBsYXN0SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0Q3RuLmZpbmQoJy53b3JrLWltZy1ob2xkZXItLWN1cnJlbnQnKS5yZW1vdmVDbGFzcygnd29yay1pbWctaG9sZGVyLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIG5leHRDdG4uZmluZCgnLndvcmstaW1nLWhvbGRlcltkYXRhLWl0ZW09XCInICsgbmV4dCArICdcIl0nKS5hZGRDbGFzcygnd29yay1pbWctaG9sZGVyLS1jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbSA9PT0gbGFzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEN0bi5maW5kKCcud29yay1pbWctaG9sZGVyLS1jdXJyZW50JykucmVtb3ZlQ2xhc3MoJ3dvcmstaW1nLWhvbGRlci0tY3VycmVudCcpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0Q3RuLmZpbmQoJy53b3JrLWltZy1ob2xkZXJbZGF0YS1pdGVtPVwiJytsYXN0SXRlbSsnXCJdJykuYWRkQ2xhc3MoJ3dvcmstaW1nLWhvbGRlci0tY3VycmVudCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sMTApO1xuXG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICog0J7RgtC/0YDQsNCy0LvRj9C10Lwg0YTQvtGA0LzRg1xuICAgICAgICAgKi9cblxuICAgICAgICAkKGRvY3VtZW50KS5vbignc3VibWl0JywnI2pzLWNvbnRhY3RzLWZvcm0nLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gJCgnI2pzLWNvbnRhY3RzLWZvcm0nKS5zZXJpYWxpemUoKTtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgfSkuc3VjY2VzcyhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICQoJyNqcy1jb250YWN0cy1mb3JtJykuZmluZCgnLmZvcm0tcmVzdWx0LXRleHQnKS50ZXh0KCfQodC+0L7QsdGJ0LXQvdC40LUg0L7RgtC/0YDQsNCy0LvQtdC90L4nKTtcbiAgICAgICAgICAgIH0pLmVycm9yKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJCgnI2pzLWNvbnRhY3RzLWZvcm0nKS5maW5kKCcuZm9ybS1yZXN1bHQtdGV4dCcpLnRleHQoJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICB9O1xuXG5cblxuICAgIC8qKlxuICAgICDQn9GA0LXQu9C+0LDQtNC10YBcbiAgICAgKi9cblxuICAgIGZ1bmN0aW9uIHByZWxvYWQoKXtcbiAgICAgICAgdmFyIGluY3JlYXNlID0gdHJ1ZTtcbiAgICAgICAgdmFyIHZhbHVlID0gMDtcbiAgICAgICAgdmFyIGluY3JlbWVudCA9IDE7XG4gICAgICAgIHZhciB0b3AgPSAxMDA7XG5cbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gUGVyZm9ybUNhbGMoKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoaW5jcmVhc2UgPT0gdHJ1ZSAmJiB2YWx1ZSA8PSB0b3ApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gaW5jcmVtZW50XG4gICAgICAgICAgICAgICAgJCgnLnByZWxvYWQtY2lyY2xlJykuY3NzKHsnb3BhY2l0eSc6dmFsdWUvMTAwfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gdG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGluY3JlYXNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgICAgICAkKCcucHJlbG9hZC1vdmVybGF5LWN0bicpLmZhZGVPdXQoMzAwKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnByZWxvYWQtb3ZlcmxheS1jdG4nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwzMTApXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgJCgnLnByZWxvYWRlci10ZXh0JykudGV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SW50ZXJ2YWwoUGVyZm9ybUNhbGMsIDE1KTtcbiAgICB9XG5cbiAgICBpZiAoJCgnLnByZWxvYWQtb3ZlcmxheS1jdG4nKS5sZW5ndGgpe1xuICAgICAgICBwcmVsb2FkKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDQmtCw0YDRgtCwXG4gICAgICovXG5cblxuICAgIGlmICgkKCcjanMtbWFwJykubGVuZ3RoKSB7XG5cblxuICAgICAgICAvLyBXaGVuIHRoZSB3aW5kb3cgaGFzIGZpbmlzaGVkIGxvYWRpbmcgY3JlYXRlIG91ciBnb29nbGUgbWFwIGJlbG93XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBpbml0KTtcblxuICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICAgICAgLy8gQmFzaWMgb3B0aW9ucyBmb3IgYSBzaW1wbGUgR29vZ2xlIE1hcFxuICAgICAgICAgICAgLy8gRm9yIG1vcmUgb3B0aW9ucyBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBPcHRpb25zXG5cbiAgICAgICAgICAgIHZhciBjZW50ZXJMYXQ7XG5cbiAgICAgICAgICAgIHZhciBjZW50ZXJMbmc7XG5cbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDEwMjQpIHtcbiAgICAgICAgICAgICAgICBjZW50ZXJMYXQgPSA1NS44MjE5NjU7XG4gICAgICAgICAgICAgICAgY2VudGVyTG5nID0gMzcuNTgzODM0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDc2Nykge1xuICAgICAgICAgICAgICAgIGNlbnRlckxhdCA9IDU1LjgyMjA2MjtcbiAgICAgICAgICAgICAgICBjZW50ZXJMbmcgPSAzNy41ODk1MDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZW50ZXJMYXQgPSA1NS44MjU4OTQ7XG4gICAgICAgICAgICAgICAgY2VudGVyTG5nID0gMzcuNTk1MTM5O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHZhciBtYXBPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIC8vIEhvdyB6b29tZWQgaW4geW91IHdhbnQgdGhlIG1hcCB0byBzdGFydCBhdCAoYWx3YXlzIHJlcXVpcmVkKVxuICAgICAgICAgICAgICAgIHpvb206IDE2LFxuXG4gICAgICAgICAgICAgICAgLy8gVGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgdG8gY2VudGVyIHRoZSBtYXAgKGFsd2F5cyByZXF1aXJlZClcbiAgICAgICAgICAgICAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoY2VudGVyTGF0LCBjZW50ZXJMbmcpLFxuICAgICAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB6b29tQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICAvLyBIb3cgeW91IHdvdWxkIGxpa2UgdG8gc3R5bGUgdGhlIG1hcC5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHdoZXJlIHlvdSB3b3VsZCBwYXN0ZSBhbnkgc3R5bGUgZm91bmQgb24gU25henp5IE1hcHMuXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCIyLjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzljOWM5Y1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmMmYyZjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm1hbl9tYWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiA0NVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNlZWVlZWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM3YjdiN2JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMjQzOTk0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMyNDM5OTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMDcwNzA3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIEhUTUwgRE9NIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4geW91ciBtYXBcbiAgICAgICAgICAgIC8vIFdlIGFyZSB1c2luZyBhIGRpdiB3aXRoIGlkPVwibWFwXCIgc2VlbiBiZWxvdyBpbiB0aGUgPGJvZHk+XG5cblxuICAgICAgICAgICAgdmFyIG1hcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbWFwJyk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgR29vZ2xlIE1hcCB1c2luZyBvdXIgZWxlbWVudCBhbmQgb3B0aW9ucyBkZWZpbmVkIGFib3ZlXG4gICAgICAgICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBFbGVtZW50LCBtYXBPcHRpb25zKTtcbiAgICAgICAgICAgIC8vIExldCdzIGFsc28gYWRkIGEgbWFya2VyIHdoaWxlIHdlJ3JlIGF0IGl0XG4gICAgICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTUuODI1ODk0LCAzNy41OTUxMzkpLFxuICAgICAgICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgICAgICAgIGljb246ICdhc3NldHMvaW1nL21hcmtlci5zdmcnICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufSk7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

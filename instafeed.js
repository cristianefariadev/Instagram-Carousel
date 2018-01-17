var feed = new Instafeed({

    get: 'user',
    userId: 6925080228,
    accessToken: '6925080228.1677ed0.7542f8fec5484fb686e6187da4bf6d8f',
    template: '<div><img src="{{image}}" title="{{caption}}"/></div>',
    target: 'instafeed',
    after: function () {
        $('#instafeed').slick({
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6
                    }
                }, {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }]
        });
    }
});

feed.run();
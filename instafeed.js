var feed = new Instafeed({

    get: 'user',
    userId: 8411780163,
    accessToken: '8411780163.aeeff59.d2604cb0ac724e0c8d71957e0edce600',
    template: '<div><img src="{{image}}" title="{{caption}}"/></div>',
    target: 'instafeed',
    resolution: 'standard_resolution',
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

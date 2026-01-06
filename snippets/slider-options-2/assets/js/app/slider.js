 var swiper = new Swiper(".country-slide", {
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: false,
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
            reverseDirection: true,
        },
    });
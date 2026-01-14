var swiper = new Swiper(".template-slider", {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        breakpoints: {
            // যখন স্ক্রিনের প্রস্থ <= 768px
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            // যখন স্ক্রিনের প্রস্থ > 768px
            769: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },

        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
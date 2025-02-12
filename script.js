document.addEventListener("DOMContentLoaded", function() {
});

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: -1,
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

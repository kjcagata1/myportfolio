document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to My Portfolio!");
});

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: -1,
    loop: true, // Repeats slides when going to the previous slide
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

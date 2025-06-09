window.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const dotsNav = document.querySelector('.carousel-dots');
  const slidesToShow = 3;
  let currentIndex = 0;

  const updateCarousel = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    updateDots();
  };

  const updateDots = () => {
    dotsNav.innerHTML = '';
    const totalDots = Math.ceil(slides.length / slidesToShow);
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('span');
      if (i === Math.floor(currentIndex / slidesToShow)) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i * slidesToShow;
        updateCarousel();
      });
      dotsNav.appendChild(dot);
    }
  };

  nextBtn.addEventListener('click', () => {
    if (currentIndex + slidesToShow < slides.length) {
      currentIndex += slidesToShow;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex - slidesToShow >= 0) {
      currentIndex -= slidesToShow;
    } else {
      currentIndex = Math.max(0, slides.length - slidesToShow);
    }
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
});

// Carousel arrows — scroll one card per click, disable at the ends
document.querySelectorAll('[data-carousel]').forEach((car) => {
  const track = car.querySelector('.car-track');
  const prev = car.querySelector('.car-arrow.prev');
  const next = car.querySelector('.car-arrow.next');

  const step = () => {
    const slide = track.querySelector('.car-slide');
    const gap = parseFloat(getComputedStyle(track).gap) || 24;
    return slide.getBoundingClientRect().width + gap;
  };

  const update = () => {
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
  };

  prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});

// Mobile nav
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');
toggle.addEventListener('click', () => nav.classList.toggle('open'));

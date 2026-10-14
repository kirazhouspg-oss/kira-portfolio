document.documentElement.classList.add('ready');

document.querySelectorAll('[data-slideshow]').forEach((slideshow) => {
  const slides = slideshow.querySelector('.slides');
  const prev = slideshow.querySelector('.prev');
  const next = slideshow.querySelector('.next');
  const step = () => slides.clientWidth || 0;
  prev?.addEventListener('click', () => slides.scrollBy({ left: -step(), behavior: 'smooth' }));
  next?.addEventListener('click', () => slides.scrollBy({ left: step(), behavior: 'smooth' }));
});

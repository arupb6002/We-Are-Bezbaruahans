console.log("Bezbaruahns Coming Soon loaded");

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-slider', {
    type: 'loop',
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: true,
  }).mount();
});
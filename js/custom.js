const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('mouseenter', e => {
    const info = document.createElement('div');
    info.innerHTML = 'Product information goes here';
    info.classList.add('product-info');
    e.target.parentNode.appendChild(info);
  });
  image.addEventListener('mouseleave', e => {
    const info = document.querySelector('.product-info');
    e.target.parentNode.removeChild(info);
  });
});

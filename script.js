console.log('Kasil: testing branch JS loaded');
document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector('h1');
  if (h1) h1.insertAdjacentHTML('afterend', '<p id=\"js-ok\">JS is working ✅</p>');
});

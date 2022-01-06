const navbar = document.querySelector('.navbar');
const html = document.querySelector('html');
const navbarHeight = navbar.offsetHeight;
const htmlHeight = html.offsetHeight;

window.addEventListener('scroll', () => {
  let scrolDist = window.scrollY;
  if (scrolDist >= htmlHeight + navbarHeight) {
    navbar.classList.add('fixed-top');
    html.style.marginTop = '${navbarHeight}px';
  } else {
    navbar.classList.remove('fixed-top');
    html.style.marginTop = null;
  }
});

console.log(htmlHeight, navbarHeight);

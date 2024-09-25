
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.background = 'transparent';
    }
});

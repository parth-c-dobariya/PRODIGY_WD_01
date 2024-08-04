// script.js
const nav = document.getElementById('nav');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            nav.style.backgroundColor = section.style.backgroundColor;
        }
    });
});

nav.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A') {
        nav.style.backgroundColor = '#444';
        e.target.style.color = '#fff';
    }
});

nav.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'A') {
        nav.style.backgroundColor = '#333';
        e.target.style.color = '#ccc';
    }
});
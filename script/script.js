const menu = document.querySelector('.sidebar_menu')
const open_menu = document.querySelector('#open_menu')
const close_menu = document.querySelector('#close_menu')

open_menu.addEventListener('click', function(){
    menu.classList.add('active')
})

close_menu.addEventListener('click', function(){
    menu.classList.remove('active')
})

// Ajout du défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Ajout de l'effet de parallaxe sur le héro
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    const scrolled = window.pageYOffset;
    heroSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
});
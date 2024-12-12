const menu = document.querySelector('.sidebar_menu')
const open_menu = document.querySelector('#open_menu')
const close_menu = document.querySelector('#close_menu')

open_menu.addEventListener('click', function(){
    menu.classList.add('active')
})

close_menu.addEventListener('click', function(){
    menu.classList.remove('active')
})

// Modifier le défilement fluide pour prendre en compte la navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Fermer le menu sidebar si ouvert (pour mobile)
        const menu = document.querySelector('.sidebar_menu');
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});

// Ajout de l'effet de parallaxe sur le héro
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    const scrolled = window.pageYOffset;
    heroSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
});
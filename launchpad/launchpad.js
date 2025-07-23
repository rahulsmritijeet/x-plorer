
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 120;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 2.5 + 0.5 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 4 + 's';
        star.style.animationDuration = (Math.random() * 3 + 4) + 's';
        starsContainer.appendChild(star);
    }
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    const geoElements = document.querySelectorAll('.geometric-element');

    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.2}px) scale(${1 - scrolled * 0.0001})`;
    }

    geoElements.forEach((element, index) => {
        const speed = 0.05 + (index * 0.03);
        element.style.transform += ` translateY(${scrolled * speed}px)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    createStars();
});

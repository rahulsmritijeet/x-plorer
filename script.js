const iframe = document.getElementById('pageFrame');
const navLinks = document.querySelectorAll('.nav-center a, .mobile-menu a, .main-nav-contact-btn');

const header = document.querySelector('header');
const updateIframeHeight = () => {
    const headerHeight = header.offsetHeight;
    iframe.style.height = `calc(100vh - ${headerHeight}px)`;
};

window.addEventListener('resize', updateIframeHeight);
window.addEventListener('load', updateIframeHeight);

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const page = e.target.dataset.page;

        let pageUrl;
        switch (page) {
            case 'spacecrafts':
                pageUrl = 'spacecrafts/spacecrafts.html';
                break;
            case 'launchpad':
                pageUrl = 'launchpad/launchpad.html';
                break;
            case 'destinations':
                pageUrl = 'destinations/destinations.html';
                break;
            case 'contact':
                pageUrl = 'stellaris/stellaris.html';
                break;
        }

        iframe.src = pageUrl;

        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelectorAll(`[data-page="${page}"]`).forEach(link => link.classList.add('active'));

        const mobileMenu = document.getElementById('mobileMenu');
        const hamburger = document.querySelector('.hamburger');
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
}

function closeMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
    document.querySelector('.hamburger').classList.remove('active');
}

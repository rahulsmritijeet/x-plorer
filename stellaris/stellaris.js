function createStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = this.querySelector('.submit-btn');
    const originalText = btn.textContent;

    btn.textContent = 'Transmitting...';
    btn.style.background = 'linear-gradient(45deg, #64ffda, #00d4ff)';

    setTimeout(() => {
        btn.textContent = 'Signal Received!';
        btn.style.background = 'linear-gradient(45deg, #00ff88, #00cc66)';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = 'linear-gradient(45deg, #00d4ff, #0099cc)';
            this.reset();
        }, 2500);
    }, 2000);
});

document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.style.transform = 'translateX(8px)';
        this.parentElement.style.transition = 'transform 0.3s ease';
    });

    input.addEventListener('blur', function () {
        this.parentElement.style.transform = 'translateX(0)';
    });
});

createStars();

window.addEventListener('mousemove', (e) => {
    const ring = document.querySelector('.orbital-ring');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    ring.style.transform = `translate(${x * 20}px, ${y * 20}px) rotate(${x * 360}deg)`;
});

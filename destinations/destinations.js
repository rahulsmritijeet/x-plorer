let currentSector = 0;
const totalSectors = 5;
const container = document.getElementById('sectorContainer');
const indicators = document.querySelectorAll('.indicator-dot');

function updateSectorPosition() {
    const translateX = -currentSector * 100;
    container.style.transform = `translateX(${translateX}vw)`;

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSector);
    });
}

function nextSector() {
    currentSector = (currentSector + 1) % totalSectors;
    updateSectorPosition();
}

function prevSector() {
    currentSector = (currentSector - 1 + totalSectors) % totalSectors;
    updateSectorPosition();
}

function goToSector(index) {
    currentSector = index;
    updateSectorPosition();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSector();
    if (e.key === 'ArrowLeft') prevSector();
});

let startX = null;
document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    if (startX === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextSector();
        } else {
            prevSector();
        }
    }
    startX = null;
}, { passive: true });

updateSectorPosition();


// Example slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.children.length;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);
});

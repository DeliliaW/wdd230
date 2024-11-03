document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('img.lazy');

    const loadImage = (image) => {
        const src = image.getAttribute('data-src');
        if (!src) return;
        image.src = src;
        image.onload = () => {
            image.classList.remove('lazy');
            image.style.opacity = 1; // Fade in effect
        };
    };

    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                imgObserver.unobserve(entry.target); // Stop observing once loaded
            }
        });
    });

    images.forEach(image => {
        imgObserver.observe(image); // Start observing each lazy image
    });
});
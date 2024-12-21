document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('img.lazy');

    const loadImage = (image) => {
        const src = image.getAttribute('data-src');
        if (!src) return;
        image.src = src;
        image.onload = () => {
            image.classList.remove('lazy');
            image.style.opacity = 1; 
        };
    };

    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                imgObserver.unobserve(entry.target); 
            }
        });
    });

    images.forEach(image => {
        imgObserver.observe(image); 
    });
});
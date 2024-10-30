const overlayText = document.querySelector('.overlay-text');
        const image = document.querySelector('.responsive-image');

        function updateOverlayText() {
            const width = window.innerWidth;
            if (width <= 480) {
                overlayText.textContent = 'Atlanta Temple';
            } else if (width <= 800) {
                overlayText.textContent = 'Atlanta Temple';
            } else {
                overlayText.textContent = 'Atlanta Temple';
            }
        }
        window.addEventListener('resize', updateOverlayText);
        updateOverlayText(); // Set initial text
const overlayText = document.querySelector('.overlay-text');
        const image = document.querySelector('.responsive-image');

        function updateOverlayText() {
            const width = window.innerWidth;
            if (width <= 480) {
                overlayText.textContent = 'Small';
            } else if (width <= 800) {
                overlayText.textContent = 'Medium';
            } else {
                overlayText.textContent = 'Large';
            }
        }
        window.addEventListener('resize', updateOverlayText);
        updateOverlayText(); // Set initial text
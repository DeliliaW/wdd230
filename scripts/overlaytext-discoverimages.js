const imageContainers = document.querySelectorAll('.image-container');

function updateOverlayText() {
    imageContainers.forEach(container => {
        const overlayText = container.querySelector('.overlay-text');
        const image = container.querySelector('.responsive-image');
        
        // Use a data attribute or any logic to set the overlay text
        overlayText.textContent = image.getAttribute('data-overlay') || 'Default Overlay Text';
    });
}
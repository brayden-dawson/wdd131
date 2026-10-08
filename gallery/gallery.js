// 1. Grab our HTML elements
const gallerySection = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// 2. Add an event listener, when img clicked open modal
gallerySection.addEventListener('click', (event) => {
    if(event.target.src !== undefined) {
        console.log(event.target.src);
    // display modal
        modal.showModal();
    // set the src image of modal
        modalImg.src = event.target.src.replace("-sm", "-full");
    }
});

// 3. Close modal
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
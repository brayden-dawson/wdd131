// ==========================================
// 1. Navigation Menu Toggle (from responsive.js)
// ==========================================

// Step 1: Select menu from DOM
const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    // Toggle the 'open' class on the nav element
    nav.classList.toggle("open");
    
    // Toggle the X animation on the button
    menuButton.classList.toggle("change");
});


// ==========================================
// 2. Gallery Modal Viewer (from coolpics.js)
// ==========================================

// Grab our HTML elements
const gallerySection = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Add an event listener, when img clicked open modal
gallerySection.addEventListener('click', (event) => {
    if (event.target.src !== undefined) {
        console.log(event.target.src);
        // Display modal
        modal.showModal();
        // Set the src image of modal (swapping sm for full)
        modalImg.src = event.target.src.replace("-sm", "-full");
    }
});

// Close modal via close button
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
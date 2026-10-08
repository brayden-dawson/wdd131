// Step 1 Select menu from DOM
let menuButton = document.querySelector(".menu-btn");
// Step 2 Add an even listener
menuButton.addEventListener("click", (e) => {
    // Step 3 Add toggle
    let nav = document.querySelector("nav");
    
    // turnary operator
    nav.style.display = nav.style.display === '' ? 'flex' : '';

    // Step 4 Expand menu/display links
    menuButton.classList.toggle("change");

    // Step 5 make x animation
});


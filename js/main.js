// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle the mobile menu when clicking the hamburger icon
    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Close the mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });
});
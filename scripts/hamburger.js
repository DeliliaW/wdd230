const hamburgerToggle = document.querySelector("#hamburger-toggle");
const navbar = document.querySelector(".navbar");

hamburgerToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");
    hamburgerToggle.setAttribute("aria-expanded", isOpen);
});

const navLinks = document.querySelectorAll("#navbar a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");
        hamburgerToggle.setAttribute("aria-expanded", "false");
    });
});

    
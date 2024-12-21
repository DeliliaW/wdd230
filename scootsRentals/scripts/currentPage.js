document.addEventListener("DOMContentLoaded", function() {
    const pageTitle = document.title;
    console.log("Page Title:", pageTitle); // Check the actual page title

    // Define a mapping between page titles and nav item IDs
    const navItemMap = {
        "Delilia Werner - WDD 230 - Web Frontend Development - Final Project-Scoots Rentals Home Page": "Home",
        "Delilia Werner - WDD 230 - Web Frontend Development - Final Project-Scoots Rentals Rentals Page": "Rentals",
        "Delilia Werner - WDD 230 - Web Frontend Development - Final Project-Scoots Rentals Reservations Page": "Reservations",
        "Delilia Werner - WDD 230 - Web Frontend Development - Final Project-Scoots Rentals Contact Page": "Contact"
    };

    console.log("Nav Item Map:", navItemMap); // Check the navItemMap contents

    // Find the current nav item ID
    const currentNavItemId = navItemMap[pageTitle];
    console.log("Current Nav Item ID:", currentNavItemId); // Check the resolved ID

    if (currentNavItemId) {
        const currentNavItem = document.getElementById(currentNavItemId);
        console.log("Current Nav Item:", currentNavItem); // Ensure the element is found
        if (currentNavItem) {
            currentNavItem.classList.add("active-nav-item");
        } else {
            console.error("Element not found for ID:", currentNavItemId);
        }
    } else {
        console.error("Page title not found in navItemMap");
    }
});



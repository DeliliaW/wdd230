 document.addEventListener("DOMContentLoaded", function() {
        const pageTitle = document.title;

        
        const navItemMap = {
            "Home Page Title": "home",
            "Rentals Page Title": "rentals",
            "Reservations Page Title": "reservations",
            "Contact Page Title": "contact"
        };

        
        const currentNavItemId = navItemMap[pageTitle];

        if (currentNavItemId) {
           
            const currentNavItem = document.getElementById(currentNavItemId);
            
            currentNavItem.classList.add("active-nav-item");
        }
    });


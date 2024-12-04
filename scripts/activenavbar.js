 document.addEventListener("DOMContentLoaded", function () {
    const pageTitle = document.title;

    const navItemMap = {
        "Delilia Werner - WDD 230 - Web Frontend Development - Chamber of Commerce": "home",
        "Delilia Werner - WDD 230 - Web Frontend Development - Chamber of Commerce - Discover": "discover",
        "Delilia Werner - WDD 230 - Web Frontend Development - Robins Regional Chamber of Commerce - Directory of Member": "directory",
        "Delilia Werner - WDD 230 - Web Frontend Development - Chamber of Commerce - Join": "join"
 }; 

    const currentNavItemId = navItemMap[pageTitle];

    if (currentNavItemId) {
        const currentNavItem = document.getElementById(currentNavItemId);
        currentNavItem.classList.add("active-nav-item");
    }

}); 
    

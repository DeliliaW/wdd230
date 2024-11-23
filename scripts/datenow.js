document.addEventListener("DOMContentLoaded", function() {
    const lastVisitKey = 'lastVisit';
    const sidebarContent = document.getElementById('.sidebar'); // Adjust this ID based on your HTML

    // Get the current date
    const currentDate = new Date();
    
    // Retrieve the last visit date from localStorage
    const lastVisit = localStorage.getItem(lastVisitKey);
    
    if (!lastVisit) {
        // First visit
        sidebarContent.innerHTML = "Welcome! Let us know if you have any questions.";
    } else {
        // Parse the last visit date
        const lastVisitDate = new Date(lastVisit);
        
        // Calculate the difference in time
        const timeDifference = currentDate - lastVisitDate;
        
        // Convert time difference from milliseconds to days
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        
        if (daysDifference < 1) {
            // Less than a day since last visit
            sidebarContent.innerHTML = "Back so soon! Awesome!";
        } else {
            // More than a day since last visit
            const dayText = daysDifference === 1 ? "day" : "days";
            sidebarContent.innerHTML = `You last visited ${daysDifference} ${dayText} ago.`;
        }
    }
    
    // Store the current date in localStorage
    localStorage.setItem(lastVisitKey, currentDate.toISOString());
});

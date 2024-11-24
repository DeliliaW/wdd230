ocument.addEventListener("DOMContentLoaded", function() {
    const lastVisitKey = 'lastVisit';
    const sidebarContent = document.querySelector('.sidebar'); // Select the sidebar element

    if (!sidebarContent) {
        console.error('Element with class "sidebar" not found');
        return;  // Exit if the element is not found
    }

    // Get the current date
    const currentDate = new Date();

    // Retrieve the last visit date from localStorage
    const lastVisit = localStorage.getItem(lastVisitKey);

    if (!lastVisit) {
        // First visit message
        sidebarContent.innerHTML = "Welcome! Let us know if you have any questions.";
    } else {
        // Parse the last visit date
        const lastVisitDate = new Date(lastVisit);

        // Calculate the difference in time
        const timeDifference = currentDate - lastVisitDate;

        // Convert time difference from milliseconds to days
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            // Less than a day since the last visit
            sidebarContent.innerHTML = "Back so soon! Awesome!";
        } else {
            // More than a day since last visit
            const dayText = daysDifference === 1 ? "day" : "days";
            sidebarContent.innerHTML = `You last visited ${daysDifference} ${dayText} ago.`;
        }
    }

    // Store the current date in localStorage to update next time
    localStorage.setItem(lastVisitKey, currentDate.toISOString());
});
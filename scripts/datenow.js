document.addEventListener("DOMContentLoaded", function() {
    const lastVisitKey = 'lastVisit';
    const sidebarContent = document.querySelector('.sidebar2'); 

    if (!sidebarContent) {
        console.error('Element with class "sidebar" not found');
        return; 
    }

    const currentDate = new Date();

    const lastVisit = localStorage.getItem(lastVisitKey);

    if (!lastVisit) {
        sidebarContent.innerHTML = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);

        const timeDifference = currentDate - lastVisitDate;

        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            sidebarContent.innerHTML = "Back so soon! Awesome!";
        } else {
            const dayText = daysDifference === 1 ? "day" : "days";
            sidebarContent.innerHTML = `You last visited ${daysDifference} ${dayText} ago.`;
        }
    }

    localStorage.setItem(lastVisitKey, currentDate.toISOString());
});
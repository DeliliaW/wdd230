function shouldShowBanner () {
    const tody = new Date();
    const dayOfWeek = today.getDay ();
    return dayOfWeek >= 1 && dayOfWeek <= 3;
}

function closeBanner()  {
    const banner = document.querySelector('#banner');
    banner.style.display = "none";
}

if (shouldShowBanner())  {
    const banner = documen.querySelector('#banner');
    banner.style.display = "block";

    const closeButton = document.querySelector("close-banner");
    closeBanner.addEventListener("click", closeBanner);
}
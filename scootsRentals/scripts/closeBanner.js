function closeBanner()  {
    const banner = document.querySelector('#banner');
    banner.style.display = "none";
}

const closeButton = document.querySelector("#close-banner");
closeButton.addEventListener("click", closeBanner);

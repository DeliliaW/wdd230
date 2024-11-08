document.addEventListener("DOMContentLoaded", () => {
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


if (visitsDisplay) {
  if(numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
  } else {
    visitsDisplay.textContent = ' First time visitor. Welcome! '
 }
    numVisits++;

    localStorage.setItem("numVisits-ls", numVisits);
}
});    
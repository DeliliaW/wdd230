document.addEventListener("DOMContentLoaded", () => {
const visitsLabel = document.querySelector(".visits-label");
const visitsCount = document.querySelector(".visits-count");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


if (visitsCount) {
  if(numVisits !== 0) {
    visitsCount.textContent = numVisits;
  } else {
    visitsCount.textContent = ' First time visitor. Welcome! '
 }
    numVisits++;

    localStorage.setItem("numVisits-ls", numVisits);
}
});    
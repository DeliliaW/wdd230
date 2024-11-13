const baseURL = "https://deliliaw.github.io/wdd230/";
const linksURL = "https://deliliaw.github.io/wdd230/lesson09/scripts/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

getLinks();

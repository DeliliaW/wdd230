const baseURL = "https://deliliaw.github.io/wdd230/";
const linksURL = "https://deliliaw.github.io/wdd230/data/links.json"; 
const list = document.querySelector('#card1');

async function getLinks()   {
 const response = await fetch(linksURL);
 const data = await response.json();
 displayLinks(data);

 const displayLinks = (weeks) => {
    weeks.forEach ( (week) => {
     let weekElement = document.createElement('ul');
     let linkElement = document.createElement('li');

        weekElement.textContent = `week: ${week.weekName}`;
        linkElement.textContent = `Link: ${week.link}`;

        weekElement.appendChild(linkElement);
        list.appendChild(weekElement);
    });
 }
}

getLinks();

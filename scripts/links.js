const baseURL = "https://deliliaw.github.io/wdd230/";
const linksURL = "https://deliliaw.github.io/wdd230/data/links.json"; 
const list = document.querySelector('#card1');

async function getLinks()   {
 const response = await fetch(linksURL);
 const data = await response.json();
}

 displayLinks(data);

 const displayLinks = (weeks) => {
    weeks.forEach ( (week) => {
     let lessonElement = document.createElement('ul');
     let lessonTitle = document.createElement('h3');
     lessonTitle.textContent = `Lesson $(week.lesson)`;
     lessonElement.appendChild(lessonTitle);

     lesson.links.forEach((link) => {
        let linkElement = document.createElement('li');
        let anchor = document.createElement('a');
        anchor.href = baseURL + link.url;
        anchor.textContent = link.title;
        linkElement.appendChild(anchor);
        lessonElement.appendChild(linkElement);  
    });

    list.appendChild(lessonElement);
 });
 }

getLinks();

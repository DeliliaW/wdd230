const baseURL = "https://deliliaw.github.io/wdd230/";
const linksURL = "https://deliliaw.github.io/wdd230/data/links.json"; 
const list = document.querySelector('#card1');

async function getLinks()   {
 const response = await fetch(linksURL);
 const data = await response.json();
 displayLinks(data.lessons);
 console.log(data);
}

 const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let lessonWrapper = document.createElement('div');
        lessonWrapper.classList.add('lesson-wrapper'); // Add the flex wrapper class

        // Create and append the lesson title
        let lessonTitle = document.createElement('p');
        lessonTitle.classList.add('lesson-title'); // Style the title (optional)
        lessonTitle.textContent = ` ${week.lesson}:`;
        lessonWrapper.appendChild(lessonTitle);

        let lessonElement = document.createElement('ul');
        week.links.forEach((link) => {
            let linkElement = document.createElement('li');
            let anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            linkElement.appendChild(anchor);
            lessonElement.appendChild(linkElement);
        });

        // Append the list to the lessonWrapper div
        lessonWrapper.appendChild(lessonElement);

        // Append the lessonWrapper to the main list container
        list.appendChild(lessonWrapper);
    });
}

getLinks();

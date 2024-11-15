const baseURL = "https://deliliaw.github.io/wdd230/";
const linksURL = "https://deliliaw.github.io/wdd230/lesson09/scripts/data/links.json";
const list = document.querySelector('#card1');

async function getLessonsData() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) throw new Error('Failed to fetch data');
        
        const data = await response.json();
        console.table(data.lessons); 
        displayLessons(data.lessons);
    } catch (error) {
        console.error('Error fetching the lessons data:', error);
    }
}

getLessonsData();

const displayLessons = (lessons) => {
    const ul = document.createElement('ul'); 

    lessons.forEach(lesson => {
        const li = document.createElement('li');
        li.textContent = `Lesson: ${lesson.week}`;
        ul.appendChild(li);

        if (lesson.links) {
            const subUl = document.createElement('ul');
            lesson.links.forEach(link => {
                const subLi = document.createElement('li');

        
                if (link.lesson) {
                    subLi.textContent = `Lesson: ${link.lesson}`;
                    subUl.appendChild(subLi);
                    if (link.links) {
                        createNestedList(subLi, link.links);
                    }
                } else if (link.url) {
                    const a = document.createElement('a');
                    a.href = baseURL + link.url;
                    a.textContent = link.title || link.url; 
                    subLi.appendChild(a);
                    subUl.appendChild(subLi);
                }
            });
            li.appendChild(subUl);
        }
    });

    list.appendChild(ul);
};

function createNestedList(parentLi, links) {
    const nestedUl = document.createElement('ul');
    links.forEach(link => {
        const nestedLi = document.createElement('li');

        if (link.lesson) {
            nestedLi.textContent = `Lesson: ${link.lesson}`;
            nestedUl.appendChild(nestedLi);
            if (link.links) {
                createNestedList(nestedLi, link.links);
            }
        } else if (link.url) {
            const a = document.createElement('a');
            a.href = baseURL + link.url;
            a.textContent = link.title || link.url;
            nestedLi.appendChild(a);
            nestedUl.appendChild(nestedLi);
        }
    });
    parentLi.appendChild(nestedUl);
}
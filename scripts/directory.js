const url = 'https://deliliaw.github.io/wdd230/chamber/data/members.json';
const displayContainer = document.querySelector('#displayContainer');

document.querySelectorAll('img').forEach(img => {
    img.onload = function() {
      img.style.width = this.naturalWidth + 'px';
      img.style.height = this.naturalHeight + 'px';
    }
  });

async function getMemberData()  {
    try {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
} catch (error) {
    console.error(`Error fetching data:`, error);
}
}


getMemberData();

const displayMembers = (members) => {
    members.forEach ( (member) =>  {
        let card = document.createElement('article');
        card.classList.add('displayContainer');
        let image = document.createElement('img');
        let name = document.createElement('h4');
        let address = document.createElement('p');
        let phonenumber = document.createElement('p');
        let websiteURL = document.createElement('p');
        let membershiplevel = document.createElement('p');

        image.setAttribute('src', member.logourl);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        name.textContent = `${member.name} `;
        address.textContent = `${member.address}`;
        phonenumber.textContent = `${member.phonenumber}`;
        websiteURL.textContent = `${member.websiteURL}`;
        membershiplevel.textContent = `${member.membershiplevel} member`;
        
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(websiteURL);
        card.appendChild(membershiplevel);

        displayContainer.appendChild(card);

    });
};

function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const spotlightHome = document.querySelector('#spotlight-home');

const displaySpotlight = (members) => {
    shuffleArray(members);
    let spotlightCount = 0;
    members.forEach ( (member) =>  {
        if (spotlightCount == 3 || (member.membershiplevel != "Gold" && member.membershiplevel != "Silver")) {
            return;
         
        }
        let card = document.createElement('div');
        card.classList.add('spotlightHome');
        let image = document.createElement('img');
        let name = document.createElement('h4');
        let address = document.createElement('p');
        let phonenumber = document.createElement('p');
        let websiteURL = document.createElement('p');
        let membershiplevel = document.createElement('p');

        image.setAttribute('src', member.logourl);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        name.textContent = `${member.name} `;
        address.textContent = `${member.address}`;
        phonenumber.textContent = `${member.phonenumber}`;
        websiteURL.textContent = `${member.websiteURL}`;
        membershiplevel.textContent = `${member.membershiplevel} member`;
        
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(websiteURL);
        card.appendChild(membershiplevel);

        spotlightHome.appendChild(card);

        spotlightCount++;
    });
}
          
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");



function showGrid()
{
	display.classList.add("grid");
	display.classList.remove("list");
}

function showList() 
{
	display.classList.add("list");
	display.classList.remove("grid");
}

if (gridbutton) {
    gridbutton.addEventListener("click", showGrid);
} 
if (listbutton) {
    listbutton.addEventListener("click", showList);
}
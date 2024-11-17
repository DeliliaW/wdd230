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
    console.log(data);
    displayMembers(data.members);
} catch (error) {
    console.error(`Error fetching data:`, error);
}
}


getMemberData();

const displayMembers = (members) => {
    members.forEach ( (member) =>  {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let name = document.createElement('h4');
        let address1 = document.createElement('p');
        let address2 = document.createElement('p');
        let phonenumber = document.createElement('p');
        let websiteURL = document.createElement('p');
        let membershiplevel = document.createElement('p');

        image.setAttribute('src', member.logourl);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        name.textContent = `${member.name} `;
        address1.textContent = `${member.address1}`;
        address2.textContent = `${member.address2}`;
        phonenumber.textContent = `${member.phonenumber}`;
        websiteURL.textContent = `${member.websiteURL}`;
        membershiplevel.textContent = `${member.membershiplevel} member`;
        
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address1);
        card.appendChild(address2);
        card.appendChild(phonenumber);
        card.appendChild(websiteURL);
        card.appendChild(membershiplevel);

        displayContainer.appendChild(card);

    });

    const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

}
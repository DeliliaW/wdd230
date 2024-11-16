const url = 'https://deliliaw.github.io/wdd230/chamber/data/members.json';
const memberCards = document.querySelector('.members');

async function getMemberData()  {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);

}

getMemberData();

const displayMembers = (members) => {
    members.forEach ( (member) =>  {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let name = document.createElement('h4');
        let address = document.createElement('p');
        let phonenumber = document.createElement('p');
        let websiteURL = document.createElement('p');
        let membershiplevel = document.createElement('label');

        image.setAttribute('src', member.logourl);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '250');
        image.setAttribute('height', '150');
        name.textContent = `${member.name} `;
        address.textContent = `Address: ${member.address}`,
        phonenumber.textContent = `Phone number: ${member.phonenumber}`;
        websiteURL.textContent = `Website: ${member.websiteURL}`;
        membershiplevel.textContent = `${member.membershiplevel} member`;
        
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(websiteURL);
        card.appendChild(membershiplevel);

        memberCards.appendChild(card);

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
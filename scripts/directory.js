const url = 'https://deliliaw.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('memberCards');

async function getMemberData()  {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);

}

getMemberData();

const displayMembers = (members) => {
    members.forEach ( (member) =>  {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phonenumber = document.createElement('p');
        let websiteURL = document.createElement('p');
        let membershiplevel = document.createElement('label');

        image.setAttribute('src', member.imageurl);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '250');
        image.setAttribute('height', '150');
        name.textContent = `${member.name} `;
        address.textContent = `Address ${member.address}`,
        phonenumber.textContent = `Phone number ${member.phonenumber}`;
        websiteURL.textContent = `Website ${member.websiteURL}`;
        membershiplevel.textContent = `${member.membershiplevel} member`;
        
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(websiteURL);
        card.appendChild(membershiplevel);

        memberCards.appendChild(card);

    }





)
}
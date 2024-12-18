const url = "https://deliliaw.github.io/wdd230/scootsRentals/data/prices.json";


function loadData() {
    fetch('prices.json')
    .then(response => {
        if (!response.ok) {
            throw new Error ('Network response was not ok');
         }
         return response.json();
    })
    .then(data => {
        const tableBody = document.querySelector('#rentaltable');

        tableBody.innerHTML = "";

        data.forEach(item => {
            const row = tableBody.insertRow();

            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);

            cell1.textContent = item.name;
            cell2.textContent = item.maxPersons;
            cell3.textContent = item.reservationHalf;
            cell4.textContent = item.reservationFull;
            cell5.textContent = item.walkinHalf;
            cell6.textContent = item.walkinFull;
        });
    })
    .catch(error => {
        console.error('There was an error loading the data:', error);
    });
}

window.onload = loadData;

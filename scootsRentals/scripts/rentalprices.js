const url = "https://deliliaw.github.io/wdd230/scootsRentals/data/prices.json";


fetch('data/prices.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('rentalTable').getElementsByTagName('tbody')[0];
    const rows = tableBody.getElementsByTagName('tr');
    tableBody.innerHTML = '';
    
    if (Array.isArray(data.rentalPrices.rentalVehicle)) {
      data.rentalPrices.rentalVehicle.forEach(item => {
        const row = tableBody.insertRow();

        const cell1 = row.insertCell(0);  
        const cell2 = row.insertCell(1);  
        const cell3 = row.insertCell(2);  
        const cell4 = row.insertCell(3);  
        const cell5 = row.insertCell(4);  
        const cell6 = row.insertCell(5);  
        const cell7 = row.insertCell(6);  

       
        cell1.textContent = item.rentalType;
        cell2.textContent = item.name;
        cell3.textContent = item.maxPersons;
        cell4.textContent = item.reservationHalf ? `$${item.reservationHalf}` : "$0";
        cell5.textContent = item.reservationFull ? `$${item.reservationFull}` : "$0"; 
        cell6.textContent = item.walkinHalf ? `$${item.walkinHalf}` : "$0"; 
        cell7.textContent = item.walkinFull ? `$${item.walkinFull}` : "$0"; 
      });
    } else {
      console.error("The 'rentalPrices.rentalVehicle' is not an array or is missing:", data.rentalPrices.rentalVehicle);
    }
  })


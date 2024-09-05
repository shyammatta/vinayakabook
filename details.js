window.addEventListener('load', () => {
    loadStoredData();
});

// Function to load the stored data from localStorage and display it
function loadStoredData() {
    const storedData = JSON.parse(localStorage.getItem('personLog')) || [];
    const tableBody = document.querySelector('#detailsTable tbody');

    // Loop through the stored data and add each entry to the table
    storedData.forEach((person, index) => {
        const newRow = document.createElement('tr');

        const snCell = document.createElement('td');
        snCell.textContent = index + 1;
        newRow.appendChild(snCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = person.name;
        newRow.appendChild(nameCell);

        const moneyCell = document.createElement('td');
        moneyCell.textContent = person.money;
        newRow.appendChild(moneyCell);

        tableBody.appendChild(newRow);
    });
}
//goback function
function goback(){
    window.location.href="index1.html";
}
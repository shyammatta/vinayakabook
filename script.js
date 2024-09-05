document.getElementById('logForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get input values
    const name = document.getElementById('name').value;
    const money = document.getElementById('money').value;

    if (name && money) {
        // Store the data in localStorage
        storeDataInLocalStorage(name, money);

        // Clear the input fields
        document.getElementById('name').value = '';
        document.getElementById('money').value = '';
    } else {
        alert('Please fill in both fields.');
    }
});

// Reset button functionality
document.getElementById('resetButton').addEventListener('click', function() {
    if (confirm('Are you sure you want to delete all data?')) {
        // Clear localStorage
        localStorage.removeItem('personLog');
    }
});

// Next Page Button functionality
document.getElementById('nextPageButton').addEventListener('click', function() {
    window.location.href = 'details.html'; // Redirect to the details page
});

// Function to store the data in localStorage
function storeDataInLocalStorage(name, money) {
    let personLog = JSON.parse(localStorage.getItem('personLog')) || [];

    // Add the new person data to the array
    personLog.push({ name: name, money: money });

    // Save the updated array back to localStorage
    localStorage.setItem('personLog', JSON.stringify(personLog));
}

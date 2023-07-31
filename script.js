console.log("Event Challenge");

// Function to get the current date in the format (YYYY-MM-DD)
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Function to display today's date on button click
document.getElementById('showDateBtn').addEventListener('click', function () {
    const dateDisplayElement = document.getElementById('dateDisplay');
    const currentDate = getCurrentDate();
    dateDisplayElement.textContent = `Today's Date: ${currentDate}`;
});

// Function to handle branch change event
document.getElementById('branch').addEventListener('change', function () {
    const branchNameElement = document.getElementById('branch_name');
    branchNameElement.textContent = this.value;
});

// Function to change the color of the box on mouseover and mouseout
document.getElementById('box').addEventListener('mouseover', function () {
    this.style.backgroundColor = 'red';
});

document.getElementById('box').addEventListener('mouseout', function () {
    this.style.backgroundColor = 'green';
});

// Function to change the input field (id=name) color on keydown
document.getElementById('name').addEventListener('keydown', function () {
    this.style.backgroundColor = 'grey';
});

// Function to convert input field (id=surname) into capital letters on keyup
document.getElementById('surname').addEventListener('keyup', function () {
    this.value = this.value.toUpperCase();
});

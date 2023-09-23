
const data = [];
let femaleTableCreated = false;
let maleTableCreated = false;



function createFemaleTable(femaleData) {
    const femaleTableContainer = document.getElementById('female-table-container');
    femaleTableContainer.innerHTML = '';

    const femaleTable = document.createElement('table');
    femaleTable.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Marks</th>
                <th>Passing</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;
       // Populate the table with data
       const tableBody = femaleTable.querySelector('tbody');
    femaleData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td><td>
            <img src="${item.img_src}" alt="Profile Image" width="25" height="20" style="border:1px solid black; border-radius:50px">
            ${item.first_name} ${item.last_name}
            </td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing ? 'Pass' : 'Fail'}</td>
            <td>${item.email}</td>
        `;
        tableBody.appendChild(row);
    });

    // Append the table to the container
    femaleTableContainer.appendChild(femaleTable);
    femaleTableCreated = true;
}

// Function to create and populate the male students' table
function createMaleTable(maleData) {
const maleTableContainer = document.getElementById('male-table-container');
maleTableContainer.innerHTML = ''; // Clear previous content

const maleTable = document.createElement('table');
maleTable.border = '5';
maleTable.innerHTML = `
<thead>
    <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Marks</th>
                <th>Passing</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;
    
    // Populate the table with data
    const tableBody = maleTable.querySelector('tbody');
    maleData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>
        <img src="${item.img_src}" alt="Profile Image" width="25" height="20" style="border:1px solid black; border-radius:50px">
        ${item.first_name} ${item.last_name}
        </td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing ? 'Pass' : 'Fail'}</td>
            <td>${item.email}</td>
        `;
        tableBody.appendChild(row);
    });
      // Append the table to the container
      maleTableContainer.appendChild(maleTable);
      maleTableCreated = true;
}



 // Function to sort by gender
 function sortByGender() {
    if (!(femaleTableCreated || maleTableCreated)) {
        const femaleData = data.filter(item => item.gender === 'Female');
        const maleData = data.filter(item => item.gender === 'Male');

        document.querySelector('table').style.display = 'none';
        document.getElementById('female-table-container').style.display = 'table';
        document.getElementById('male-table-container').style.display = 'table';
        createFemaleTable(femaleData);
        createMaleTable(maleData);
    }
}

// Function to update the table with the current data
function updateTable() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.id}</td>
        <td>
        <img src="${item.img_src}" alt="Profile Image" width="25" height="20" style="border:1px solid black; border-radius:50px">
        ${item.first_name} ${item.last_name}
        </td>
        <td>${item.gender}</td>
        <td>${item.class}</td>
        <td>${item.marks}</td>
        <td>${item.passing ? 'Pass' : 'Fail'}</td>
        <td>${item.email}</td>
        `;
        tableBody.appendChild(row);
    });
}
function updateFilteredTable(filteredData) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    filteredData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>
            <img src="${item.img_src}" alt="Profile Image" width="25" height="20" style="border:1px solid black; border-radius:50px">
            ${item.first_name} ${item.last_name}
            </td>
        <td>${item.gender}</td>
        <td>${item.class}</td>
        <td>${item.marks}</td>
        <td>${item.passing ? 'Pass' : 'Fail'}</td>
        <td>${item.email}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to sort by full name in ascending order (A->Z)
function sortAZ() {
    data.sort((a, b) => (a.first_name + a.last_name).localeCompare(b.first_name + b.last_name));
    updateTable();

    document.querySelector('table').style.display = 'table';
    document.getElementById('female-table-container').style.display = 'none';
    document.getElementById('male-table-container').style.display = 'none';
    femaleTableCreated = false;
     maleTableCreated = false;
    
}
// Function to sort by full name in descending order (Z->A)
function sortZA() {
    data.sort((a, b) => (b.first_name + b.last_name).localeCompare(a.first_name + a.last_name));
    updateTable();

    document.querySelector('table').style.display = 'table';
    document.getElementById('female-table-container').style.display = 'none';
    document.getElementById('male-table-container').style.display = 'none';
    femaleTableCreated = false;
    maleTableCreated = false;

}
// Function to sort by marks in ascending order
function sortByMarks() {
   
    data.sort((a, b) => a.marks - b.marks);
    updateTable();

    document.querySelector('table').style.display = 'table';
    document.getElementById('female-table-container').style.display = 'none';
    document.getElementById('male-table-container').style.display = 'none';
    femaleTableCreated = false;
    maleTableCreated = false;

}
// Function to show only passing students
function showPassing() {
    const passingData = data.filter(item => item.passing);
    data.push(...passingData);
    updateTable();
    
    document.querySelector('table').style.display = 'table';
    document.getElementById('female-table-container').style.display = 'none';
    document.getElementById('male-table-container').style.display = 'none';
    femaleTableCreated = false;
    maleTableCreated = false;
}

function sortByClass() {
    data.sort((a, b) => a.class - b.class);
    updateTable();

    document.querySelector('table').style.display = 'table';
    document.getElementById('female-table-container').style.display = 'none';
    document.getElementById('male-table-container').style.display = 'none';
    femaleTableCreated = false;
    maleTableCreated = false;

}


//  search functionality
 

 const tableBody = document.getElementById('table-body');
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchInput.addEventListener('input', () => {
    performSearch();
});

searchButton.addEventListener('click', () => {
    performSearch();
});

function performSearch() {
    const searchText = searchInput.value.toLowerCase();

    const filteredData = data.filter(item => {
        // Check if any of the properties contain the search text
        return (
            item.first_name.toLowerCase().startsWith(searchText) ||
            item.email.toLowerCase().startsWith(searchText) ||
            item.class.toString().toLowerCase().startsWith(searchText)
        );
    });

    // Update the table with the filtered data
    updateFilteredTable(filteredData);
}




fetch('https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json')
  .then(resp => resp.json())
  .then(x => {
    data.push(...x);
    updateTable();
  })
  .catch(error => console.error('error fetching data', error));


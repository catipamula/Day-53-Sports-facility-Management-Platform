// Sample employee data (replace with actual data fetching logic)
const employees = [
    { name: "John Doe", courses: ["Fire Safety 101"] },
    { name: "Jane Smith", courses: [] },
  ];
  
  // Function to populate the employee table
  function populateTable() {
    const tableBody = document.getElementById("training-table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear existing rows
  
    for (const employee of employees) {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const coursesCell = document.createElement("td");
      const actionCell = document.createElement("td");
      
      nameCell.innerText = employee.name;
      coursesCell.innerText = employee.courses.join(", ");
      
      // Add a button to manage employee courses (replace with actual functionality)
      const manageButton = document.createElement("button");
      manageButton.innerText = "Manage";
      actionCell.appendChild(manageButton);
      
      row.appendChild(nameCell);
      row.appendChild(coursesCell);
      row.appendChild(actionCell);
      tableBody.appendChild(row);
    }
  }
  
  // Function to add a new employee (replace with actual form handling)
  function addEmployee() {
    // Prompt for employee name
    const name = prompt("Enter employee name:");
    if (name) {
      employees.push({ name: name, courses: [] });
      populateTable();
    }
  }
  
  populateTable();
  
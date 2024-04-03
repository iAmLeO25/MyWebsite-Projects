let employees = [
    { name: "namgay", id: "EM-1", date: "03/04/23" },
    { name: "sonam", id: "EM-2", date: "04/07/23" }
];

function displayEmployeeList() {
    let employeeList = document.getElementById("employee-list");
    employeeList.innerHTML = "";
    employees.forEach(function(employee) {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.id}</td>
            <td>${employee.date}</td>
        `;
        employeeList.appendChild(row);
    });
}

function addEmployee() {
    let name = prompt("Name:");
    let date = prompt("Date:");
    let id = "EM-" + (employees.length + 1);
    employees.push({ name, id, date });
    displayEmployeeList();
}

function removeEmployee() {
    let id = prompt("Enter Employee ID:");
    let index = employees.findIndex(function(employee) {
        return employee.id === id;
    });
    if (index !== -1) {
        employees.splice(index, 1);
        displayEmployeeList();
        alert(`Employee ${id} removed.`);
    } else {
        alert(`Employee ${id} not found.`);
    }
}

function updateEmployee() {
    let id = prompt("Enter Employee ID:");
    let index = employees.findIndex(function(employee) {
        return employee.id === id;
    });
    if (index !== -1) {
        let name = prompt("Name:");
        let date = prompt("Date:");
        employees[index].name = name;
        employees[index].date = date;
        displayEmployeeList();
        alert(`Employee ${id} updated.`);
    } else {
        alert(`Employee ${id} not found.`);
    }
}

displayEmployeeList();
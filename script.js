let employees = [];

function addEmployee() {
  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const age = parseInt(document.getElementById('age').value);

  if (name && profession && age) {
    const id = employees.length + 1;
    const newEmployee = { id, name, profession, age };
    employees.push(newEmployee);
    displayEmployees();
    document.getElementById('employeeForm').reset();
    showSuccessMessage();
    document.getElementById('zeroEmployeesMessage').style.display = 'none'; // Hide zero employees message when employee is added
  } else {
    showErrorMessage();
  }
}

function displayEmployees() {
  const employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = '';
  employees.forEach(employee => {
    const div = document.createElement('div');
    div.classList.add('employee');
    div.innerHTML = `
      <div class="employee-info">
        <strong>ID: ${employee.id}</strong>
        <br>
        <strong>Name:</strong> ${employee.name}
        <br>
        <strong>Profession:</strong> ${employee.profession}
        <br>
        <strong>Age:</strong> ${employee.age}
      </div>
      <button class="delete-button" onclick="deleteEmployee(${employee.id})">Delete User</button>
    `;
    employeeList.appendChild(div);
  });
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  displayEmployees();
  if (employees.length === 0) {
    document.getElementById('zeroEmployeesMessage').style.display = 'block'; // Show zero employees message when all employees are deleted
  }
}

function showSuccessMessage() {
  const successMessage = document.getElementById('successMessage');
  successMessage.style.display = 'block';
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 3000);
}

function showErrorMessage() {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.style.display = 'block';
  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 3000);
}
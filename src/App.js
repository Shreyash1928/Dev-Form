import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

const App = () => {
  const [employees, setEmployees] = useState([]);

  // Function to add new employee to the list
  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { ...newEmployee, id: prevEmployees.length + 1 }, // Assign a unique id
    ]);
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <EmployeeForm onAddEmployee={handleAddEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
};

export default App;

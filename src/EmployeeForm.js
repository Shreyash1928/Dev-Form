import React, { useState } from 'react';
import './EmployeeForm.css';  // Import your CSS file

const EmployeeForm = ({ onAddEmployee }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Employee added succesfully");

    const newEmployee = {
      firstName,
      lastName,
      position,
      salary: parseFloat(salary), // Convert salary to number
    };

    // Pass data to parent component
    onAddEmployee(newEmployee);

    // Reset the form
    setFirstName('');
    setLastName('');
    setPosition('');
    setSalary('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="input-field"
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="input-field"
        />
      </label>
      <br />
      <label>
        Position:
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
          className="input-field"
        />
      </label>
      <br />
      <label>
        Salary:
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
          className="input-field"
        />
      </label>
      <br />
      <button type="submit" className="submit-button">
        Add Employee
      </button>
    </form>
  );
};

export default EmployeeForm;

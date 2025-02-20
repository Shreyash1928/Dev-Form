import React from 'react';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <DataGrid
        dataSource={employees}
        keyExpr="id" // Unique key for each row (you can generate one if needed)
        showBorders={true}
      >
        <Column dataField="firstName" caption="First Name" />
        <Column dataField="lastName" caption="Last Name" />
        <Column dataField="position" caption="Position" />
        <Column dataField="salary" caption="Salary" format="currency" />
      </DataGrid>
    </div>
  );
};

export default EmployeeList;

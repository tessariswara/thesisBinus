import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const users = [
 { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Engineer', department: 'Engineering', status: 'Active' },
 { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', role: 'Engineer', department: 'Engineering', status: 'Active' },
 // Add more users as needed
];

const columns = [
 { field: 'id', headerName: 'ID', width: 100 },
 { field: 'name', headerName: 'Name', width: 200 },
 { field: 'email', headerName: 'Email', width: 250 },
 { field: 'role', headerName: 'Role', width: 150 },
 { field: 'department', headerName: 'Department', width: 150 },
 { field: 'status', headerName: 'Status', width: 150 },
];

function UserManagement() {
 const [userList, setUserList] = useState(users);

 return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid rows={userList} columns={columns} pageSize={5} />
    </div>
 );
}

export default UserManagement;

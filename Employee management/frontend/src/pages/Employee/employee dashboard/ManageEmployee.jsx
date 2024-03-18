import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeToDelete, setEmployeeToDelete] = useState(null); // Track employee to delete

  useEffect(() => {
    fetch('http://localhost:8080/employee/employees/')
      .then(response => response.json())
      .then(data => setEmployees(data.data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  const handleDelete = (id) => {
    // Set the employee to delete
    setEmployeeToDelete(id);
  };

  const confirmDelete = async () => {
    try {
      await fetch(`http://localhost:8080/employee/deleteEmployee/${employeeToDelete}`, {
        method: 'DELETE',
      });
      // Update the employee list after deletion
      setEmployees(prevEmployees => prevEmployees.filter(employee => employee._id !== employeeToDelete));
      setEmployeeToDelete(null); // Reset employee to delete
      toast.success('Employee deleted successfully', { position: toast.POSITION.TOP_CENTER });
    } catch (error) {
      console.error('Error deleting employee:', error);
      toast.error('Error deleting employee', { position: toast.POSITION.TOP_CENTER });
    }
  };

  return (
    <div className="container">
      <h2>All Employees</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="tableHeader">First Name</th>
            <th className="tableHeader">Last Name</th>
            <th className="tableHeader">NIC</th>
            <th className="tableHeader">Gender</th>
            <th className="tableHeader">Date of Birth</th>
            <th className="tableHeader">Contact Number</th>
            <th className="tableHeader">Email</th>
            <th className="tableHeader">Qualifications</th>
            <th className="tableHeader">Position</th>
            <th className="tableHeader">Date of Joining</th>
            <th className="tableHeader">Termination Date</th>
            <th className="tableHeader">Manage</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee._id}>
              <td>{employee.FirstName}</td>
              <td>{employee.LastName}</td>
              <td>{employee.Nic}</td>
              <td>{employee.gender}</td>
              <td>{new Date(employee.dob).toLocaleDateString()}</td>
              <td>{employee.contactNo}</td>
              <td>{employee.email}</td>
              <td>{employee.qualifications}</td>
              <td>{employee.position}</td>
              <td>{new Date(employee.dateOfJoining).toLocaleDateString()}</td>
              <td>{employee.terminationDate ? new Date(employee.terminationDate).toLocaleDateString() : '-'}</td>
              <td>
                <Link to={`/admin/dashboard/edit-employee/${employee._id}`}>
                  Edit
                </Link>
                {' | '}
                <button onClick={() => handleDelete(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {employeeToDelete && (
        <div className="modal">
          <div className="modalContent">
            <p>Do you want to delete this employee?</p>
            <div>
              <button onClick={() => confirmDelete()}>Yes</button>
              <button onClick={() => setEmployeeToDelete(null)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageEmployee;

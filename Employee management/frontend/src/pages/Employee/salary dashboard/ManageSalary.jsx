import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageSalary = () => {
  const [salaries, setSalaries] = useState([]);
  const [salaryToDelete, setSalaryToDelete] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/salary/salaries')
      .then(response => response.json())
      .then(data => setSalaries(data))
      .catch(error => console.error('Error fetching salaries:', error));
  }, []);

  const handleDelete = (id) => {
    setSalaryToDelete(id);
  };

  const confirmDelete = async () => {
    try {
      await fetch(`http://localhost:8080/salary/deleteSalary/${salaryToDelete}`, {
        method: 'DELETE',
      });
      setSalaries(prevSalaries => prevSalaries.filter(salary => salary._id !== salaryToDelete));
      setSalaryToDelete(null);
      toast.success('Salary deleted successfully', { position: toast.POSITION.TOP_CENTER });
    } catch (error) {
      console.error('Error deleting salary:', error);
      toast.error('Error deleting salary', { position: toast.POSITION.TOP_CENTER });
    }
  };

  return (
    <div className="container">
      <h2>All Salaries</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="tableHeader">Name</th>
            <th className="tableHeader">Eid</th>
            <th className="tableHeader">NIC</th>
            <th className="tableHeader">Job Position</th>
            <th className="tableHeader">Number of Dates</th>
            <th className="tableHeader">Ot Hours</th>
            <th className="tableHeader">Basic Salary</th>
            <th className="tableHeader">Net Salary</th>
            <th className="tableHeader">Manage</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map(salary => (
            <tr key={salary._id}>
              <td>{salary.Name}</td>
              <td>{salary.Eid}</td>
              <td>{salary.Nic}</td>
              <td>{salary.JobPosition}</td>
              <td>{salary.NumberofDates}</td>
              <td>{salary.OtHours}</td>
              <td>{salary.BasicSalary}</td>
              <td>{salary.NetSalary}</td>
              <td>
                <Link to={`/employee/salary-dashboard/edit-salary/${salary._id}`}>
                  Edit
                </Link>
                {' | '}
                <button onClick={() => handleDelete(salary._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {salaryToDelete && (
        <div className="modal">
          <div className="modalContent">
            <p>Do you want to delete this salary record?</p>
            <div>
              <button onClick={() => confirmDelete()}>Yes</button>
              <button onClick={() => setSalaryToDelete(null)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageSalary;

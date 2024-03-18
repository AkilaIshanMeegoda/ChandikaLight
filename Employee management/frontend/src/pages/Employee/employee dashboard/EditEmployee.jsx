import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';

const EditEmployee = () => {
  const { id } = useParams(); // Get the ID from the URL params
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Nic: '',
    gender: '',
    dob: '',
    contactNo: '',
    email: '',
    qualifications: '',
    position: '',
    dateOfJoining: '',
    terminationDate: '',
  });

  useEffect(() => {
    // Fetch the employee by ID
    axios.get(`http://localhost:5555/employees/getEmployee/${id}`)
      .then(response => {
        const { FirstName, LastName, Nic, gender, dob, contactNo, email, qualifications, position, dateOfJoining, terminationDate } = response.data;
        setFormData({ FirstName, LastName, Nic, gender, dob, contactNo, email, qualifications, position, dateOfJoining, terminationDate });
      })
      .catch(error => console.error('Error fetching employee:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update employee using PUT request
      await axios.put(`http://localhost:8080/employees/updateEmployee/${id}`, formData);
      console.log('Employee updated successfully:', formData);
      // Show success message notification
      toast.success('Employee data updated successfully', { position: toast.POSITION.TOP_CENTER });
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="FirstName">First Name:</label>
        <input type="text" id="FirstName" name="FirstName" value={formData.FirstName} onChange={handleChange} required />
        <label htmlFor="LastName">Last Name:</label>
        <input type="text" id="LastName" name="LastName" value={formData.LastName} onChange={handleChange} required />
        <label htmlFor="Nic">NIC:</label>
        <input type="text" id="Nic" name="Nic" value={formData.Nic} onChange={handleChange} required />
        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} required />
        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
        <label htmlFor="contactNo">Contact Number:</label>
        <input type="text" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <label htmlFor="qualifications">Qualifications:</label>
        <textarea id="qualifications" name="qualifications" value={formData.qualifications} onChange={handleChange} required />
        <label htmlFor="position">Position:</label>
        <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} required />
        <label htmlFor="dateOfJoining">Date of Joining:</label>
        <input type="date" id="dateOfJoining" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} required />
        <label htmlFor="terminationDate">Termination Date:</label>
        <input type="date" id="terminationDate" name="terminationDate" value={formData.terminationDate} onChange={handleChange} />
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployee;

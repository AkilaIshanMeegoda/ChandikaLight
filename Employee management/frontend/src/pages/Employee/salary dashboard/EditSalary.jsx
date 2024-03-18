import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditSalary = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    Name: '',
    Eid: '',
    Nic: '',
    JobPosition: '',
    NumberofDates: '',
    OtHours: '',
    BasicSalary: '',
    NetSalary: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/salary/getSalary/${id}`)
      .then(response => {
        const { Name, Eid, Nic, JobPosition, NumberofDates, OtHours, BasicSalary, NetSalary } = response.data;
        setFormData({ Name, Eid, Nic, JobPosition, NumberofDates, OtHours, BasicSalary, NetSalary });
      })
      .catch(error => console.error('Error fetching salary:', error));
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
      await axios.put(`http://localhost:8080/salary/updateSalary/${id}`, formData);
      console.log('Salary updated successfully:', formData);
      toast.success('Salary data updated successfully', { position: toast.POSITION.TOP_CENTER });
    } catch (error) {
      console.error('Error updating salary:', error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Salary</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name:</label>
        <input type="text" id="Name" name="Name" value={formData.Name} onChange={handleChange} required />
        <label htmlFor="Eid">Eid:</label>
        <input type="text" id="Eid" name="Eid" value={formData.Eid} onChange={handleChange} required />
        <label htmlFor="Nic">NIC:</label>
        <input type="text" id="Nic" name="Nic" value={formData.Nic} onChange={handleChange} required />
        <label htmlFor="JobPosition">Job Position:</label>
        <input type="text" id="JobPosition" name="JobPosition" value={formData.JobPosition} onChange={handleChange} required />
        <label htmlFor="NumberofDates">Number of Dates:</label>
        <input type="text" id="NumberofDates" name="NumberofDates" value={formData.NumberofDates} onChange={handleChange} required />
        <label htmlFor="OtHours">Ot Hours:</label>
        <input type="text" id="OtHours" name="OtHours" value={formData.OtHours} onChange={handleChange} required />
        <label htmlFor="BasicSalary">Basic Salary:</label>
        <input type="text" id="BasicSalary" name="BasicSalary" value={formData.BasicSalary} onChange={handleChange} required />
        <label htmlFor="NetSalary">Net Salary:</label>
        <input type="text" id="NetSalary" name="NetSalary" value={formData.NetSalary} onChange={handleChange} required />
        <button type="submit">Update Salary</button>
      </form>
    </div>
  );
};

export default EditSalary;

import React, { useState } from 'react';
import axios from 'axios';

const AddSalary = () => {
  // State to manage form inputs
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

  // State for the success message
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add logic here to handle form submission and update salary
      const response = await axios.post('http://localhost:8080/salary/createSalary', formData);
      console.log('Form submitted:', formData);
      console.log('Response:', response.data);
      // Show success message
      setSuccessMessage('Salary added Successfully');
      // Reset form data after submission
      setFormData({
        Name: '',
        Eid: '',
        Nic: '',
        JobPosition: '',
        NumberofDates: '',
        OtHours: '',
        BasicSalary: '',
        NetSalary: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      {/* Sidebar */}
      <div className="bg-sidebar-blue w-64 h-screen flex-shrink-0"></div>

      {/* Form Container */}
      <div className="flex-grow flex justify-center">
        <form onSubmit={handleSubmit} className="max-w-lg w-full p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Add Salary</h2>
          {/* Form Content */}
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                id="Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* Eid */}
            <div className="mb-6">
              <label htmlFor="Eid" className="block text-sm font-medium text-gray-700">Eid:</label>
              <input
                type="text"
                id="Eid"
                name="Eid"
                value={formData.Eid}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* Nic */}
            <div className="mb-6">
              <label htmlFor="Nic" className="block text-sm font-medium text-gray-700">Nic:</label>
              <input
                type="text"
                id="Nic"
                name="Nic"
                value={formData.Nic}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* JobPosition */}
            <div className="mb-6">
              <label htmlFor="JobPosition" className="block text-sm font-medium text-gray-700">Job Position:</label>
              <input
                type="text"
                id="JobPosition"
                name="JobPosition"
                value={formData.JobPosition}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* NumberofDates */}
            <div className="mb-6">
              <label htmlFor="NumberofDates" className="block text-sm font-medium text-gray-700">Number of Dates:</label>
              <input
                type="text"
                id="NumberofDates"
                name="NumberofDates"
                value={formData.NumberofDates}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* OtHours */}
            <div className="mb-6">
              <label htmlFor="OtHours" className="block text-sm font-medium text-gray-700">Ot Hours:</label>
              <input
                type="text"
                id="OtHours"
                name="OtHours"
                value={formData.OtHours}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* BasicSalary */}
            <div className="mb-6">
              <label htmlFor="BasicSalary" className="block text-sm font-medium text-gray-700">Basic Salary:</label>
              <input
                type="text"
                id="BasicSalary"
                name="BasicSalary"
                value={formData.BasicSalary}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* NetSalary */}
            <div className="mb-6">
              <label htmlFor="NetSalary" className="block text-sm font-medium text-gray-700">Net Salary:</label>
              <input
                type="text"
                id="NetSalary"
                name="NetSalary"
                value={formData.NetSalary}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
          </div>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full">Add Salary</button>
        </form>
        {/* Success Message Popup */}
        {successMessage && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
              <p className="text-lg text-green-600">{successMessage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddSalary;

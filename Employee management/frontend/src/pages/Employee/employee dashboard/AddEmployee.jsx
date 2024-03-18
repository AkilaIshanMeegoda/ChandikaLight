import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
  // State to manage form inputs
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

  // State for the success message
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add logic here to handle form submission and update employee
      const response = await axios.post('http://localhost:8080/employee/createEmployee', formData);
      console.log('Form submitted:', formData);
      console.log('Response:', response.data);
      // Show success message
      setSuccessMessage('Employee added Successfully');
      // Reset form data after submission
      setFormData({
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
          <h2 className="text-2xl font-semibold mb-4 text-center">Add Employee</h2>
          {/* Form Content */}
          <div className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <div className="mb-6">
              <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">First Name:</label>
              <input
                type="text"
                id="FirstName"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* Last Name */}
            <div className="mb-6">
              <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
              <input
                type="text"
                id="LastName"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* NIC */}
            <div className="mb-6">
              <label htmlFor="Nic" className="block text-sm font-medium text-gray-700">NIC:</label>
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
            {/* Gender */}
            <div className="mb-6">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender:</label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* Date of Birth */}
            <div className="mb-6">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* Contact Number */}
            <div className="mb-6">
              <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700">Contact Number:</label>
              <input
                type="text"
                id="contactNo"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* Qualifications */}
            <div className="col-span-2 mb-6">
              <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700">Qualifications:</label>
              <textarea
                id="qualifications"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded p-3 resize-none"
              ></textarea>
            </div>
            {/* Position */}
            <div className="col-span-2 mb-6">
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position:</label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* Date of Joining */}
            <div className="mb-6">
              <label htmlFor="dateOfJoining" className="block text-sm font-medium text-gray-700">Date of Joining:</label>
              <input
                type="date"
                id="dateOfJoining"
                name="dateOfJoining"
                value={formData.dateOfJoining}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* Termination Date */}
            <div className="mb-6">
              <label htmlFor="terminationDate" className="block text-sm font-medium text-gray-700">Termination Date:</label>
              <input
                type="date"
                id="terminationDate"
                name="terminationDate"
                value={formData.terminationDate}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
          </div>
          <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full">Add Employee</button>
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

export default AddEmployee;

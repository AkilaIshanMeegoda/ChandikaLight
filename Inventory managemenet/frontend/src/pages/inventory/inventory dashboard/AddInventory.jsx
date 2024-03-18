import React, { useState } from 'react';
import axios from 'axios';

const AddInventory = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    itemName: '',
    quantityInStock: 0,
    unitPrice: 0,
    dateAdded: '',
    description: '',
  });

  // State for the success message
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add logic here to handle form submission and update inventory
      const response = await axios.post('http://localhost:5555/inventory/', formData);
      console.log('Form submitted:', formData);
      console.log('Response:', response.data);
      // Show success message
      setSuccessMessage('Item added Successfully');
      // Reset form data after submission
      setFormData({
        itemName: '',
        quantityInStock: 0,
        unitPrice: 0,
        dateAdded: '',
        description: '',
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
          <h2 className="text-2xl font-semibold mb-4 text-center">Add Inventory</h2>
          {/* Form Content */}
          <div className="grid grid-cols-2 gap-4">
            {/* Item Name */}
            <div className="mb-6">
              <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">Item Name:</label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* Quantity in Stock */}
            <div className="mb-6">
              <label htmlFor="quantityInStock" className="block text-sm font-medium text-gray-700">Quantity in Stock:</label>
              <input
                type="number"
                id="quantityInStock"
                name="quantityInStock"
                value={formData.quantityInStock}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* Unit Price */}
            <div className="mb-6">
              <label htmlFor="unitPrice" className="block text-sm font-medium text-gray-700">Unit Price:</label>
              <input
                type="number"
                id="unitPrice"
                name="unitPrice"
                value={formData.unitPrice}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* Date Added */}
            <div className="mb-6">
              <label htmlFor="dateAdded" className="block text-sm font-medium text-gray-700">Date Added:</label>
              <input
                type="date"
                id="dateAdded"
                name="dateAdded"
                value={formData.dateAdded}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded p-3"
              />
            </div>
            {/* Description */}
            <div className="col-span-2 mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded p-3 resize-none"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full">Add Item</button>
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

export default AddInventory;

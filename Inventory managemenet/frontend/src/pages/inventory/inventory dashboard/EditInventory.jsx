import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';

const EditInventory = () => {
  const { id } = useParams(); // Get the ID from the URL params
  const [formData, setFormData] = useState({
    itemName: '',
    quantityInStock: 0,
    unitPrice: 0,
    dateAdded: '',
    description: '',
  });

  useEffect(() => {
    // Fetch the inventory item by ID
    axios.get(`http://localhost:5555/inventory/${id}`)
      .then(response => {
        const { itemName, quantityInStock, unitPrice, dateAdded, description } = response.data;
        setFormData({ itemName, quantityInStock, unitPrice, dateAdded, description });
      })
      .catch(error => console.error('Error fetching inventory item:', error));
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
      // Update inventory item using PUT request
      await axios.put(`http://localhost:5555/inventory/${id}`, formData);
      console.log('Item updated successfully:', formData);
      // Show success message notification
      toast.success('Your Inventory data is successfully updated', { position: toast.POSITION.TOP_CENTER });
    } catch (error) {
      console.error('Error updating inventory item:', error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Inventory Item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Item Name:</label>
        <input type="text" id="itemName" name="itemName" value={formData.itemName} onChange={handleChange} required />
        <label htmlFor="quantityInStock">Quantity in Stock:</label>
        <input type="number" id="quantityInStock" name="quantityInStock" value={formData.quantityInStock} onChange={handleChange} required />
        <label htmlFor="unitPrice">Unit Price:</label>
        <input type="number" id="unitPrice" name="unitPrice" value={formData.unitPrice} onChange={handleChange} required />
        <label htmlFor="dateAdded">Date Added:</label>
        <input type="date" id="dateAdded" name="dateAdded" value={formData.dateAdded} onChange={handleChange} required />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default EditInventory;

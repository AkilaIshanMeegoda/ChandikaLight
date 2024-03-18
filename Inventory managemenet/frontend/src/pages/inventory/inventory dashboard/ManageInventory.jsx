import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [itemToDelete, setItemToDelete] = useState(null); // Track item to delete

  useEffect(() => {
    fetch('http://localhost:5555/inventory/')
      .then(response => response.json())
      .then(data => setInventory(data.data))
      .catch(error => console.error('Error fetching inventory:', error));
  }, []);

  const handleDelete = (id) => {
    // Set the item to delete
    setItemToDelete(id);
  };

  const confirmDelete = async () => {
    try {
      await fetch(`http://localhost:5555/inventory/${itemToDelete}`, {
        method: 'DELETE',
      });
      // Update the inventory list after deletion
      setInventory(prevInventory => prevInventory.filter(item => item._id !== itemToDelete));
      setItemToDelete(null); // Reset item to delete
      toast.success('Item deleted successfully', { position: toast.POSITION.TOP_CENTER });
    } catch (error) {
      console.error('Error deleting inventory item:', error);
    }
  };

  return (
    <div className="container">
      <h2>All Inventory</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="tableHeader">Item Name</th>
            <th className="tableHeader">Quantity in Stock</th>
            <th className="tableHeader">Unit Price</th>
            <th className="tableHeader">Date Added</th>
            <th className="tableHeader">Description</th>
            <th className="tableHeader">Manage</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item._id}>
              <td>{item.itemName}</td>
              <td>{item.quantityInStock}</td>
              <td>{item.unitPrice}</td>
              <td>{new Date(item.dateAdded).toLocaleDateString()}</td>
              <td>{item.description}</td>
              <td>
                <Link to={`/admin/dashboard/edit-inventory/${item._id}`}>
                  Edit
                </Link>
                {' | '}
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {itemToDelete && (
        <div className="modal">
          <div className="modalContent">
            <p>Do you want to delete this item?</p>
            <div>
              <button onClick={() => confirmDelete()}>Yes</button>
              <button onClick={() => setItemToDelete(null)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageInventory;

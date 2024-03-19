import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


const ViewMaintain = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8070/maintain/')
      .then(response => {
        setSchedules(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching schedules:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setLoading(true);
    axios.delete(`http://localhost:8070/maintain/delete/${id}`)
      .then(response => {
        setSchedules(schedules.filter(schedule => schedule._id !== id));
        setLoading(false);
        alert('Schedule deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting schedule:', error);
        setLoading(false);
        alert('Error deleting schedule');
      });
  };

  return (
    <div className="p-4 table-container">
      <h1 className="text-3xl my-4">All Schedules</h1>
      
      <table className="border-collapse border border-gray-500 w-full">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2">Equipment Name</th>
            <th className="border border-gray-500 px-4 py-2">Description</th>
            <th className="border border-gray-500 px-4 py-2">Maintenance type</th>
            <th className="border border-gray-500 px-4 py-2">Sheduled date</th>
            <th className="border border-gray-500 px-4 py-2">Status</th>
            <th className="border border-gray-500 px-4 py-2">Completeded_date</th>
            <th className="border border-gray-500 px-4 py-2">Technician</th>
            <th className="border border-gray-500 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map(schedule => (
            <tr key={schedule._id}>
              <td className="border border-gray-500 px-4 py-2">{schedule.Equipment_name}</td>
              <td className="border border-gray-500 px-4 py-2">{schedule.Description}</td>
              <td className="border border-gray-500 px-4 py-2">{schedule.Maintenance_type}</td>
              <td className="border border-gray-500 px-4 py-2">{schedule.Sheduled_date}</td>
              <td className="border border-gray-500 px-4 py-2">{schedule.Status}</td>
              <td className="border border-gray-500 px-4 py-2">{schedule.Completeded_date}</td>
              <td className="border border-gray-500 px-4 py-2">{schedule.Technician}</td>
              <td className="border border-gray-500 px-4 py-2">{schedule.Actions}</td>
              
              <td className="border border-gray-500 px-4 py-2">
        <button><Link to={`/dashboard/update/${schedule._id}`} className="text-blue-500 mr-2">Update</Link></button>
        <button onClick={() => handleDelete(schedule._id)} className="text-red-500">Delete</button>
      </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewMaintain;

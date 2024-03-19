import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateMaintain = () => {
  const [equipmentName, setEquipmentName] = useState('');
  const [description, setDescription] = useState('');
  const [maintenanceType, setMaintenanceType] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [status, setStatus] = useState('');
  const [completedDate, setCompletedDate] = useState('');
  const [technician, setTechnician] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8070/maintain/get/${id}`)
      .then(response => {
        const { data } = response;
        if (data && data.status === "Record fetched" && data.maintain) {
          const { maintain } = data;
          setEquipmentName(maintain.Equipment_name || ''); // Ensure fallback value for undefined properties
          setDescription(maintain.Description || '');
          setMaintenanceType(maintain.Maintenance_type || '');
          setScheduledDate(maintain.Sheduled_date || '');
          setStatus(maintain.Status || '');
          setCompletedDate(maintain.Completeded_date || '');
          setTechnician(maintain.Technician || '');
        } else {
          console.error("Error fetching schedule:", data ? data.error : "Unexpected response format");
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching schedule:', error);
        setLoading(false);
        // Handle error
      });
  }, [id]);
  

  const handleUpdateMaintain = () => {
    const data = {
      Equipment_name: equipmentName,
      Description: description,
      Maintenance_type: maintenanceType,
      Sheduled_date: scheduledDate,
      Status: status,
      Completeded_date: completedDate,
      Technician: technician,
    };
    setLoading(true);
    axios.put(`http://localhost:8070/maintain/update/${id}`, data)
      .then(() => {
        setLoading(false);
        alert('Maintenance schedule updated successfully');
        navigate('/dashboard/view');
      })
      .catch(error => {
        console.error('Error updating maintenance schedule:', error);
        setLoading(false);
        // Handle error
      });
  };

  return (
    <div className="p-4 table-container">
      <h1 className="text-3xl my-4">Update Maintenance Schedule</h1>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto form-input">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Equipment Name</label>
          <input
            type="text"
            value={equipmentName}
            onChange={(e) => setEquipmentName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Maintenance Type</label>
          <input
            type="text"
            value={maintenanceType}
            onChange={(e) => setMaintenanceType(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Scheduled Date</label>
          <input
            type="text"
            value={scheduledDate}
            onChange={(e) => setScheduledDate(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Status</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Completed Date</label>
          <input
            type="text"
            value={completedDate}
            onChange={(e) => setCompletedDate(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Technician</label>
          <input
            type="text"
            value={technician}
            onChange={(e) => setTechnician(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleUpdateMaintain}>
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateMaintain;

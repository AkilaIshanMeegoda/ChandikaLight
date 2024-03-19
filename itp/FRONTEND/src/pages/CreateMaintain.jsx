import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 

const CreateMaintain = () => {
  const [Equipment_name, setEquipment_name] = useState('');
  const [Description, setDescription] = useState('');
  const [Maintenance_type, setMaintenance_type] = useState('');
  const [Sheduled_date, setSheduled_date] = useState('');
  const [Status, setStatus] = useState('');
  const [Completeded_date, setCompleteded_date] = useState('');
  const [Technician, setTechnician] = useState('');
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveMaintain = () => {
    const data = {
      Equipment_name,
      Description,
      Maintenance_type,
      Sheduled_date,
      Status,
      Completeded_date,
      Technician,
    };
    setLoading(true);
    axios
      .post(`http://localhost:8070/maintain/add`, data)
      .then(() => {
        setLoading(false);
        alert('Maintain schedule added successfully'); 
        navigate('/'); 
        setLoading(false);
        alert('Error occurred while adding maintain schedule'); 
        console.error(err);
      });
  };

  return (
    <div className="p-4 table-container">
      <h1 className="text-3xl my-4">Add New Maintenance Schedule</h1>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto form-input">
        {                }
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Equipment Name</label>
          <input
            type="text"
            value={Equipment_name}
            onChange={(e) => setEquipment_name(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Description</label>
          <input
            type="text"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Maintenance_type</label>
          <input
            type="text"
            value={Maintenance_type}
            onChange={(e) => setMaintenance_type(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Sheduled_date</label>
          <input
            type="text"
            value={Sheduled_date}
            onChange={(e) => setSheduled_date(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Status</label>
          <input
            type="text"
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Completeded_date</label>
          <input
            type="text"
            value={Completeded_date}
            onChange={(e) => setCompleteded_date(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Technician</label>
          <input
            type="text"
            value={Technician}
            onChange={(e) => setTechnician(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveMaintain}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateMaintain;


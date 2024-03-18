import React, { useState, useEffect } from 'react';

import axios from 'axios'; 
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';

const EditService = () => {
  const [sname, setService] = useState('');
  const [availability, setAvailability] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/service/get/${id}`)
      .then((response) => {
        setService(response.data.sname);
        setAvailability(response.data.availability);
        setType(response.data.type);
        setDescription(response.data.description);
        setStatus(response.data.status);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Unsuccessful!', { variant: 'error'})
        alert('An error happened');
        console.log(error);
      });
  }, []);

  const handleEditService = () => {
    const data = {
      sname,
      availability,
      type,
      description,
      status
    };
    setLoading(true);
    axios
      .put(`http://localhost:3000/service/update/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Serviced edited successfully!', { variant: 'success'});
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened');
        console.log(error);
      });
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex items-center justify-center h-24 bg-blue-900">
        <img
          src="../pngs/logo.png"
          alt="Logo"
          className="w-16 h-16 mr-4"
        />
      </div>
      <div className="flex items-center justify-center bg-gray-200">
        <p className="text-2xl">Update a service</p>
      </div>
      <div className="flex items-center justify-center bg-blue-900">
        <Link to="/">
          <button
            className="px-4 py-2 text-white bg-red-600 rounded-full"
          >
            Services
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center col-span-2 mt-8">
        <div className="flex flex-col items-center p-8 text-white bg-red-600 rounded-lg h-96 w-80">
          <div className="w-full mb-4">
            <label className="w-full">Service</label>
            <input
              type="text"
              value={sname}
              onChange={(e) => setService(e.target.value)}
              className="w-full text-white bg-red-600"
            />
          </div>
          <div className="w-full mb-4">
            <label className="w-full">Validity Period(Days)</label>
            <input
              type="number"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="w-full text-white bg-red-600"
            />
          </div>
          <div className="w-full mb-4">
            <label className="w-full">Type</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full text-white bg-red-600"
            />
          </div>
          <div className="w-full mb-4">
            <label className="w-full">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full text-white bg-red-600"
            />
          </div>
          <div className="w-full mb-4">
            <label className="w-full">Status</label>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full text-white bg-red-600"
            />
          </div>
          <button
            className="px-4 py-2 text-white bg-gray-700 rounded cursor-pointer"
            onClick={handleEditService}
          >
            Save
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default EditService;

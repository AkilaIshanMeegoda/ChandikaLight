import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

const CreateService = () => {
  const [sname, setService] = useState("");
  const [availability, setAvailability] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [icon, setIcon] = useState("person.svg"); //default
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveService = () => {
    const data = {
      sname,
      availability,
      type,
      description,
      status,
      icon,
    };

    setLoading(true);
    axios
      .post("http://localhost:3000/service/add", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Service added successfully!", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An error occurred!", { variant: "error" });
        alert("An error happened");
        console.log(error);
      });
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="flex items-center justify-center h-24 bg-blue-900">
        <img
          src="../pngs/logo.png"
          alt="Logo"
          className="w-16 h-16 mr-4"
        />
      </div>
      <div className="flex items-center justify-center bg-gray-200">
        <h1 className="text-2xl">Add a service</h1>
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
      <div className="flex items-center justify-center col-span-3">
        <div className="flex flex-col items-center p-4 bg-red-600 rounded-lg">
          <label className="mb-2">Service</label>
          <input
            type="text"
            value={sname}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-2 py-1 mb-2 border border-gray-400 rounded"
          />
          <label className="mb-2">Validity Period (Days)</label>
          <input
            type="number"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full px-2 py-1 mb-2 border border-gray-400 rounded"
          />
          <label className="mb-2">Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-2 py-1 mb-2 border border-gray-400 rounded"
          />
          <label className="mb-2">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-2 py-1 mb-2 border border-gray-400 rounded"
          />
          <label className="mb-2">Status</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-2 py-1 mb-2 border border-gray-400 rounded"
          />
          <label className="mb-2">Icon</label>
          <select
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            className="w-full px-2 py-1 mb-2 border border-gray-400 rounded"
          >
            <option value="bulb.svg">Lighting</option>
            <option value="hut.svg">Hut Services</option>
            <option value="money.svg">Financial</option>
            <option value="person.svg">Social</option>
            <option value="speaker.svg">Sound</option>
            <option value="vehicle.svg">Transport</option>
          </select>
          <button
            onClick={handleSaveService}
            className="px-4 py-2 mt-4 text-white bg-red-700 rounded-full"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateService;

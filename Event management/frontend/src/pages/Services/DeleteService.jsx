import React, { useState } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

const DeleteService = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteService = () => {
    axios
      .delete(`http://localhost:3000/service/delete/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Service deleted successfully!", {
          variant: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Deletion unsuccessful!", { variant: "error" });
        alert("An error happened");
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
        <p className="text-2xl">Services management</p>
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
        <p className="mb-10 text-xl">Are you sure?</p>
        <div className="flex gap-4">
          <Link to="/all">
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded"
            >
              Cancel
            </button>
          </Link>
          <button
            onClick={handleDeleteService}
            className="px-4 py-2 text-white bg-red-600 rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteService;

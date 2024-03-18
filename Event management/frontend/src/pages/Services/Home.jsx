import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
      <div className="flex flex-col items-center mt-8">
        <Link
          to="/all"
          className="mb-4 text-xl text-white w-80"
        >
          <button
            className="px-4 py-2 text-white bg-red-600 rounded-full"
          >
            View All Services
          </button>
        </Link>
        <Link
          to="/service/add"
          className="text-xl text-white w-80"
        >
          <button
            className="px-4 py-2 text-white bg-red-600 rounded-full"
          >
            Add a Service
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

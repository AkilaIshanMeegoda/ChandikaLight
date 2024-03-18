import React, { useEffect, useState } from "react";
import { Table } from 'flowbite-react';
import ServiceTable from "../../components/home/ServiceTable";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/service/all")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="px-4 pb-4 my-4 h-screen">
       <div className="p-4 mb-6 shadow-lg rounded-xl bg-sidebar-blue flex justify-center items-center">
        <h2 className="text-3xl font-bold text-white ">Services and Packages</h2>
      </div>
      <div className="col-span-3">
        <ServiceTable services={services} />
      </div>
    </div>
  );
};

export default AllServices;

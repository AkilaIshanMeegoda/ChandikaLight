import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
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
    <div className="">
      <div className="flex items-center justify-center w-full h-16 mt-4 mb-4 text-white bg-blue-900">
        Services and Packages
      </div>
      <div className="col-span-3">
        <ServiceTable services={services} />
      </div>
    </div>
  );
};

export default AllServices;

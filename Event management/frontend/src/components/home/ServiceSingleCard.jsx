import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import ServiceModal from "./ServiceModal";

const ServiceSingleCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div >
      <h2 >
        <img
          src={`http://localhost:8070/icons/${item.icon}`}
          alt={item.icon}
          width="70"
          height="70"
        />
      </h2>
      <h4 >{item._id}</h4>
      <div >
        <PiBookOpenTextLight />
        <h2 >{item.sname}</h2>
      </div>
      <div >
        <BiUserCircle  />
        <h2 >{item.type}</h2>
      </div>
      <div >
        <BiShow
          
          onClick={() => setShowModal(true)}
        />
        <Link to={`/service/get/${item._id}`}>
          <BsInfoCircle />
        </Link>
        <Link to={`/service/update/${item._id}`}>
          <AiOutlineEdit  />
        </Link>
        <Link to={`/service/delete/${item._id}`}>
          <MdOutlineDelete />
        </Link>
      </div>
      {showModal && (
        <ServiceModal service={item} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ServiceSingleCard;

import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { MdDescription } from 'react-icons/md';


const ServiceModal = ({ service, onClose }) => {
  return (
    <div
      
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        
      >
        <AiOutlineClose
          
          onClick={onClose}
        />
        <h2 >
          {service.type}
        </h2>
        <h4 >{service._id}</h4>
        <div >
          <PiBookOpenTextLight  />
          <h2 >{service.sname}</h2>
        </div>
        <div >
          <MdDescription  />
          <h2 >{service.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;

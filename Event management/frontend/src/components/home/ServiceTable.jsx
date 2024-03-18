import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const ServiceTable = ({ services }) => {
  return (
    <table className="mx-auto text-white bg-blue-900 border-collapse w-80">
      <thead className="bg-black">
        <tr className="border-b-2 border-white">
          <th className="p-2 text-left">No</th>
          <th className="p-2 text-left">Service</th>
          <th className="p-2 text-left">Availability</th>
          <th className="p-2 text-left">Description</th>
          <th className="p-2 text-left">Status</th>
          <th className="p-2 text-left">Operations</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service, index) => (
          <tr
            key={service._id}
            className="items-center justify-center border-b border-white"
          >
            <td className="p-2">{index + 1}</td>
            <td className="p-2">{service.sname}</td>
            <td className="p-2">{service.availability}</td>
            <td className="p-2">{service.description}</td>
            <td className="p-2">{service.status}</td>
            <td className="p-2">
              <div className="flex gap-4">
                <Link to={`/admin/service/dashboard/update/${service._id}`}>
                  <AiOutlineEdit className="text-white" />
                </Link>
                <Link to={`/admin/service/dashboard/delete/${service._id}`}>
                  <MdOutlineDelete className="text-red-500" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ServiceTable;

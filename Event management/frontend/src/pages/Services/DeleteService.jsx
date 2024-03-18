import React from "react";
import { Button } from "flowbite-react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

const DeleteService = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteService = () => {
    axios
      .delete(`http://localhost:3000/service/delete/${id}`)
      .then(() => {
        enqueueSnackbar("Service deleted successfully!", {
          variant: "success",
        });
        navigate("/admin/service/dashboard/all");
      })
      .catch((error) => {
        enqueueSnackbar("Deletion unsuccessful!", { variant: "error" });
        alert("An error happened");
        console.log(error);
      });
  };

  return (
    <div className="px-4 pb-4 my-4 h-screen">
      <div className="flex flex-col items-center col-span-2 mt-8">
        <p className="mb-10 text-xl">
          Are you sure you want to this Service/Package?
        </p>
        <div className="flex gap-14">
          <Link to="/admin/service/dashboard/all">
            <Button color="success">Cancel</Button>
          </Link>

          <Button color="warning" onClick={handleDeleteService}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteService;

import React, { useState, useEffect } from "react";
import { Label, TextInput } from "flowbite-react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const EditService = () => {
  const [sname, setService] = useState("");
  const [availability, setAvailability] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/service/get/${id}`)
      .then((response) => {
        setService(response.data.sname);
        setAvailability(response.data.availability);
        setType(response.data.type);
        setDescription(response.data.description);
        setStatus(response.data.status);
      })
      .catch((error) => {
        enqueueSnackbar("Unsuccessful!", { variant: "error" });
        alert("An error happened");
        console.log(error);
      });
  }, []);

  const handleEditService = () => {
    const data = {
      sname,
      availability,
      type,
      description,
      status,
    };

    axios
      .put(`http://localhost:3000/service/update/${id}`, data)
      .then(() => {
        enqueueSnackbar("Serviced edited successfully!", {
          variant: "success",
        });
        navigate("/admin/service/dashboard/all");
      })
      .catch((error) => {
        alert("An error happened");
        console.log(error);
      });
  };

  function validateAvailability(x) {
    if (isNaN(x) || x < 1 || x > 30) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <div className="px-4 pb-4 my-4 h-screen ">
      <div className="p-4 mb-6 shadow-lg rounded-xl bg-sidebar-blue flex justify-center items-center">
        <h2 className="text-3xl font-bold text-white ">Update Service</h2>
      </div>

      <div className=" w-[400px]">
        <div>
          <div className="mb-2 ">
            <Label htmlFor="small" value="Service" />
          </div>
          <TextInput
            className="w-full"
            id=""
            type="text"
            value={sname}
            onChange={(e) => setService(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 ">
            <Label htmlFor="base" value="Validity Period (Days)" />
          </div>
          <TextInput
            id="availability"
            type="text"
            sizing="md"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          />
        </div>
        <div>
          <p id="p1" className="text-red-500 text-xs"></p>
        </div>
        <div>
          <div className="mb-2 ">
            <Label htmlFor="large" value="Type" />
          </div>
          <TextInput
            id="large"
            type="text"
            sizing="lg"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 ">
            <Label htmlFor="large" value="Description" />
          </div>
          <TextInput
            id="large"
            type="text"
            sizing="lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 ">
            <Label htmlFor="large" value="Status" />
          </div>
          <TextInput
            id="large"
            type="text"
            sizing="lg"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div><br/>
        <div className="flex justify-center items-center">
          <Button
            color="dark"
            onClick={() => {
              if (validateAvailability(availability)) {
                handleEditService();
              } else {
                document.getElementById("p1").innerHTML =
                  "Validity period must be a number between 1 and 30!";
              }
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditService;

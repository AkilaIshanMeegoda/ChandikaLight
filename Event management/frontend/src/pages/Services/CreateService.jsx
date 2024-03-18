import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Select } from "flowbite-react";
import { Button } from "flowbite-react";

const CreateService = () => {
  const [sname, setService] = useState("");
  const [availability, setAvailability] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [icon, setIcon] = useState("person.svg"); //default
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

    axios
      .post("http://localhost:3000/service/add", data)
      .then(() => {
        enqueueSnackbar("Service added successfully!", { variant: "success" });
        navigate("/admin/service/dashboard");
      })
      .catch((error) => {
        enqueueSnackbar("An error occurred!", { variant: "error" });
        alert("An error happened");
        console.log(error);
      });
  };

function validateAvailability(x){
    if(x < 1 || x > 30){
      return false;
    }else{
      return true;
    }
  }

  return (
    <div className="px-4 pb-4 my-4 h-screen ">
      <div className="p-4 mb-6 shadow-lg rounded-xl bg-sidebar-blue flex justify-center items-center">
        <h2 className="text-3xl font-bold text-white ">Create a Service</h2>
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
            id=""
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
        </div>
        <div className="">
          <div className="mb-2 ">
            <Label htmlFor="countries" value="Select Icon" />
          </div>
          <Select
            id="countries"
            required
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          >
            <option value="bulb.svg">Lighting</option>
            <option value="hut.svg">Hut Services</option>
            <option value="money.svg">Financial</option>
            <option value="person.svg">Social</option>
            <option value="speaker.svg">Sound</option>
            <option value="vehicle.svg">Transport</option>
          </Select>
        </div>
        <div className="flex justify-center items-center">
          <Button
            color="dark"
            onClick={() => {
              if(validateAvailability(availability)){
                handleSaveService();
              } else {
                document.getElementById("p1").innerHTML = "Availability must be a number between 1 and 30!";
               
              }
            }}
            className="px-4 py-2 mt-4 text-white bg-gray-700 rounded-full 
            justify-center items-center "
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateService;

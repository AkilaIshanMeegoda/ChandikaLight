import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import avatar from "../../../images/profile.jpg";
import "../../../App.css";

const InitialPayment = () => {
  const location = useLocation();
  const clientName = location.state.clientName;
  const clientEmail = location.state.clientEmail;
  const contactNumber = location.state.contactNumber;
  const eventDescription = location.state.eventDescription;
  const eventType = location.state.eventType;
  const eventDate = location.state.eventDate;
  const venueLocation = location.state.venueLocation;
  const paymentAmount = location.state.paymentAmount;

  const reservationObj = {
    clientName,
    clientEmail,
    contactNumber,
    eventType,
    eventDescription,
    eventDate,
    venueLocation,
    paymentAmount,
  };

  const [postImage, setPostImage] = useState({ ...reservationObj });

  const navigate = useNavigate();

  const handleCreateReservation = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/reservation/create-reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postImage),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Reservation submitted successfully!!!");
        navigate("/client/dashboard/manage");
      });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, receipt: base64 });
  };

  return (
    <div>
      <form onSubmit={handleCreateReservation}>
        <label htmlFor="file-upload" className="custom-file-upload">
          <img src={postImage.receipt || avatar} alt="" />
        </label>
        <input
          type="file"
          label="Image"
          name="receipt"
          id="file-upload"
          accept=".jpeg,.png,.jpg"
          onChange={(e) => handleFileUpload(e)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default InitialPayment;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

import { Button } from "flowbite-react";
import React, { useState } from "react";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";

const ApprovedPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const reservationStatus = "approved"

  const {
    clientName,
    clientEmail,
    contactNumber,
    eventType,
    eventDescription,
    eventDate,
    venueLocation,
    paymentAmount,
  } = useLoaderData();

  const reservationObj = {
    clientName,
    clientEmail,
    contactNumber,
    eventType,
    eventDescription,
    eventDate,
    venueLocation,
    paymentAmount,
    reservationStatus
  };

  const handleApprovedReservation = (event)=>{
    event.preventDefault();
    
    fetch(`http://localhost:3000/reservation/update-reservation/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservationObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Reservation approved successfully!!!");
        navigate("/admin/dashboard/manage");
      });
  }

  return (
    <div>
      <form onSubmit={handleApprovedReservation}>
        <Button type="submit">Approved</Button>
      </form>
    </div>
  );
};

export default ApprovedPage;

import { Button } from "flowbite-react";
import React, { useState } from "react";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";

const CancelledPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const reservationStatus = "cancelled"

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

  const handleCancelledReservation = (event)=>{
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
        alert("Reservation cancelled successfully!!!");
        navigate("/admin/reservation/dashboard/manage");
      });
  }

  return (
    <div>
      <form onSubmit={handleCancelledReservation}>
        <Button type="submit">Cancelled</Button>
      </form>
    </div>
  );
};

export default CancelledPage;

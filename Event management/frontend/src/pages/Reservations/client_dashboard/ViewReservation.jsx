import React, { useState } from "react";
import { Link, useNavigate, useLoaderData, useParams } from "react-router-dom";
import {
  Button,
  Label,
  Select,
  TextInput,
  Textarea,
  Datepicker,
} from "flowbite-react";

const ViewReservation = () => {
  const navigate = useNavigate();
  const {
    clientName,
    clientEmail,
    contactNumber,
    eventType,
    eventDescription,
    eventDate,
    venueLocation,
    receipt,
    paymentAmount,
    reservationStatus
  } = useLoaderData();

  const reservationNavigate = () => {
    navigate("/client/dashboard/manage");
  };

  return (
    <div className="my-4 px-44">
      <div className="flex justify-between p-6 mb-6 rounded-xl bg-client-brown">
        <h2 className="text-3xl font-bold text-white ">
          View Reservation Details
        </h2>
      </div>
      <form
        onSubmit={reservationNavigate}
        className="m-auto flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="clientName" value="User Name" />
            </div>
            <TextInput
              id="clientName"
              name="clientName"
              type="text"
              value={clientName}
              readOnly
            />
          </div>

          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="clientEmail" value="User Email" />
            </div>
            <TextInput
              id="clientEmail"
              name="clientEmail"
              type="email"
              readOnly
              value={clientEmail}
            />
          </div>
        </div>

        {/* second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="eventDate" value="Event Date" />
            </div>
            <div>
              <TextInput
                id="eventDate"
                name="eventDate"
                type="email"
                readOnly
                value={eventDate}
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="inputState" value="Event Type" />
            </div>
            <TextInput
              id="eventType"
              name="eventType"
              type="email"
              readOnly
              value={eventType}
            />
          </div>
        </div>

        {/* event description */}
        {/* last row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="eventDescription" value="Event Description" />
            </div>
            <Textarea
              id="eventDescription"
              name="eventDescription"
              placeholder="Write your event description..."
              readOnly
              rows={3}
              value={eventDescription}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="receipt" value="Receipt" />
            </div>
            <img src={receipt} className="h-20" alt="receipt" />
          </div>
        </div>

        {/*4th row*/}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="venueLocation" value="Venue Location" />
            </div>
            <TextInput
              id="venueLocation"
              name="venueLocation"
              type="text"
              readOnly
              value={venueLocation}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="contactNumber" value="Contact Number" />
            </div>
            <TextInput
              id="contactNumber"
              name="contactNumber"
              type="text"
              value={contactNumber}
              readOnly
            />
          </div>
        </div>

        {/*last row*/}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="paymentAmount" value="Payment Amount" />
            </div>
            <TextInput
              id="paymentAmount"
              name="paymentAmount"
              type="text"
              readOnly
              value={paymentAmount}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="reservationStatus" value="Reservation Status" />
            </div>
            <input
              className={`text-white rounded-xl ${
                reservationStatus === "approved"
                  ? "bg-green-600"
                  : reservationStatus === "cancelled"
                  ? "bg-red-600"
                  : reservationStatus === "pending"
                  ? "bg-blue-600"
                  : ""
              }`}
              id="reservationStatus"
              name="reservationStatus"
              type="text"
              readOnly
              value={reservationStatus}
            />
          </div>
        </div>
        <Button
          type="submit"
          className="mb-4 shadow-lg bg-client-brown rounded-2xl"
        >
          Go to Reservations
        </Button>
      </form>
    </div>
  );
};

export default ViewReservation;

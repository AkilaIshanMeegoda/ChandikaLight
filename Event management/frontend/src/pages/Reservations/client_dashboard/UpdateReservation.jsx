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

const UpdateReservation = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    clientName,
    clientEmail,
    contactNumber,
    eventType,
    eventDescription,
    eventDate,
    venueLocation,
    paymentAmount
  } = useLoaderData();

  const eventT = [
    "Graduation Ceremony",
    "Award Ceremony",
    "Product Launch Event",
    "Fashion Show",
    "Art Exhibition",
    "Community Fair",
    "Sports Tournament",
    "Cultural Festival",
    "Film Premiere",
    "Trade Show",
    "Music Concert",
    "Dance Performance",
    "Garden Party",
    "Other Event"
  ];

  const [selectedReservationType, setSelectedReservationType] =
    useState(eventType);

  const handleUpdateReservation = (event) => {
    event.preventDefault();
    const form = event.target;

    const contactNumber = form.contactNum.value;
    const eventDescription = form.eventDescription.value;
    const eventType = form.eventT.value;
    const venueLocation = form.venueLocation.value;

    const updateReservationObj = {
      contactNumber,
      eventType,
      eventDescription,
      venueLocation,
    };

    fetch(`http://localhost:3000/reservation/update-reservation/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateReservationObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Reservation updated successfully!!!");
        navigate("/client/dashboard/manage");
      });
  };

  const [contactNum, setContactNum] = useState(contactNumber);
  const [contactNumberError, setContactNumberError] = useState("");

  const handleContactNumberChange = (event) => {
    const inputValue = event.target.value;
    setContactNum(inputValue);

    const phoneNumberRegex = /^0\d{9}$/;

    if (!phoneNumberRegex.test(inputValue)) {
      setContactNumberError(
        "Please enter a valid 10-digit phone number starting with 0"
      );
    } else {
      setContactNumberError("");
    }
  };
  const isFormValid = !contactNumberError;

  return (
    <div className="my-4 px-44">
      <div className="flex justify-between p-6 mb-6 rounded-xl bg-client-brown">
        <h2 className="text-3xl font-bold text-white ">Update the Reservation</h2>
      </div>
      <form
        onSubmit={handleUpdateReservation}
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
              readOnly
              defaultValue={clientName}
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
              defaultValue={clientEmail}
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
                readOnly
                defaultValue={eventDate}
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="inputState" value="Event Type" />
            </div>

            <Select
              id="inputState"
              name="eventT"
              className="w-full rounded"
              value={selectedReservationType}
              onChange={(event) =>
                setSelectedReservationType(event.target.value)
              }
            >
              {eventT.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* event description */}
        <div>
          <div className="block mb-2">
            <Label htmlFor="eventDescription" value="Event Description" />
          </div>
          <Textarea
            id="eventDescription"
            name="eventDescription"
            placeholder="Write your event description..."
            required
            className="w-full"
            rows={5}
            defaultValue={eventDescription}
            maxLength={1000}
          />
        </div>

        {/*last row*/}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="venueLocation" value="Venue Location" />
            </div>
            <TextInput
              id="venueLocation"
              name="venueLocation"
              type="text"
              placeholder="Venue Location"
              required
              defaultValue={venueLocation}
              maxLength={100}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="contactNumber" value="Contact Number" />
            </div>
            <TextInput
              id="contactNum"
              name="contactNum"
              type="text"
              placeholder="Contact Number"
              value={contactNum}
              onChange={handleContactNumberChange}
              required
              minLength={10}
              maxLength={10}
            />
            {contactNumberError && (
              <div className="pb-0 mt-1 mb-0 text-red-500">
                {contactNumberError}
              </div>
            )}
          </div>

          <div className="lg:w-1/3">
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
        </div>

        <Button type="submit" className="mt-5 bg-client-brown" disabled={!isFormValid}>
          Update Reservation
        </Button>
      </form>
    </div>
  );
};

export default UpdateReservation;

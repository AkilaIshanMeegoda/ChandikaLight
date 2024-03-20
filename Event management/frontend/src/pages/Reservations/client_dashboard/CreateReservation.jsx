import React, { useState } from "react";
import {
  Button,
  Label,
  Select,
  TextInput,
  Textarea,
  Datepicker,
} from "flowbite-react";
import { useNavigate } from "react-router-dom";

const CreateReservation = () => {
  const navigate = useNavigate();
  const eventType = [
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
    "Other Event",
  ];

  const [selectedReservationType, setSelectedReservationType] = useState(
    eventType[0]
  );

  const handleCreateReservation = (event) => {
    event.preventDefault();
    const form = event.target;

    const clientName = form.clientName.value;
    const clientEmail = form.clientEmail.value;
    const contactNumber = form.contactNumber.value;
    const eventDescription = form.eventDescription.value;
    const eventType = form.eventType.value;
    const eventDate = form.eventDate.value;
    const venueLocation = form.venueLocation.value;
    const paymentAmount = form.paymentAmount.value;

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
    navigate("/client/dashboard/initial-payment" ,{ state: reservationObj });
    
  };

  const today = new Date();
  const minDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );

  const maxDate = new Date(
    today.getFullYear() + 10,
    today.getMonth(),
    today.getDate()
  );

  const [contactNumber, setContactNumber] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");

  const handleContactNumberChange = (event) => {
    const inputValue = event.target.value;
    setContactNumber(inputValue);

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
    <div className="my-10 px-44">
      <div className="flex justify-between p-6 mb-6 rounded-xl bg-client-brown">
        <h2 className="text-3xl font-bold text-white ">Create a Reservation</h2>
      </div>

      <form
        onSubmit={handleCreateReservation}
        className="flex flex-col flex-wrap gap-4 m-auto"
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
              placeholder="User Name"
              required
              minLength={3}
              maxLength={50}
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
              placeholder="Enter a valid email address"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              required
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
              <Datepicker
                id="eventDate"
                name="eventDate"
                minDate={minDate}
                maxDate={maxDate}
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="inputState" value="Event Type" />
            </div>

            <Select
              id="inputState"
              name="eventType"
              className="w-full rounded"
              value={selectedReservationType}
              onChange={(event) =>
                setSelectedReservationType(event.target.value)
              }
            >
              {eventType.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/*3rd row*/}
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
              maxLength={100}
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
              placeholder="Contact Number"
              value={contactNumber}
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
        </div>

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
              required
              className="w-50%"
              rows={5}
              maxLength={1000}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="paymentAmount" value="Payment Amount" />
            </div>
            <TextInput
              id="paymentAmount"
              name="paymentAmount"
              type="number"
              placeholder="Payment Amount (Rs.)"
              required
              maxLength={10}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="mt-5 bg-client-brown"
          disabled={!isFormValid}
        >
          Create Reservation
        </Button>
      </form>
    </div>
  );
};

export default CreateReservation;

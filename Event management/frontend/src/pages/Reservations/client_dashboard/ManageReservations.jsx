import React, { useEffect, useState } from "react";
import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import Pagination from "./ClientPagination";

const ManageReservations = () => {
  const [allReservations, setAllReservations] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  useEffect(() => {
    fetch("http://localhost:3000/reservation/all-reservations")
      .then((res) => res.json())
      .then((data) => setAllReservations(data));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this reservation?"
    );

    if (confirmDelete) {
      fetch(`http://localhost:3000/reservation/delete-reservation/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Reservation is deleted successfully!");
          window.location.reload();
        });
    }
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = allReservations.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="px-4 pb-4 my-4">
      <div className="flex justify-between p-4 mb-6 shadow-2xl rounded-xl bg-client-brown">
        <h2 className="text-3xl font-bold text-white ">
          Manage Your Reservations
        </h2>
        <div className="flex">
          <div className="relative text-gray-600 ">
            <input
              className="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
              type="search"
              name="search"
              placeholder="Search Reservation"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 mt-3.5 mr-4"
            >
              <svg
                className="w-4 h-4 text-gray-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div> </div>
        <Link
          to={`/client/dashboard/create/`}
          className="mr-5 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          <Button className="mb-4 shadow-lg bg-client-brown rounded-2xl">
            Create Reservation
          </Button>
        </Link>
      </div>

      <Table>
        <Table.Head>
          <Table.HeadCell className="text-white bg-client-brown">
            No
          </Table.HeadCell>
          <Table.HeadCell className="text-white bg-client-brown">
            Client Name
          </Table.HeadCell>
          <Table.HeadCell className="text-white bg-client-brown">
            Contact Number
          </Table.HeadCell>
          <Table.HeadCell className="text-white bg-client-brown">
            Event Type
          </Table.HeadCell>
          <Table.HeadCell className="text-white bg-client-brown">
            Venue Location
          </Table.HeadCell>
          <Table.HeadCell className="text-white bg-client-brown">
            Event Date
          </Table.HeadCell>
          <Table.HeadCell className="text-center text-white bg-client-brown">
            Actions
          </Table.HeadCell>
        </Table.Head>
        {currentPosts?.map((reservation, index) => (
          <Table.Body
            className={`divide-y ${
              index % 2 === 0
                ? "bg-white dark:bg-gray-700"
                : "bg-client-yellow dark:bg-gray-800"
            }`}
            key={reservation._id}
          >
            <Table.Row className="dark:border-gray-700">
              <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {firstPostIndex + index + 1}
              </Table.Cell>
              <Table.Cell className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {reservation.clientName}
              </Table.Cell>
              <Table.Cell>{reservation.contactNumber}</Table.Cell>
              <Table.Cell>{reservation.eventType}</Table.Cell>
              <Table.Cell>{reservation.venueLocation}</Table.Cell>
              <Table.Cell>{reservation.eventDate}</Table.Cell>
              <Table.Cell>
                <button className="px-4 py-1 mr-6 font-semibold text-white bg-green-600 rounded-xl hover:bg-green-800">
                  <Link
                    to={`/client/dashboard/view-reservation/${reservation._id}`}
                    className="font-medium hover:underline "
                  >
                    View
                  </Link>
                </button>
                <button
                  onClick={() => handleDelete(reservation._id)}
                  className="px-4 py-1 font-semibold text-white bg-red-600 rounded-xl hover:bg-red-800"
                >
                  Delete
                </button>

                <Link
                  to={`/client/dashboard/update-reservation/${reservation._id}`}
                  className="mr-5 font-medium"
                >
                  <button className="px-4 py-1 ml-5 font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-800">
                    Edit
                  </button>
                </Link>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
      <Pagination
        totalPosts={allReservations.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ManageReservations;

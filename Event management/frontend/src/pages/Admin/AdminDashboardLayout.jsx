import React from "react";
import NavBar from "../../components/landingPage/NavBar";
import { Button, Card } from "flowbite-react";
import FooterSection from "../../components/landingPage/FooterSection";
import { Link } from "react-router-dom";
import management from "../../images/management.jpg"

const AdminDashboardLayout = () => {
  return (
    <div style={{ backgroundImage: `url(${management})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <NavBar />
      <div >
        {/*1st row*/}
        <div className="flex justify-between m-8">
          <Card className="max-w-sm ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Employee Management
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Handle scheduling, training, and performance tracking for staff
              members.
            </p>
            <Link to={`#`}>
              <Button>
                Read more
                <svg
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>

          <Card className="max-w-sm ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Reservation Management
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Facilitate the booking and scheduling of equipment and services
              for clients.
            </p>
            <Link to={`/admin/reservation/dashboard/manage`}>
              <Button>
                Read more
                <svg
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>

          <Card className="max-w-sm ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Finance Management
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Track expenses, revenue, and financial transactions related to
              rentals and services.
            </p>
            <Link to={`#`}>
              <Button>
                Read more
                <svg
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>
        </div>

        {/*2nd row*/}
        <div className="flex justify-between m-8">
          <Card className="max-w-sm ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Feedback and Review Management
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Collect and analyze feedback from clients to improve services and
              address any concerns.
            </p>
            <Link to={`#`}>
              <Button>
                Read more
                <svg
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>

          <Card className="max-w-sm ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Inventory Management
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Maintain a database of available equipment, ensuring efficient
              allocation and tracking of items.
            </p>
            <Link to={`#`}>
              <Button>
                Read more
                <svg
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>

          <Card className="max-w-sm ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Maintenance Management
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Schedule and track maintenance tasks to ensure equipment is in
              optimal condition for rental and use.
            </p>
            <Link to={`#`}>
              <Button>
                Read more
                <svg
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>
        </div>

        {/*3rd row*/}
        <div className="flex m-8">
          <Card className="max-w-sm ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rental Management
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Organize the process of renting out lighting, sound systems, and
              equipment to clients.
            </p>
            <Link to={`#`}>
              <Button>
                Read more
                <svg
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>

          <Card className="max-w-sm ml-[150px]">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Service Management
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Coordinate the delivery, setup, and teardown of equipment and
              technical support during events.
            </p>
            <Link to={`#`}>
              <Button>
                Read more
                <svg
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Link>
          </Card>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default AdminDashboardLayout;

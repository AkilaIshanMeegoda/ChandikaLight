import React from "react";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import logo from "../../images/logo.png";
import { Carousel } from "flowbite-react";
import slidePic1 from "../../images/slidebar (1).jpg";
import slidePic2 from "../../images/slidebar (2).jpg";
import slidePic3 from "../../images/slidebar (3).jpg";
import slidePic4 from "../../images/slidebar (4).jpg";
import slidePic5 from "../../images/slidebar (5).jpg";
import createResImg from "../../images/createRes.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar fluid rounded className="bg-gradient-to-r from-client-yellow to-white">
        <Navbar.Brand href="#">
          <img
            src={logo}
            className="h-24 ml-5 rounded-lg"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block text-sm font-medium truncate">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/client/dashboard/login">Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="mr-12 text-xl">
          <style>
            {`
              .nav-link {
                text-decoration: none;
                position: relative;
                transition: color 0.3s;
              }
              .nav-link::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: red;
                visibility: hidden;
                transform: scaleX(0);
                transition: all 0.3s ease-in-out;
              }
              .nav-link:hover::after {
                visibility: visible;
                transform: scaleX(1);
              }
              .nav-link:hover {
                color: black;
              }
           `}
          </style>
          <Navbar.Link
            href="#"
            className="text-lg font-bold text-client-brown nav-link"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/client/dashboard/manage"
            className="text-lg font-bold text-client-brown nav-link"
          >
            Reservation
          </Navbar.Link>
          <Navbar.Link
            href="/admin/service/dashboard"
            className="text-lg font-bold text-client-brown nav-link"
          >
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className="text-lg font-bold text-client-brown nav-link">
            Inventory
          </Navbar.Link>
          <Navbar.Link href="#" className="text-lg font-bold text-client-brown nav-link">
            Help and Feedback
          </Navbar.Link>
          <Navbar.Link href="#" className="text-lg font-bold text-client-brown nav-link">
            About Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <div className="h-[80vh]">
          <Carousel>
            <img src={slidePic3} alt="..." />
            <img src={slidePic2} alt="..." />
            <img src={slidePic1} alt="..." />
            <img src={slidePic4} alt="..." />
            <img src={slidePic5} alt="..." />
          </Carousel>
        </div>
      </div>
      <div>
        <p className="mt-8 text-3xl font-bold text-center text-client-brown">
          Create Your Reservation
        </p>
        <div className="flex">
          <img
            src={createResImg}
            className="mt-8 ml-16 shadow-lg rounded-2xl h-96"
          />
          <div className="flex-rows">
            <p className="pt-16 pl-16 pr-16 text-lg font-semibold">
              Lighting plays a pivotal role in setting the ambiance and
              enhancing the functionality of any event. Whether it's a corporate
              gathering, a wedding reception, or a music concert, thoughtful
              lighting design can transform the atmosphere and elevate the
              overall experience for attendees.For instance, in a corporate
              conference, strategic lighting can highlight key areas such as the
              stage or podium, ensuring that speakers are well-lit and easily
              visible to the audience. Additionally, softer lighting around
              seating areas can promote a relaxed atmosphere conducive to
              networking and discussions during breaks.In a wedding reception,
              lighting can create a romantic and enchanting ambiance. Warm, dim
              lighting can be used to accentuate the decor, while subtle
              spotlights can illuminate important focal points like the cake
              table or the dance floor.
            </p>
            <Link
              to={`/client/dashboard/create/`}
              className="mr-5 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
            >
              <Button className="h-12 m-auto mt-8 shadow-lg bg-client-brown rounded-2xl">
                Create Reservation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <p className="mt-12 text-3xl font-bold text-center text-client-brown">
          Our Services
        </p>
        <p className="mt-8 text-lg font-semibold text-justify mx-60">
        Lighting, sound, and stage services encompass the design, installation, operation, and maintenance of essential elements for events and performances. Lighting professionals create ambiance and highlight focal points using fixtures and effects, while sound experts ensure clear audio delivery through system design and live mixing. Stage services cover the construction, decoration, and management of performance platforms, ensuring safety and functionality while enhancing visual appeal. Together, these services provide a seamless and immersive experience for audiences across various events and venues.
        </p>
        <div className="flex flex-wrap items-center justify-center p-12">
          <div className="relative flex-shrink-0 max-w-xs m-6 overflow-hidden bg-orange-500 rounded-lg shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8 "
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: "0.1" }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative flex items-center justify-center px-10 pt-10">
              <div
                className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: "0.2",
                }}
              ></div>
              <img
                className="relative w-40"
                src="https://img.freepik.com/free-vector/realistic-christmas-lights-collection_23-2149164120.jpg?t=st=1710817841~exp=1710821441~hmac=2d194cc74fd8af9503692a08a7dc35e638271b78b5bd02c53e630fa21a012d99&w=740"
                alt=""
              />
            </div>
            <div className="relative px-6 pb-6 mt-6 text-white">
              <span className="block -mb-1 opacity-75">Indoor/Outdoor</span>
              <div className="flex justify-between">
                <span className="block text-xl font-semibold">
                  Lighting Service
                </span>
                <span className="flex items-center px-3 py-2 ml-3 text-xs font-bold leading-none text-orange-500 bg-white rounded-full">
                  Show Details
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex-shrink-0 max-w-xs m-6 overflow-hidden bg-teal-500 rounded-lg shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: "0.1" }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative flex items-center justify-center px-10 pt-10">
              <div
                className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: "0.2",
                }}
              ></div>
              <img
                className="relative w-40"
                src="https://img.freepik.com/free-vector/grunge-style-music-background-with-speakers_1048-2513.jpg?t=st=1710817916~exp=1710821516~hmac=f384f1b39d1a2be8ba4d8e0c41cc6be57291da217b29586f50bd552a616eef44&w=740"
                alt=""
              />
            </div>
            <div className="relative px-6 pb-6 mt-6 text-white">
              <span className="block -mb-1 opacity-75">Indoor/Outdoor</span>
              <div className="flex justify-between">
                <span className="block text-xl font-semibold">
                  Sound Service
                </span>
                <span className="flex items-center px-3 py-2 ml-3 text-xs font-bold leading-none text-teal-500 bg-white rounded-full">
                  Show Details
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex-shrink-0 max-w-xs m-6 overflow-hidden bg-purple-500 rounded-lg shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: "0.1" }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative flex items-center justify-center px-10 pt-10">
              <div
                className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: "0.2",
                }}
              ></div>
              <img
                className="relative w-40"
                src="https://img.freepik.com/free-vector/rock-star-concept-with-metal-festival-stage-symbols-isometric-vector-illustration_1284-80544.jpg?t=st=1710818297~exp=1710821897~hmac=586f094c98b1ff3d7a09ea99363dbf5455cfb8bf4a3b6a33b0022bb3fef5189b&w=740"
                alt=""
              />
            </div>
            <div className="relative px-6 pb-6 mt-6 text-white">
              <span className="block -mb-1 opacity-75">Indoor/Outdoor</span>
              <div className="flex justify-between">
                <span className="block text-xl font-semibold">
                  Stage Service
                </span>
                <span className="flex items-center px-3 py-2 ml-3 text-xs font-bold leading-none text-purple-500 bg-white rounded-full">
                  Show Details
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

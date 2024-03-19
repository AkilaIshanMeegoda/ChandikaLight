import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <div>
      <Navbar
        style={{ borderRadius: "0" }}
        fluid
        rounded
        className="bg-gradient-to-r from-dark-brown to-white via-client-yellow"
      >
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
            <Dropdown.Item href="/admin/dashboard">Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/client/dashboard/login">
              Sign out
            </Dropdown.Item>
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
            href="/"
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
          <Navbar.Link
            href="#"
            className="text-lg font-bold text-client-brown nav-link"
          >
            Inventory
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="text-lg font-bold text-client-brown nav-link"
          >
            Help and Feedback
          </Navbar.Link>
          <Navbar.Link
            href="/client/dashboard/aboutus"
            className="text-lg font-bold text-client-brown nav-link"
          >
            About Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

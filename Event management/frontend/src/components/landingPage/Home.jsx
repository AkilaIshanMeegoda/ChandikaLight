import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../images/logo.png";
import { Carousel } from "flowbite-react";
import slidePic1 from "../../images/slidebar (1).jpg";
import slidePic2 from "../../images/slidebar (2).jpg";
import slidePic3 from "../../images/slidebar (3).jpg";
import slidePic4 from "../../images/slidebar (4).jpg";
import slidePic5 from "../../images/slidebar (5).jpg";

const Home = () => {
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="#">
          <img src={logo} className="h-16 ml-9 " alt="Flowbite React Logo" />
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
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="mr-12 text-xl">
          <Navbar.Link href="#" active className="text-lg font-bold">
            Home
          </Navbar.Link>
          <Navbar.Link href="/client/dashboard/manage" className="text-lg font-bold">
            Reservation
          </Navbar.Link>
          <Navbar.Link href="/admin/service/dashboard" className="text-lg font-bold">
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className="text-lg font-bold">
            Inventory
          </Navbar.Link>
          <Navbar.Link href="#" className="text-lg font-bold">
            Help and Feedback
          </Navbar.Link>
          <Navbar.Link href="#" className="text-lg font-bold">
            About Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <span className="self-center ml-4 text-xl font-bold whitespace-nowrap text-client-brown">
        Chandika Light
      </span>

      <div>
        <div className="h-[80vh] mt-2">
          <Carousel>
            <img src={slidePic1} alt="..." />
            <img src={slidePic2} alt="..." />
            <img src={slidePic3} alt="..." />
            <img src={slidePic4} alt="..." />
            <img src={slidePic5} alt="..." />
          </Carousel>
        </div>
      </div>
      <div>
        <p className="p-24 text-lg font-semibold">
        Lighting plays a pivotal role in setting the ambiance and enhancing the functionality of any event. Whether it's a corporate gathering, a wedding reception, or a music concert, thoughtful lighting design can transform the atmosphere and elevate the overall experience for attendees.For instance, in a corporate conference, strategic lighting can highlight key areas such as the stage or podium, ensuring that speakers are well-lit and easily visible to the audience. Additionally, softer lighting around seating areas can promote a relaxed atmosphere conducive to networking and discussions during breaks.In a wedding reception, lighting can create a romantic and enchanting ambiance. Warm, dim lighting can be used to accentuate the decor, while subtle spotlights can illuminate important focal points like the cake table or the dance floor. 
        </p>
        <p className="px-24 pb-24 text-lg font-semibold">
        This not only enhances the aesthetic appeal but also ensures that the event's special moments are captured beautifully in photographs.At a music concert, dynamic lighting effects synchronized with the rhythm of the music can electrify the atmosphere and engage the audience on a sensory level. From pulsating strobe lights to vibrant color washes, the lighting design can amplify the energy of the performance and create an immersive experience for concert-goers.In all these scenarios, lighting serves not only an aesthetic purpose but also a functional one. It guides attendees, enhances visibility, and shapes the mood of the event, making it an indispensable element of event planning and execution.
        </p>
      </div>
    </div>
  );
};

export default Home;

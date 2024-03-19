import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../../images/logo.png"

const FooterSection = () => {
  return (
    <div>
      <Footer style={{ borderRadius: "0" }} container className="bg-gradient-to-r from-dark-brown to-white via-client-yellow">
        <div className="w-full">
          <div className="grid justify-between w-full rounded-none sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                className="h-28"
                src={logo}
                alt="Logo"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" className="text-client-brown" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className="text-client-brown">Flowbite</Footer.Link>
                  <Footer.Link href="#" className="text-client-brown">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" className="text-client-brown"/>
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className="text-client-brown">Github</Footer.Link>
                  <Footer.Link href="#" className="text-client-brown">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" className="text-client-brown"/>
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className="text-client-brown">Privacy Policy</Footer.Link>
                  <Footer.Link href="#" className="text-client-brown">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright className="text-white" href="#" by="Chandika Light™" year={2024} />
            <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook}  className="text-client-brown"/>
              <Footer.Icon href="#" icon={BsInstagram}  className="text-client-brown"/>
              <Footer.Icon href="#" icon={BsTwitter} className="text-client-brown"/>
              <Footer.Icon href="#" icon={BsGithub} className="text-client-brown"/>
              <Footer.Icon href="#" icon={BsDribbble} className="text-client-brown"/>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};
export default FooterSection;

import { Sidebar } from 'flowbite-react';
import { HiChartPie } from 'react-icons/hi';
import { CgFileDocument } from "react-icons/cg";
import { GiConfirmed } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import React from 'react';
import logo from "../../../images/logo.png";

const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className='h-screen'>
      <div style={{ height: '95vh', backgroundColor: '#0C2D57' }} className='rounded-2xl bg-sidebar-blue'>
        <Sidebar.Items className="bg-sidebar-blue rounded-2xl" style={{ textAlign: 'left' }}>
          <Sidebar.ItemGroup>
            <div style={{ padding: '20px 60px' }}>
              <img src={logo} alt="chandika light logo" style={{ width: '100px', height: '100px', borderRadius: '20px' }} />
            </div>

            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="hover:bg-sidebar-orange" style={{ color: 'white' }}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={CgFileDocument} className="hover:bg-sidebar-orange" style={{ color: 'white' }}>
              Inventory Details
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/AddInventory" icon={GiConfirmed} className="hover:bg-sidebar-orange" style={{ color: 'white' }}>
              Add Inventory Items
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={IoLogOut} className="hover:bg-sidebar-orange" style={{ color: 'white' }}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </div>
    </Sidebar>
  );
}

export default SideBar;

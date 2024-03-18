import { Sidebar } from 'flowbite-react';
import { HiChartPie} from 'react-icons/hi';
import { CgFileDocument } from "react-icons/cg";
import { GiConfirmed } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";
import React from 'react'
import logo from "../../images/logo.png"

const SideBar = () => {
  return (
      
    <Sidebar aria-label="Sidebar with content separator example" className='h-screen ' >
      <div style={{ height: '95vh'}} className='rounded-2xl bg-sidebar-blue'>
      <Sidebar.Items className="bg-sidebar-blue rounded-2xl">
        <Sidebar.ItemGroup >
          <div style={{padding:'20px 60px'}}>
            <img src={logo} imgalt="chandika light logo " style={{width: '100px', height: '100px', borderRadius:'20px'}} />
            </div>

          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="hover:bg-sidebar-orange " style={{ color: 'white' }}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/service/dashboard/all" icon={CgFileDocument} className="hover:bg-sidebar-orange" style={{ color: 'white' }}>
            Services
          </Sidebar.Item>
          <Sidebar.Item href="/admin/service/dashboard/add" icon={CgFileDocument} className="hover:bg-sidebar-orange" style={{ color: 'white' }}>
            Create service
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      </div>
    </Sidebar>
  )
}

export default SideBar
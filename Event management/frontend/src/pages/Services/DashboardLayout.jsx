import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const DashboardLayout = () => {
  return (
    <div className='flex flex-row'>
      <div className='flex-none'>
        <SideBar/>
      </div>
      <div className='flex-grow flex items-center justify-center'>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout

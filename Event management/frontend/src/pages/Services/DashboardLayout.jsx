import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const DashboardLayout = () => {
  return (
    <div className='flex'>
      <div className='w-1/4'>
        <SideBar />
      </div>
      <div className='w-3/4 flex justify-center'>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout

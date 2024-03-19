import React from 'react'
import { Outlet } from 'react-router-dom'
const DashboardLayout = () => {
    return (
      <div className='flex flex-col gap-4 md:flex-row'>
          
          <Outlet/>
      </div>
    )
  }

export default DashboardLayout;
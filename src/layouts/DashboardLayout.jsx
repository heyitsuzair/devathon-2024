import Sidebar from '@/app/dashboard/instructor/sidebar/Sidebar'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div>
        <Sidebar/>
        {children}
    </div>
  )
}

export default DashboardLayout
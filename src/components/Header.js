import { NotificationsActive, PowerSettingsNew } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({title}) => {
  return (
    <div className='flex justify-between items-center p-4 bg-white backdrop-blur-md shadow-sm text-3xl font-semibold text-indigo-900'>
      <h1 className='text 3xl'>{title}</h1>
      <div>
        <NotificationsActive className='hover:scale-75 cursor-pointer transition-all duration-300 mx-6 font-semibold'  titleAccess='Notifications'/>
        <Link to={'/'}><PowerSettingsNew className='hover:scale-75 cursor-pointer transition-all duration-300 text-red-600 font-semibold'  titleAccess='Logout'/></Link>
      </div>
    </div>
  )
}

export default Header

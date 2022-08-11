import { AccountCircle, ContentCopy, Dashboard, Money, Sell } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/support.css'

const Sidebar = ({active}) => {
  return (
    <div className='w-[280px] bg-indigo-900 h-screen flex flex-col items-center px-3'>
      {/* hero */}
      <div className='flex flex-col p-5 items-center w-full mb-3'>
        <AccountCircle className='user text-blue-300'/>
        <h1 className='text-blue-300 text-3xl font-semibold mb-5'>Morgan</h1>
        <hr className='w-full'/>
      </div>
      {/* navs */}
      <div className='w-[240px] text-white text-xl'>
        {/* dashboard */}
        <Link to={'/dashboard'}>
          <div className={`flex items-center rounded hover:bg-[rgba(255,255,255,0.2)] cursor-pointer transition-all duration-300 px-5 py-3 mb-2 ${active === 'dashboard' ? 'backdrop-blur-md, shadow-xl' : ''} ${active === 'dashboard' ? 'bg-[rgba(255,255,255,0.2)]' : ''}`}>
            <Dashboard/>
            <h1 className='ml-[2vw]'>Dashboard</h1>
          </div>
        </Link>
        {/* products */}
        <Link to={'/products'}>
          <div className={`flex items-center rounded hover:bg-[rgba(255,255,255,0.2)] cursor-pointer transition-all duration-300 px-5 py-3 mb-2 ${active === 'products' ? 'backdrop-blur-md, shadow-xl' : ''} ${active === 'products' ? 'bg-[rgba(255,255,255,0.2)]' : ''}`}>
            <Sell/>
            <h1 className='ml-[2vw]'>Products</h1>
          </div>
        </Link>
        {/* sales */}
        <Link to={'/sales'}>
          <div className={`flex items-center rounded hover:bg-[rgba(255,255,255,0.2)] cursor-pointer transition-all duration-300 px-5 py-3 mb-2 ${active === 'sales' ? 'backdrop-blur-md, shadow-xl' : ''} ${active === 'sales' ? 'bg-[rgba(255,255,255,0.2)]' : ''}`}>
            <Money/>
            <h1 className='ml-[2vw]'>Sales</h1>
          </div>
        </Link>
        {/* records */}
        <Link to={'/records'}>
          <div className={`flex items-center rounded hover:bg-[rgba(255,255,255,0.2)] cursor-pointer transition-all duration-300 px-5 py-3 mb-2 ${active === 'records' ? 'backdrop-blur-md, shadow-xl' : ''} ${active === 'records' ? 'bg-[rgba(255,255,255,0.2)]' : ''}`}>
            <ContentCopy/>
            <h1 className='ml-[2vw]'>Records</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar

import { AccountCircle, ContentCopy, Dashboard, Money, Sell } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/support.css'

const Sidebar = ({active}) => {
  return (
    <div>
      <div className='w-[280px] bg-indigo-900 h-screen flex flex-col items-center'>
        {/* hero */}
        <div className='flex flex-col p-5 items-center relative w-full mb-3'>
          <AccountCircle className='user text-white'/>
          <h1 className='text-white text-3xl font-semibold mb-5'>Morgan</h1>
          <hr className='w-full'/>
        </div>
        {/* navs */}
        <div className='w-[240px] text-white text-xl'>
          {/* dashboard */}
          <Link to={'/dashboard'}>
            <div className={`flex items-center rounded hover:bg-[rgba(255,255,255,0.2)] cursor-pointer transition-all duration-300 px-5 py-3 mb-2 ${active === 'dashboard' ? 'backdrop-blur-md' : ''} ${active === 'dashboard' ? 'bg-[rgba(255,255,255,0.2)]' : ''} ${active === 'dashboard' ? 'shadow-xl' : ''}`}>
              <Dashboard/>
              <h1 className='ml-[2vw]'>Dashboard</h1>
            </div>
          </Link>
          {/* products */}
          <Link to={'/products'}>
            <div className={`flex items-center rounded hover:bg-[rgba(255,255,255,0.2)] cursor-pointer transition-all duration-300 px-5 py-3 mb-2 ${active === 'records' ? 'backdrop-blur-md' : ''} ${active === 'products' ? 'bg-[rgba(255,255,255,0.2)]' : ''} ${active === 'products' ? 'shadow-xl' : ''}`}>
              <Sell/>
              <h1 className='ml-[2vw]'>Products</h1>
            </div>
          </Link>
          {/* sales */}
          <Link to={'/sales'}>
            <div className={`flex items-center rounded hover:bg-[rgba(255,255,255,0.2)] cursor-pointer transition-all duration-300 px-5 py-3 mb-2 ${active === 'sales' ? 'backdrop-blur-md' : ''} ${active === 'sales' ? 'bg-[rgba(255,255,255,0.2)]' : ''} ${active === 'sales' ? 'shadow-xl' : ''}`}>
              <Money/>
              <h1 className='ml-[2vw]'>Sales</h1>
            </div>
          </Link>
          {/* records */}
          <Link to={'/records'}>
            <div className={`flex items-center rounded hover:bg-[rgba(255,255,255,0.2)] cursor-pointer transition-all duration-300 px-5 py-3 mb-2 ${active === 'records' ? 'backdrop-blur-md' : ''} ${active === 'records' ? 'bg-[rgba(255,255,255,0.2)]' : ''} ${active === 'records' ? 'shadow-xl' : ''}`}>
              <ContentCopy/>
              <h1 className='ml-[2vw]'>Records</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

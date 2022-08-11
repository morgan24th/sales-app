import { ContentCopy, Info, Money, Sell } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar active={'dashboard'}/>
      {/* right-side content */}
      <div className='bg-[#f4f4f4] min-h-screen flex flex-col w-full'>
        {/* away from footer */}
        <div className='flex-1'>
          <Header title={'Dashboard'}/>
          {/* navs */}
          <div className='mt-2'>
            <div className='flex justify-center items-center p-2 gap-x-6'>
              {/* products */}
              <Link to={'/products'}>
                <div className='nav-container flex flex-col items-center bg-purple-50 p-10 w-[274px] 2xl:w-80 2xl:p-12 rounded-md backdrop-blur-md shadow-xl hover:bg-purple-100 cursor-pointer'>
                  <Sell className='nav-icons text-purple-700 mb-2'/>
                  <h1 className='text-2xl font-semibold text-purple-500'>Products</h1>
                </div>
              </Link>
              {/* sales */}
              <Link to={'/sales'}>
                <div className='nav-container flex flex-col items-center bg-cyan-50 p-10 w-[274px] 2xl:w-80 2xl:p-12 rounded-md backdrop-blur-md shadow-xl hover:bg-cyan-100 cursor-pointer'>
                  <Money className='nav-icons text-cyan-700 mb-2'/>
                  <h1 className='text-2xl font-semibold text-cyan-500'>Sales</h1>
                </div>
              </Link>
              {/* records */}
              <Link to={'/records'}>
                <div className='nav-container flex flex-col items-center bg-indigo-50 p-10 w-[274px] 2xl:w-80 2xl:p-12 rounded-md backdrop-blur-md shadow-xl hover:bg-indigo-100 cursor-pointer'>
                  <ContentCopy className='nav-icons text-indigo-700 mb-2'/>
                  <h1 className='text-2xl font-semibold text-indigo-500'>Records</h1>
                </div>
              </Link>
              {/* About */}
              <Link to={'/records'}>
                <div className='nav-container flex flex-col items-center bg-red-50 p-10 w-[274px] 2xl:w-80 2xl:p-12 rounded-md backdrop-blur-md shadow-xl hover:bg-red-100 cursor-pointer'>
                  <Info className='nav-icons text-red-700 mb-2'/>
                  <h1 className='text-2xl font-semibold text-red-500'>About</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer/>
      </div>
    </div>
  )
}

export default Dashboard

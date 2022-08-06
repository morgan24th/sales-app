import { ChatSharp, Dashboard, ProductionQuantityLimits, Sell } from '@mui/icons-material'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-blue-50 w-1/6 h-screen flex shadow-2xl items-center z-10'>
      <div className='w-full'>
        {/* title */}
        <div className='flex justify-center my-6'>
          <h1 className='text-3xl text-blue-900 font-semibold uppercase'>Sales App</h1>
        </div>
        {/* links */}
        <div className='text-xl font-semibold uppercase'>
          {/* dashboard */}
          <div className='flex items-center border-l-8 border-blue-300 text-white my-2 mx-3 p-6 bg-blue-500 hover:bg-blue-500 rounded-sm transition-all duration-300 cursor-pointer'>
            <Dashboard className='icons'/>
            <h1 className='ml-[2vw]'>Dashboard</h1>
          </div>
          {/* products */}
          <div className='flex items-center border-l-8 border-blue-300 text-blue-800 hover:text-white my-2 mx-3 p-6 bg-blue-200 hover:bg-blue-400 rounded-sm transition-all duration-300 cursor-pointer'>
            <ProductionQuantityLimits/>
            <h1 className='ml-[2vw]'>Products</h1>
          </div>
          {/* sales */}
          <div className='flex items-center border-l-8 border-blue-300 text-blue-800 hover:text-white my-2 mx-3 p-6 bg-blue-200 hover:bg-blue-400 rounded-sm transition-all duration-300 cursor-pointer'>
            <Sell/>
            <h1 className='ml-[2vw]'>Sales</h1>
          </div>
          {/* statistics */}
          <div className='flex items-center border-l-8 border-blue-300 text-blue-800 hover:text-white my-2 mx-3 p-6 bg-blue-200 hover:bg-blue-400 rounded-sm transition-all duration-300 cursor-pointer'>
            <ChatSharp/>
            <h1 className='ml-[2vw]'>Statistics</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

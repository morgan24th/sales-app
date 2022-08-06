// import { BarChartTwoTone, ProductionQuantityLimitsTwoTone, SellTwoTone } from '@mui/icons-material'
import React from 'react'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div className='flex items-start'>
      {/* Sidebar */}
      <Sidebar/>
      {/* right-side content */}
      <div className='bg-[#f4f4f4] w-screen h-screen'>
        {/* title */}
        <div className='bg-blue-50 flex justify-center p-5 shadow-md z-10'>
            <h1 className='text-3xl text-slate-600 font-semibold uppercase'>Sales App</h1>
        </div>
        {/* section tiles */}
        {/* <div className='flex flex-wrap justify-evenly items-center p-5'>
            <div className='bg-fuchsia-300 flex flex-col justify-center items-center shadow-xl w-[400px] h-[220px] p-5 hover:scale-90 transition-all duration-300 cursor-pointer rounded-md'>
                <ProductionQuantityLimitsTwoTone fontSize={'large'}/>
                <h1 className='text-2xl'>Products</h1>
            </div>
            <div className='bg-purple-300 flex flex-col justify-center items-center shadow-xl w-[400px] h-[220px] p-5 hover:scale-90 transition-all duration-300 cursor-pointer rounded-md'>
                <SellTwoTone fontSize={'large'}/>
                <h1 className='text-2xl'>Sales</h1>
            </div>
            <div className='bg-orange-300 flex flex-col justify-center items-center shadow-xl w-[400px] h-[220px] p-5 hover:scale-90 transition-all duration-300 cursor-pointer rounded-md'>
                <BarChartTwoTone fontSize={'large'}/>
                <h1 className='text-2xl'>Products</h1>
            </div>
        </div> */}
        {/* other stuff */}
        <div className='flex flex-col justify-center items-center mt-5'>
            <img className='w-[840px]' src='../images/construction.png' alt='construction'/>
            <h1 className='text-4xl text-blue-900 font-semibold'>Site is Under Construction</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

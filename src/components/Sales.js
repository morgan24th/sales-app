import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Sales = () => {
  return (
    <div className='flex'>
      {/* sidebar */}
      <Sidebar active={'sales'}/>
      {/* content-details */}
      <div className='bg-[#f4f4f4] min-h-screen flex flex-col w-full'>
        <div className='flex-1'>
          <Header title={'Sales'}/>
        </div>
        {/* footer */}
        <Footer/>
      </div>
    </div>
  )
}

export default Sales

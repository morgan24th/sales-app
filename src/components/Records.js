import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Records = () => {
  return (
    <div className='flex'>
      {/* sidebar */}
      <Sidebar active={'records'}/>
      {/* content-details */}
      <div className='bg-[#f4f4f4] min-h-screen flex flex-col w-full'>
        <div className='flex-1'>
          <Header title={'Records'}/>
        </div>
        {/* footer */}
        <Footer/>
      </div>
    </div>
  )
}

export default Records

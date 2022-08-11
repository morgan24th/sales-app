import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Products = () => {
  return (
    <div className='flex items-start'>
      {/* sidebar */}
      <Sidebar active={'products'}/>
      {/* content-details */}
      <div className='bg-[#f4f4f4] min-h-screen flex flex-col w-full'>
        <div className='flex-1'>
          <Header title={'Products'}/>
        </div>
        {/* footer */}
        <Footer/>
      </div>
    </div>
  )
}

export default Products

import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Products = () => {
  return (
    <div className='flex items-start w-screen h-screen'>
      {/* sidebar */}
      <div className='2xl:w-[14%] w-[18%] z-10'>
        <Sidebar active={'products'}/>
      </div>
      {/* content-details */}
      <div className='bg-[#f4f4f4] 2xl:w-[86%] w-[82%] min-h-screen flex flex-col'>
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

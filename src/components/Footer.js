import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 p-2 px-4 text-lg flex justify-between items-center text-white'>
      {/* company */}
      <div>
        <h1>PrinceMadeIt &copy; {new Date().getFullYear()}</h1>
      </div>
      {/* makers */}
      <div>
        <h1>Designed by AJE Technologies</h1>
        <h1>Built by Prince Morgan</h1>
      </div>
    </div>
  )
}

export default Footer

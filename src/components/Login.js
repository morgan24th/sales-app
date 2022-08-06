import React from 'react'
import { Button, Input } from '@mui/material'
import { Link } from 'react-router-dom'

const Login = () => {

  // navigate to dashboard

  return (
    <div  className='w-screen h-screen flex items-center justify-center'>
      <div className='bg-white flex justify-around items-center p-10 h-[720px] shadow-2xl rounded-lg'>
        {/* image */}
        <div>
          <img className='md:w-[560px]' src='../images/team.png' alt='company name'/>
        </div>
        {/* content */}
        <div className='flex flex-col w-2/4 md:w-[480px]'>
          <div className='flex justify-center'>
            <h1 className='text-4xl font-bold text-blue-800'>Sales App</h1>
          </div>
          <form className='flex flex-col p-10 gap-y-10'>
            <Input placeholder='Username' color='primary'/>
            <Input placeholder='Password' color='primary' type='password'/>
            <Link to={'/dashboard'} ><Button className='h-12 w-full' variant='contained' color='primary'>Login</Button></Link>
          </form>
          <div className='flex justify-end px-10 mt-[-2vh]'>
          <h1 className='hover:text-red-500 hover:cursor-pointer font-semibold text-lg'>Forgot password</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

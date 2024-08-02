import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div id='home' className="hero-section">
        <Navbar />
        <div className="flex items-center max-md:flex-col max-md:flex-col-reverse gap-28 max-lg:gap-12 px-[120px] max-xl:px-[60px] mt-[60px] max-md:mt-[50px]">
            <div className="border-2 border-primary-1 rounded-full w-[35%] max-md:w-[60%] max-md:m-auto">
                <img src="/user.jpg" className='rounded-full w-[500px] max-md:w-full' />
            </div>
            <div className="flex flex-col gap-6 w-[60%] max-md:w-full">
                <h1 className='text-white text-[40px] max-xl:text-[30px] font-extrabold'>Hi, I am Best.</h1>
                <h1 className='text-[65px] max-md:text-[45px] max-lg:text-[37px] max-xl:text-[50px] max-2xl:text-[53px] font-extrabold bg-gradient-to-r from-primary-1 to-white bg-clip-text text-transparent'>A fullstack developer based in Nigeria</h1>
                <p className="text-white font-light text-2xl max-md:hidden">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
            </div>
        </div>
    </div>
  )
}

export default Header
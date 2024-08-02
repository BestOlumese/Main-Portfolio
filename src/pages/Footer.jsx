import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='flex flex-col gap-8 bg-[#0B0410] mt-[75px] px-[120px] max-xl:px-[50px] py-[70px]'>
        <div className="flex flex-col gap-10 justify-center items-center">
            <div className="text-white flex gap-4">
                <a className='social-links' href="https://www.linkedin.com/in/best-amiolemen-292b4118b/" target='_blank'>
                    <FaLinkedinIn />
                </a>
                <a className='social-links' href="https://github.com/BestOlumese" target='_blank'>
                    <BsGithub />
                </a>
            </div>
            <img src="/logo.png" className='w-[60px]' />
            <div className="flex justify-center items-center gap-8 text-white font-bold text-md mb-0">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#portfolios">Portfolios</a>
                <a href="#contact">Contact</a>
            </div>
            <p className='text-primary-1 text-xl text-center'>© 2024 All rights reserved by Amiolemen Best</p>
        </div>
    </div>
  )
}

export default Footer
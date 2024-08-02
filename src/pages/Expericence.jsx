import React from 'react'
import { LiaCertificateSolid } from "react-icons/lia";
import { PiGraduationCapLight } from "react-icons/pi";

const Expericence = () => {
  return (
    <div id='about' className='grid grid-cols-1 md:grid-cols-2  gap-10 bg-[#0B0410] mt-[75px] px-[120px] max-xl:px-[50px] py-[100px]'>
        <div className='flex flex-col gap-8'>
            <div className="flex gap-2 items-center mb-7">
                <LiaCertificateSolid className='text-primary-1 text-[65px] max-xl:text-[40px]' />
                <h1 className='bg-gradient-to-r from-primary-1 to-white bg-clip-text text-transparent text-[45px] font-bold max-xl:text-[35px]'>My Experience</h1>
            </div>
            <div className="item rounded-xl bg-secondary-2 p-8 flex flex-col gap-3 cursor-pointer hover:bg-primary-1 transition-all duration-300 ease-in max-xl:p-4">
                <h2 className='text-primary-1 ex-text font-bold text-2xl hover:text-white max-xl:text-xl'>2024 - Present</h2>
                <h1 className='text-white font-bold text-3xl uppercase max-xl:text-2xl'>Lead Developer</h1>
                <p className='text-white font-light text-md'>SharpSharp</p>
            </div>
            <div className="item rounded-xl bg-secondary-2 p-8 flex flex-col gap-3 cursor-pointer hover:bg-primary-1 transition-all duration-300 ease-in max-xl:p-4">
                <h2 className='text-primary-1 ex-text font-bold text-2xl hover:text-white max-xl:text-xl'>2023 - 2024</h2>
                <h1 className='text-white font-bold text-3xl uppercase max-xl:text-2xl'>FullStack Developer</h1>
                <p className='text-white font-light text-md'>Cinemax Film Distribution</p>
            </div>
            <div className="item rounded-xl bg-secondary-2 p-8 flex flex-col gap-3 cursor-pointer hover:bg-primary-1 transition-all duration-300 ease-in max-xl:p-4">
                <h2 className='text-primary-1 ex-text font-bold text-2xl hover:text-white max-xl:text-xl'>2021 - 2023</h2>
                <h1 className='text-white font-bold text-3xl uppercase max-xl:text-2xl'>FullStack Developer</h1>
                <p className='text-white font-light text-md'>Amibba ICT Solutions</p>
            </div>
        </div>
        <div className='flex flex-col gap-8'>
            <div className="flex gap-2 items-center mb-7">
                <PiGraduationCapLight className='text-primary-1 text-[65px] max-xl:text-[40px]' />
                <h1 className='bg-gradient-to-r from-primary-1 to-white bg-clip-text text-transparent text-[45px] font-bold max-xl:text-[35px]'>Education</h1>
            </div>
            <div className="item rounded-xl bg-secondary-2 p-8 flex flex-col gap-3 cursor-pointer hover:bg-primary-1 transition-all duration-300 ease-in max-xl:p-4">
                <h2 className='text-primary-1 ex-text font-bold text-2xl hover:text-white max-xl:text-xl'>2024 - Present</h2>
                <h1 className='text-white font-bold text-3xl uppercase max-xl:text-2xl'>Computer Science</h1>
                <p className='text-white font-light text-md'>Covenant University</p>
            </div>
            <div className="item rounded-xl bg-secondary-2 p-8 flex flex-col gap-3 cursor-pointer hover:bg-primary-1 transition-all duration-300 ease-in max-xl:p-4">
                <h2 className='text-primary-1 ex-text font-bold text-2xl hover:text-white max-xl:text-xl'>2018 - 2020</h2>
                <h1 className='text-white font-bold text-3xl uppercase max-xl:text-2xl'>Programming Course</h1>
                <p className='text-white font-light text-md'>Udemy</p>
            </div>
            <div className="item rounded-xl bg-secondary-2 p-8 flex flex-col gap-3 cursor-pointer hover:bg-primary-1 transition-all duration-300 ease-in max-xl:p-4">
                <h2 className='text-primary-1 ex-text font-bold text-2xl hover:text-white max-xl:text-xl'>2016-2018</h2>
                <h1 className='text-white font-bold text-3xl uppercase max-xl:text-2xl'>Web Design Course</h1>
                <p className='text-white font-light text-md'>Amibba ICT Solutions</p>
            </div>
        </div>
    </div>
  )
}

export default Expericence
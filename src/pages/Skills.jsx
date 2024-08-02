import React from 'react'
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";

const Skills = () => {
  return (
    <div className='px-[120px] max-xl:px-[50px] py-[100px] flex flex-col gap-10 justify-center items-center'>
        <div className="w-[60%] max-md:w-[100%] flex flex-col justify-center items-center gap-4">
          <h1 className='bg-gradient-to-r from-primary-1 to-white bg-clip-text text-transparent text-[45px] max-xl:text-[39px] font-bold'>My Skills</h1>
          <p className='text-white text-xl text-center'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-6">
          <div className="text-center flex flex-col gap-3">
            <div className="bg-[#140C1C] border  border-[#140C1C] hover:bg-secondary hover:border hover:border-primary-1 skill px-14 py-8 text-center w-full rounded-3xl cursor-pointer shadow-md flex flex-col gap-4 transition-all duration-300 ease-in">
              <IoLogoHtml5 className='text-white html text-[90px]' />
              <h1 className="text-xl font-bold skill-text text-[#747779]">100%</h1>
            </div>
            <h1 className="text-md font-semibold text-primary-1">HTML</h1>
          </div>
          <div className="text-center flex flex-col gap-3">
            <div className="bg-[#140C1C] border  border-[#140C1C] hover:bg-secondary hover:border hover:border-primary-1 skill px-14 py-8 text-center w-full rounded-3xl cursor-pointer shadow-md flex flex-col gap-4 transition-all duration-300 ease-in">
              <IoLogoCss3 className='text-white css text-[90px]' />
              <h1 className="text-xl font-bold skill-text text-[#747779]">100%</h1>
            </div>
            <h1 className="text-md font-semibold text-primary-1">CSS</h1>
          </div>
          <div className="text-center flex flex-col gap-3">
            <div className="bg-[#140C1C] border  border-[#140C1C] hover:bg-secondary hover:border hover:border-primary-1 skill px-14 py-8 text-center w-full rounded-3xl cursor-pointer shadow-md flex flex-col gap-4 transition-all duration-300 ease-in">
              <IoLogoJavascript className='text-white javascript text-[90px]' />
              <h1 className="text-xl font-bold skill-text text-[#747779]">90%</h1>
            </div>
            <h1 className="text-md font-semibold text-primary-1">Javascript</h1>
          </div>
          <div className="text-center flex flex-col gap-3">
            <div className="bg-[#140C1C] border  border-[#140C1C] hover:bg-secondary hover:border hover:border-primary-1 skill px-14 py-8 text-center w-full rounded-3xl cursor-pointer shadow-md flex flex-col gap-4 transition-all duration-300 ease-in">
              <FaPhp className='text-white php text-[90px]' />
              <h1 className="text-xl font-bold skill-text text-[#747779]">90%</h1>
            </div>
            <h1 className="text-md font-semibold text-primary-1">PHP</h1>
          </div>
          <div className="text-center flex flex-col gap-3">
            <div className="bg-[#140C1C] border  border-[#140C1C] hover:bg-secondary hover:border hover:border-primary-1 skill px-14 py-8 text-center w-full rounded-3xl cursor-pointer shadow-md flex flex-col gap-4 transition-all duration-300 ease-in">
              <IoLogoPython className='text-white python text-[90px]' />
              <h1 className="text-xl font-bold skill-text text-[#747779]">80%</h1>
            </div>
            <h1 className="text-md font-semibold text-primary-1">Python</h1>
          </div>
          <div className="text-center flex flex-col gap-3">
            <div className="bg-[#140C1C] border  border-[#140C1C] hover:bg-secondary hover:border hover:border-primary-1 skill px-14 py-8 text-center w-full rounded-3xl cursor-pointer shadow-md flex flex-col gap-4 transition-all duration-300 ease-in">
              <IoLogoReact className='text-white react text-[90px]' />
              <h1 className="text-xl font-bold skill-text text-[#747779]">90%</h1>
            </div>
            <h1 className="text-md font-semibold text-primary-1">React</h1>
          </div>
        </div>
    </div>
  )
}

export default Skills
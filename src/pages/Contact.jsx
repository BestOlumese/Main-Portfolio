import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const Contact = () => {
  return (
    <div id='contact' className='px-[120px] max-xl:px-[50px] py-[100px] flex flex-col gap-6'>
        <p className='text-white'>Want to start a project?</p>
        <h2 className="pulser text-primary-1 font-bold text-[130px] max-lg:text-[40px] max-2xl:text-[70px]">Let's have a chat</h2>
        <a href='mailto:bestolumese@gmail.com' className='text-white text-4xl max-md:text-xl max-2xl:text-3xl flex gap-4 items-center'>
            bestolumese@gmail.com
            <div className="border border-white rounded-full flex justify-center items-center p-1">
            <GoArrowUpRight />
            </div>
        </a>
    </div>
  )
}

export default Contact
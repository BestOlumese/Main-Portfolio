import React, { useEffect } from 'react'
import { PiAsteriskSimpleLight } from "react-icons/pi";

const Marquee = () => {
  return (
    <div className='bg-black relative z-[9] py-7 overflow-hidden -rotate-3 w-full'>
        <div className="flex items-center">
            <div className="marquee relative flex items-center">
                <div className="flex items-center gap-[30px] text-white">
                    <div className="ml-[30px]">
                        <PiAsteriskSimpleLight className='text-[40px] max-md:text-[20px]' />
                    </div>
                    <div>
                        <h5 className="font-bold uppercase max-md:text-[16px] text-[30px]">frontend</h5>
                    </div>
                </div>
                <div className="flex items-center gap-[30px] text-white">
                    <div className="ml-[30px]">
                        <PiAsteriskSimpleLight className='text-[40px] max-md:text-[20px]' />
                    </div>
                    <div>
                        <h5 className="font-bold uppercase max-md:text-[16px] text-[30px]">design</h5>
                    </div>
                </div>
                <div className="flex items-center gap-[30px] text-white">
                    <div className="ml-[30px]">
                        <PiAsteriskSimpleLight className='text-[40px] max-md:text-[20px]' />
                    </div>
                    <div>
                        <h5 className="font-bold uppercase max-md:text-[16px] text-[30px]">backend</h5>
                    </div>
                </div>
                <div className="flex items-center gap-[30px] text-white">
                    <div className="ml-[30px]">
                        <PiAsteriskSimpleLight className='text-[40px] max-md:text-[20px]' />
                    </div>
                    <div>
                        <h5 className="font-bold uppercase max-md:text-[16px] text-[30px]">design</h5>
                    </div>
                </div>
                <div className="flex items-center gap-[30px] text-white">
                    <div className="ml-[30px]">
                        <PiAsteriskSimpleLight className='text-[40px] max-md:text-[20px]' />
                    </div>
                    <div>
                        <h5 className="font-bold uppercase max-md:text-[16px] text-[30px]">development</h5>
                    </div>
                </div>
            </div>
            <div className="marquee relative flex items-center">
                <div className="flex items-center gap-[30px] text-white">
                    <div className="ml-[30px]">
                        <PiAsteriskSimpleLight className='text-[40px] max-md:text-[20px]' />
                    </div>
                    <div>
                        <h5 className="font-bold uppercase max-md:text-[16px] text-[30px]">frontend</h5>
                    </div>
                </div>
                <div className="flex items-center gap-[30px] text-white">
                    <div className="ml-[30px]">
                        <PiAsteriskSimpleLight className='text-[40px] max-md:text-[20px]' />
                    </div>
                    <div>
                        <h5 className="font-bold uppercase max-md:text-[16px] text-[30px]">design</h5>
                    </div>
                </div>
                <div className="flex items-center gap-[30px] text-white">
                    <div className="ml-[30px]">
                        <PiAsteriskSimpleLight className='text-[40px] max-md:text-[20px]' />
                    </div>
                    <div>
                        <h5 className="font-bold uppercase max-md:text-[16px] text-[30px]">backend</h5>
                    </div>
                </div>
                <div className="flex items-center gap-[30px] text-white">
                    <div className="ml-[30px]">
                        <PiAsteriskSimpleLight className='text-[40px] max-md:text-[20px]' />
                    </div>
                    <div>
                        <h5 className="font-bold uppercase max-md:text-[16px] text-[30px]">design</h5>
                    </div>
                </div>
                <div className="flex items-center gap-[30px] text-white">
                    <div className="ml-[30px]">
                        <PiAsteriskSimpleLight className='text-[40px] max-md:text-[20px]' />
                    </div>
                    <div>
                        <h5 className="font-bold uppercase max-md:text-[16px] text-[30px]">development</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Marquee
import React, { useEffect, useState } from 'react'
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
  return (
    <div className={`transition-all duration-700 flex justify-between items-center px-[120px] max-xl:px-[50px] py-[40px] max-xl:py-[20px]  ${isSticky ?  'fixed top-0 left-0 bg-[#0B0410] w-full z-[10] ease-out' : 'max-lg:relative ease-in'}`}>
        <img src="/logo.png" alt="logo" className='w-[60px]' />
        <div className={`nav-links ${menu ? 'max-lg:absolute' : 'max-lg:hidden'}`}>
            <a className='max-lg:text-3xl' href="#home">Home</a>
            <a className='max-lg:text-3xl' href="#about">About</a>
            <a className='max-lg:text-3xl' href="#portfolios">Portfolios</a>
            <a className='max-lg:text-3xl' href="#contact">Contact</a>
        </div>
        <div className='flex gap-4 text-white text-xl max-lg:hidden'>
            <a className='social-links' href="https://www.linkedin.com/in/best-amiolemen-292b4118b/" target='_blank'>
                <FaLinkedinIn />
            </a>
            <a className='social-links' href="https://github.com/BestOlumese" target='_blank'>
                <BsGithub />
            </a>
        </div>
        <CgMenuRight onClick={() => setMenu(!menu)} className={`${!menu ? 'inline-block' : 'hidden'} lg:hidden text-white text-[60px] cursor-pointer`} />
        <IoMdClose onClick={() => setMenu(!menu)} className={`${menu ? 'inline-block' : 'hidden'} lg:hidden text-white text-[60px] cursor-pointer`} />
    </div>
  )
}

export default Navbar
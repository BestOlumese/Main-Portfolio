import React from 'react'

const Portfolios = () => {
  return (
    <div id='portfolios' className='flex flex-col gap-8 bg-[#0B0410] mt-[75px] px-[120px] max-xl:px-[50px] py-[100px]'>
        <div className='flex w-full justify-center items-center'>
            <div className="w-[60%] max-md:w-[100%] flex flex-col justify-center items-center gap-4">
                <h1 className='bg-gradient-to-r from-primary-1 to-white bg-clip-text text-transparent text-[45px] max-sm:text-[30px] max-xl:text-[39px] text-center font-bold'>My Recent Works</h1>
                <p className='text-white text-xl text-center'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className="bg-secondary-2 p-8  max-lg:p-4 max-md:gap-6 rounded-lg flex flex-col gap-4">
                <img src="./img/appleclone.png" />
                <div className="flex flex-col text-white gap-4">
                    <a href="https://apple-clone-tar2.onrender.com/"   target='_blank'>
                        <h1 className='text-3xl font-bold  hover:text-primary-1'>Apple Clone</h1>
                    </a>
                    <p>A simple apple clone website designed with react</p>
                </div>
            </div>
            <div className="bg-secondary-2 p-8  max-lg:p-4 max-md:gap-6 rounded-lg flex flex-col gap-4">
                <img src="./img/anispot.png" />
                <div className="flex flex-col text-white gap-4">
                    <a href="https://animespot-2cs8.onrender.com/"   target='_blank'>
                        <h1 className='text-3xl font-bold  hover:text-primary-1'>Anime Search Website</h1>
                    </a>
                    <p>A simple anime search website designed with reactjs</p>
                </div>
            </div>
            <div className="bg-secondary-2 p-8  max-lg:p-4 max-md:gap-6 rounded-lg flex flex-col gap-4">
                <img src="./img/bestblog.png" />
                <div className="flex flex-col text-white gap-4">
                    <a href="https://best-blog.onrender.com/"   target='_blank'>
                        <h1 className='text-3xl font-bold  hover:text-primary-1'>Best Blog</h1>
                    </a>
                    <p>A simple blog website designed with react and nodejs</p>
                </div>
            </div>
            <div className="bg-secondary-2 p-8  max-lg:p-4 max-md:gap-6 rounded-lg flex flex-col gap-4">
                <img src="./img/bestchat.png" />
                <div className="flex flex-col text-white gap-4">
                    <a href="https://chat-app-prod-hoth.onrender.com/"   target='_blank'>
                        <h1 className='text-3xl font-bold  hover:text-primary-1'>Best Chat App</h1>
                    </a>
                    <p>A simple chat app designed with react and nodejs</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolios
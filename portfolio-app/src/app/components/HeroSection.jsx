"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12 mt-5'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-gray-500'>
                        Привет, я{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                        "Доржиев Ардан",
                        1000,
                        "Back-end разработчик",
                        1000,
                        "Студент ИШИТР",
                        1000,
                        "Dev-ops инжинер",
                        1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                    </h1>
                <p className="text-white text-base sm:text-lg lg:text-xl mb-6" ></p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit text-white bg-gradient-to-br from-green-600 to-black-600  rounded-full bg-[#181818] mr-4'>Телеграмм</button>
                    <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-green-500 to-black-600 hover:bg-slate-800 text-white border border-green-400 mt-3">
                        <span className=' block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>GitHub</span>
                        </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative'>
                    <Image src="/Images/avatar.png" width={300} height={300} alt="Me"
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'/> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection

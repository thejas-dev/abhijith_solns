"use client"
import {useState} from 'react';
import { TbMilitaryAward } from "react-icons/tb";
import {FaStudiovinari} from 'react-icons/fa';
import {FaStackOverflow} from 'react-icons/fa';
import {motion} from 'framer-motion';

export default function Aboutus(){
    const [currentTab,setCurrentTab] = useState('mission');

    return(
        <motion.main 
        initial={{
            y:60,
            opacity:0.4
        }}
        whileInView={{ y:0,opacity:1}}
        transition={{
            duration:0.5
        }}
        className="flex md:px-10 px-4 h-full py-[70px] md:flex-row flex-col w-full">
            <div className="flex md:w-[50%] w-full md:border-r-[1px] border-gray-400 flex-col gap-5 pr-7">
                <div className="flex flex-col">
                    <h1 className="text-3xl text-black font-normal">About us</h1>
                    <div className="h-[2px] mt-[2px] bg-blue-600 w-[80px]"></div>
                    <h1 className="mt-9 font-semibold text-lg text-gray-800">
                    Welcome to ABHIJITH Electronic Solution, your gateway to excellence in embedded systems education. At ABHIJITH, we are passionate about cultivating a community of technologically adept individuals.
                    </h1>
                    <p className="text-sm text-gray-800 mt-6 font-normal">
                    Learn from seasoned professionals with a wealth of experience in embedded systems. Gain practical skills through our innovative and interactive training methods. Join a community that encourages creativity, problem-solving, and continuous learning. Stay ahead in the field with courses covering Arduino, Nodemcu, Raspberry Pi, 8051, ARM7, and more.
                    </p>
                    <div className="mt-6">
                        <button className="bg-blue-600 text-white px-11 rounded-md transition-all duration-200
                        ease-in-out py-2">More info</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-full md:w-[50%] w-full md:mt-0 mt-14 py-1 px-2 md:px-8">
                <div className="w-full flex items-center gap-2">
                    <button 
                    onClick={()=>setCurrentTab('mission')}
                    className={`py-3 hover:bg-blue-600/10 transition-all duration-200 ease-in-out 
                    hover:text-blue-600 text-lg cursor-pointer w-[200px] border-t-[2px] 
                    hover:border-blue-500 text-gray-700 font-bold ${currentTab === 'mission' ? 'border-blue-500 bg-blue-600/10 text-blue-600':'border-gray-400 ' } `}>
                        Mission
                    </button>
                    <button 
                    onClick={()=>setCurrentTab('vision')}
                    className={`py-3 hover:bg-blue-600/10 transition-all duration-200 ease-in-out 
                    hover:text-blue-600 text-lg cursor-pointer w-[200px] border-t-[2px]
                    hover:border-blue-500 text-gray-700 font-bold ${currentTab === 'vision' ? 'border-blue-500 bg-blue-600/10 text-blue-600':'border-gray-400 ' } `}>
                        Vision
                    </button>
                </div>
                {
                    currentTab=== 'mission'?
                    <motion.div 
                    
                    className='mt-10 px-3 flex flex-col'>
                        <FaStackOverflow className="h-[70px] w-[70px] text-gray-800"/>
                        <h1 className='text-lg mt-7 font-semibold text-gray-700'>
                        Equipping individuals with embedded systems expertise through innovative training and hands-on experiences.
                        </h1>

                    </motion.div>
                    :
                    <motion.div 
                    className='mt-10 px-3 flex flex-col'>
                        <FaStudiovinari className="h-[70px] w-[70px] text-gray-800"/>
                        <h1 className='text-lg mt-7 font-semibold text-gray-700'>
                        To be a premier hub for excellence in embedded systems education, fostering innovation and preparing individuals for technological leadership.
                        </h1>

                    </motion.div>

                }

            </div>


            
        </motion.main>

    )


}
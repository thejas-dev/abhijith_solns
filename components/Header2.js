"use client"

import {
    merriweather
    } from '../utils/fonts';
import Link from 'next/link';
import {RxHamburgerMenu} from 'react-icons/rx';
import {useState} from 'react'
import {RiCloseFill} from 'react-icons/ri';


export default function Header({currentTab,setCurrentTab}){
    const [openSideBar,setOpenSideBar] = useState(false)

    return (
        <>
        <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-800 drop-shadow-xl flex justify-between px-7 py-[10px] items-center ">
            <div className="flex flex-col">
                <h1 className={`${merriweather.className} m-0 p-0 leading-none text-2xl text-white`}>
                    ABHIJITH
                </h1>
                <p className="text-sm m-0 p-0 font-serif text-white leading-none">Electronic solution</p>

            </div>
            <div className="hidden md:flex items-center gap-12">
                <Link href="/"><span className="text-lg text-white transition-all duration-200 ease-in-out cursor-pointer
                hover:scale-110">Home page</span></Link>
                <span 
                onClick={()=>{
                    if(currentTab === 'Queries'){
                        setCurrentTab('New students')
                    }else{  
                        setCurrentTab('Queries')
                    }
                }}
                className="text-lg text-white transition-all duration-200 ease-in-out cursor-pointer
                hover:scale-110">{currentTab === 'New students' ? 'Queries' : 'New students'}</span>
                <span 
                onClick={()=>{
                    localStorage.removeItem('abhijithStaff');
                    window.location.reload();
                }}
                className="text-lg text-white transition-all duration-200 ease-in-out cursor-pointer
                hover:scale-110">Logout</span>                
            </div> 
            <RxHamburgerMenu 
            onClick={()=>{setOpenSideBar(true)}}
            className="h-7 w-7 md:hidden cursor-pointer text-white"/>

        </div>
         <div className={`md:hidden fixed transition-all duration-200 ease-in-out bg-gradient-to-b from-blue-500 via-blue-700 to-blue-800 ${openSideBar ? 'top-0' : 'top-[100%]'} left-0 h-full z-50 w-full`}>
            <div className="w-full flex flex-col relative justify-between px-7 pt-[80px] gap-5 items-center ">
                <RiCloseFill 
                onClick={()=>setOpenSideBar(false)}
                className="h-7 w-7 text-white absolute top-5 right-5 cursor-pointer"/>
                <div className="flex flex-col md:py-[0px] items-center">
                    <h1 className={`${merriweather.className} m-0 p-0 leading-none text-2xl text-white`}>
                        ABHIJITH
                    </h1>
                    <p className="text-lg m-0 p-0 mt-2 font-serif text-white leading-none">Electronic solutions</p>

                </div>
                <div className="flex flex-col items-center gap-12 mt-5">
                    <Link href="/"><span className="text-lg text-white transition-all duration-200 ease-in-out cursor-pointer
                    hover:scale-110">Home page</span></Link>
                    <span 
                    onClick={()=>{
                        if(currentTab === 'Queries'){
                            setCurrentTab('New students')
                        }else{  
                            setCurrentTab('Queries')
                        }
                        setOpenSideBar(false)
                    }}
                    className="text-lg text-white transition-all duration-200 ease-in-out cursor-pointer
                    hover:scale-110">{currentTab === 'New students' ? 'Queries' : 'New students'}</span>
                    <span 
                    onClick={()=>{
                        localStorage.removeItem('abhijithStaff');
                        window.location.reload();
                    }}
                    className="text-lg text-white transition-all duration-200 ease-in-out cursor-pointer
                    hover:scale-110">Logout</span>
                </div> 
               

            </div>
        </div>
        </>
    )
}
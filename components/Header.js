import {
    merriweather
    } from '../utils/fonts';
export default function Header(){

    return (
        <div className="w-full sticky top-0 z-50  bg-gradient-to-r from-blue-500 to-blue-800 drop-shadow-xl flex justify-between px-7 md:py-4 items-center ">
            <div className="flex flex-col">
                <h1 className={`${merriweather.className} m-0 p-0 leading-none text-2xl text-white`}>
                    ABHIJITH
                </h1>
                <p className="text-sm m-0 p-0 font-serif text-white leading-none">Electronic solution</p>

            </div>
            <div className="flex items-center gap-12">
                <span className="text-lg text-white transition-all duration-200 ease-in-out cursor-pointer
                hover:scale-110">Internship</span>
                <span className="text-lg text-white transition-all duration-200 ease-in-out cursor-pointer
                hover:scale-110">Queries</span>
                <span className="text-lg text-white transition-all duration-200 ease-in-out cursor-pointer
                hover:scale-110">About us</span>
                <span className="text-lg text-white transition-all duration-200 ease-in-out cursor-pointer
                hover:scale-110">Contact us</span>
            </div> 

        </div>

    )
}
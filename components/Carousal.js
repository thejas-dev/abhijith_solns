"use client"
import { FaChevronRight, FaChevronLeft, FaGalacticRepublic} from "react-icons/fa"
import {useEffect} from 'react';
//carousels/Bootstrap.js
import { useState } from "react";
import { items } from "../public/Items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";
export default function Carousal(){
    
    const { bootstrap } = items;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    // useEffect(()=>{
    //     const rightButton = document.getElementById("right")
    //     const leftButton = document.getElementById("left")
    //     const images = document.getElementsByClassName("image")
    //    // console.log(rightButton)
    //     // rightButton.addEventListener("click",(e)=>{
    //     //     images.forEach((img,index)=>{
    //     //        if(index==1)
    //     //     })
    //     // })
    //     leftButton.addEventListener("click",(e)=>{
            
    //     })
    // },[])
    

    return (
        <main className="w-full bg-black">
           <Carousel activeIndex={index} className="max-h-[90vh] overflow-hidden"  onSelect={handleSelect}>
          {bootstrap.map((item) => (
            <Carousel.Item key={item.id} className={`overflow-hidden h-full w-full relative `} interval={4000}>
              <img src={item.imageUrl} alt="slides" className="w-full object-cover" />
              <div className="bg-black/40 absolute top-0 left-0 absolute h-full w-full"/>
              <Carousel.Caption className={`max-h-[100px] md:max-w-[800px] max-w-[300px] top-[24%] md:px-5 py-3 flex items-center 
              jusitfy-center flex-col mx-auto left-0 bottom-0 rounded-lg right-0 absolute `}>
                <h3 className="lg:text-[35px] md:text-[20px] text-[17px] m-auto" >{item.title}</h3>
                <p className="md:mt-1 lg:text-md sm:text-sm text-xs " >{item.body}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
           {/* <div id="default-carousel" className="w-full h-full">
             <div className="w-full group h-full relative " >
                <div id="left" className="absolute group-hover:absolute h-10 w-10 bg-black/30 p-2 right-5 cursor-pointer 
                top-[50%] z-45 rounded-full hover:scale-110 transition-all duration-200 ease-in-out ">
                    <FaChevronRight className="h-full w-full text-white/90"/>
                </div>
                <div id="right" className="absolute h-10 w-10 bg-black/30 p-2 left-5 cursor-pointer 
                top-[50%] z-45 rounded-full hover:scale-110 transition-all duration-200 ease-in-out ">
                    <FaChevronLeft className="h-full w-full text-white/90"/>
                </div>
                <div className={`w-full h-full absolute`}>
                    <img src="https://ik.imagekit.io/d3kzbpbila/thejashari_At6tEzILo" className="absolute image top-0 left-0 h-full w-[100%] object-cover mx-auto block" alt="img-01"></img>
                </div>
                <div className={`w-full h-full absolute`}>
                    <img src="https://ik.imagekit.io/d3kzbpbila/thejashari_1hscePkSN" className="absolute image top-0 left-0 h-full object-cover w-[0%]" alt="img-01"></img>
                </div>
                <div className={`w-full h-full absolute`}>
                    <img src="https://ik.imagekit.io/d3kzbpbila/thejashari_Hqtl1lLpGN" className="absolute image top-0 left-0 h-full object-cover w-[0%]" alt="img-01"></img>
                </div>
                <div className={`w-full h-full absolute`}>
                    <img src="https://ik.imagekit.io/d3kzbpbila/thejashari_Hqtl1lLpGN" className="absolute image top-0 left-0 h-full object-cover w-[0%]" alt="img-01"></img>
                </div>
                <div className="absolute flex items-center bottom-5 z-50 left-0 justify-center gap-3 right-0">
                    <div className="h-[6px] w-[6px] bg-white rounded-full"/>
                    <div className="h-[6px] w-[6px] bg-white/50 rounded-full"/>
                    <div className="h-[6px] w-[6px] bg-white/50 rounded-full"/>
                    <div className="h-[6px] w-[6px] bg-white/50 rounded-full"/>
                </div>
             </div>
             
         </div> */}
        </main>

    )
}
"use client"

import {BiLogoGmail} from 'react-icons/bi'
import {useState,useEffect} from 'react';
import Header2 from './Header2'
import {getAllRegisters} from '../utils/ApiRoutes'
import axios from 'axios';
import {RiArrowRightDoubleFill} from 'react-icons/ri';
import {MdLocalPhone} from 'react-icons/md';
import {VscLocation} from 'react-icons/vsc';
import {MdPerson,MdGroup} from 'react-icons/md';
import QueriesStaff from './QueriesStaff'

export default function StaffComponent() {
	// body...
	const [currentTab,setCurrentTab] = useState('New students');
	const [allRegisters,setAllRegisters] = useState([]);

	const getAllStudents = async() => {
		const {data} = await axios.post(getAllRegisters,{
			data:'test'
		});
		if(data?.status){
			setAllRegisters(data?.register)
		}
	}

	const getAllQueries = async() => {

	}

	useEffect(()=>{
		getAllStudents();getAllQueries();
	},[])

	console.log(allRegisters)

	return(
		<main className="min-h-screen w-full">
			<Header2 setCurrentTab={setCurrentTab} currentTab={currentTab} />
			<div className="w-full flex mt-5 px-5 py-2 items-center gap-2">
                <button 
                onClick={()=>setCurrentTab('New students')}
                className={`py-3 hover:bg-blue-600/10 transition-all duration-200 ease-in-out 
                hover:text-blue-600 text-[15px] cursor-pointer w-[200px] border-t-[2px] 
                hover:border-blue-500 text-gray-700 font-semibold ${currentTab === 'New students' ? 'border-blue-500 bg-blue-600/10 text-blue-600':'border-gray-400 ' } `}>
                    New students
                </button>
                <button 
                onClick={()=>setCurrentTab('Queries')}
                className={`py-3 hover:bg-blue-600/10 transition-all duration-200 ease-in-out 
                hover:text-blue-600 text-[15px] cursor-pointer w-[200px] border-t-[2px]
                hover:border-blue-500 text-gray-700 font-semibold ${currentTab === 'Queries' ? 'border-blue-500 bg-blue-600/10 text-blue-600':'border-gray-400 ' } `}>
                    Queries
                </button>
            </div>
            <div className="my-3 bg-gray-300 h-[1.2px] w-[90%] ml-4"/>
            {
            	currentTab === 'New students' ? 

	            <div className="w-full grid md:grid-cols-5 px-5 py-3 gap-5 sm:grid-cols-3 xs:grid-cols-3 grid-cols-1">
	            	{
	            		allRegisters?.map((register,j)=>(
	            			<div key={j}>
		            			<div key={j} className="flex flex-col p-3 rounded-lg border-gray-500 border-[1px] shadow-md bg-gray-50 shadow-gray-400/20">
		            				<h1 className="text-[17px] text-gray-800 hover:text-blue-500 cursor-pointer font-semibold">{register?.name}</h1>
		            				<div className="w-[95%] mx-auto my-2 bg-gray-400 h-[1.1px]" />
		            				<div className="w-full mt-1 flex flex-col gap-1">
		            					<a href={`mailto:${register?.email}`}>
		            					<div className="flex items-center gap-[6px] text-gray-800 text-sm hover:text-blue-500 cursor-pointer hover:underline break-all">
		            						<BiLogoGmail className="h-4 w-4"/> {register?.email}
		            					</div></a>
		            					<div className="flex items-center gap-[6px] text-gray-800 text-sm hover:text-orange-500 cursor-pointer hover:underline break-all">
		            						<MdLocalPhone className="h-4 w-4"/> {register?.number}
		            					</div>
		            					<div className="flex items-center gap-[6px] text-gray-800 text-sm cursor-pointer hover:underline break-all">
		            						{
		            							register?.singleOrGroup ==='Single student'? 
		            							<MdPerson className="h-4 w-4"/>
		            							:
		            							<MdGroup className="h-4 w-4"/>
		            						} {register?.singleOrGroup}
		            					</div>
		            				</div>
		            				<h1 className="text-[15px] text-gray-800 font-semibold mt-2">{register?.trainingOrInternship}</h1>
		            				<p className="text-sm font-normal text-gray-700 mt-2 hover:text-blue-500 cursor-pointer flex leading-none items-center hover:underline"><RiArrowRightDoubleFill className="h-3 w-3 mr-1"/> {register?.areaOfTraining}</p>
		            				<h1 className="text-[15px] text-gray-800 font-semibold mt-2">{register?.schoolOrCollege} {register?.schoolOrCollege === 'College' ? register?.yearOfStudy : `${register?.yearOfStudy}`} </h1>
		            				<div className="w-[95%] mx-auto my-2 bg-gray-400 h-[1.1px]" />
		            				<a target="_blank" href={`https://www.google.co.in/maps/search/${register?.instituteName.replaceAll(' ','+')}`}><p className="text-xs font-normal text-gray-700 hover:text-blue-500 cursor-pointer flex leading-none items-center hover:underline"><RiArrowRightDoubleFill className="h-3 w-3 mr-1"/> {register?.instituteName} <VscLocation className="h-3 w-3"/></p></a>
		            			</div>
	            			</div>
	            		))
	            	}

	            </div>
            	:
            	<QueriesStaff />
            }
		</main>
	)
}
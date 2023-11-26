"use client"

import {FaReply} from 'react-icons/fa'
import {useState,useEffect} from 'react';
import {FaAngleDown} from 'react-icons/fa';
import {RxCross1} from 'react-icons/rx';
import {motion} from 'framer-motion';

export default function QueryCard({query,j,loading,addReply}) {
	const [openReplyBox,setOpenReplyBox] = useState(false);
	const [replyText,setReplyText] = useState('');
	const [openReplies,setOpenReplies] = useState(false);

	function convertISOStringToCustomFormat(isoString) {

	    const customDate = new Date(isoString);
	    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	    const month = months[customDate.getMonth()];
	    const day = customDate.getDate();
	    const hours = customDate.getHours() % 12 || 12; // Convert 24-hour to 12-hour format
	    const minutes = customDate.getMinutes();
	    const period = customDate.getHours() < 12 ? 'am' : 'pm';

	    const customDateString = `${month} ${day}, ${hours}.${minutes}${period}`;

	    return customDateString;
	}

	useEffect(()=>{
		if(query){
			setReplyText('');
			setOpenReplyBox(false);
		}
	},[query])

	return (
		<div className="flex flex-col gap-2">
			<motion.div 
			initial={{
				opacity:0,
				scale:0
			}}
			whileInView={{
				opacity:1,
				scale:1
			}}
			transition={{
				duration:0.8
			}}
			className="flex bg-gray-50 p-3 pb-2 rounded-xl border-[1px] border-gray-300 
			flex-col gap-1">
				<div className="flex items-center gap-2">
					<h1 className="leading-none gap-2 flex items-center text-lg font-semibold text-gray-900"><span className="hover:underline 
					hover:text-blue-600 transition-all duration-200 ease-in-out cursor-pointer">{query?.name}</span>
					<span className="text-sm font-normal text-gray-500">{convertISOStringToCustomFormat(query?.createdAt)}</span></h1>
				</div>
				<h1 className="text-sm text-gray-600 leading-none">{query?.query}</h1>
				{
					query?.replies?.length > 0 &&
					<div className="w-full flex items-center gap-2">
						<div className="w-[90%] bg-gray-300 my-2 h-[1.4px]"/>
						<div 
						onClick={()=>setOpenReplies(!openReplies)}
						className="p-[2px] hover:bg-gray-300 transition-all duration-200 ease-in-out 
						cursor-pointer rounded-full bg-gray-200">
							<FaAngleDown className={`h-3 w-3 text-gray-600 transition-all duration-200 ease-in-out
							${openReplies ? 'rotate-180': 'rotate-0'} `}/>
						</div>
					</div>
				}
				{
				    openReplies && query?.replies?.map((reply,m)=>(
						<div key={m} className="flex ml-10 flex-col">
							<div className="flex items-center gap-2">
								<h1 className="leading-none gap-2 flex items-center text-[16px] font-semibold text-gray-900"><span className="hover:underline 
								hover:text-blue-600 transition-all duration-200 ease-in-out cursor-pointer">{reply?.name}</span>
								<span className="text-sm font-normal text-gray-500">{convertISOStringToCustomFormat(reply?.createdAt)}</span></h1>
							</div>
							<h1 className="text-sm text-gray-600 leading-none">{reply?.replyText}</h1>
						</div>
					))
				}
			</motion.div>
		</div>
	)
}
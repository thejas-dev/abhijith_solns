"use client"

import {FaReply} from 'react-icons/fa'
import {useState,useEffect} from 'react';
import {FaAngleDown} from 'react-icons/fa';
import {RxCross1} from 'react-icons/rx';
import {motion} from 'framer-motion';

export default function QueryCardSmall({query,j,loading,addReply}) {
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
			className="flex bg-gray-50 px-3 py-2 rounded-xl border-[1px] border-gray-300 
			flex-col">
				<div className="flex items-center gap-2">
					<h1 className="leading-none gap-2 flex items-center text-[16px] font-semibold text-gray-900"><span className="hover:underline 
					hover:text-blue-600 transition-all duration-200 ease-in-out cursor-pointer">{query?.name}</span>
					<span className="text-xs font-normal text-gray-500">{convertISOStringToCustomFormat(query?.createdAt)}</span></h1>
				</div>
				<h1 className="text-sm text-gray-600 leading-none">{query?.query}</h1>
				{
					openReplyBox ? 
					<RxCross1 onClick={()=>setOpenReplyBox(!openReplyBox)} className="text-gray-500 hover:text-gray-700 cursor-pointer h-4 w-4"/>
					:
					<FaReply onClick={()=>setOpenReplyBox(!openReplyBox)} className="text-gray-500 hover:text-gray-700 cursor-pointer h-4 w-4"/>
				}
				{
					openReplyBox &&
					<div className="w-full mt-2 mb-2 flex items-center gap-3">
						<div className="bg-gray-100 w-[70%] px-2 py-1 rounded-lg border-gray-300 bg-white border-[1px]">
							<input type="text" className="outline-none bg-whtie text-sm text-gray-800"
							value={replyText} onChange={(e)=>{if(!loading) setReplyText(e.target.value)}}
							/>
						</div>
						<button 
						onClick={()=>{addReply(query._id,replyText)}}
						className="bg-blue-600 text-white px-3 py-1 rounded-lg border-gray-200 border-[1px]">{loading ? <span className="loader1" /> : 'Reply'}</button>
					</div>
				}
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
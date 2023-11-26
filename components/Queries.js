"use client"

import {useEffect,useState} from 'react';
import {createQuery,getAllQueries,updateRepliesById} from '../utils/ApiRoutes';
import axios from 'axios'
import QueryCard from './QueryCard';
import QueryCardSmall from './QueryCardSmall';
import {RiArrowRightDoubleLine} from 'react-icons/ri';
import {IoMdClose} from 'react-icons/io';

export default function Queries(){
    const [commentText,setCommentText] = useState('');
    const [loading,setLoading] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [queries,setQueries] = useState([]);
    const [showFillTheDetailsAlert,setShowFillTheDetailsAlert] = useState(false);
    const [replyLoading,setReplyLoading] = useState(false);
    const [openMoreQueries,setOpenMoreQueries] = useState(false);

    const fetchQueries = async(req,res) => {
        const {data} = await axios.get(getAllQueries);
        if(data?.status){
            setQueries(data?.queries);
        }
    }

    const addQueries = async() => {
        setLoading(true);
        const {data} = await axios.post(createQuery,{
            name,email,query:commentText
        })
        if(data.status){
            setLoading(false);
            setName('');
            setCommentText('');
            setEmail('');
            fetchQueries()
        }
    }

    useEffect(()=>{fetchQueries()},[])

    const checkAndAddQuery = async() => {
        if(name.length > 2 && email.length > 2 && commentText.length > 2){
            addQueries()
        }else{
            setShowFillTheDetailsAlert(true)
            setTimeout(()=>{
                setShowFillTheDetailsAlert(false)
            },2000)
        }
    }

    const addReply = async(queryId,replyText) => {
        if(replyText.length > 0){
            setReplyLoading(true);
            const currQueries = [...queries];
            const idx = currQueries.findIndex(quer=>{
                if(quer._id===queryId){
                    return true
                }
                return false
            })
            if(idx > -1){
                const currQuery = currQueries[idx]
                const newReply = {
                    name:'Indumathi',
                    email:'indumathi@gmail.com',
                    replyText,
                    createdAt:new Date().toISOString()
                }
                const newReplies = [newReply,...currQuery?.replies];
                const {data} = await axios.post(updateRepliesById,{
                    replies:newReplies,
                    id:queryId
                })
                if(data?.status){
                    fetchQueries();
                    setReplyLoading(false)
                }else{
                    setReplyLoading(false)
                }
            }
        }else{
            setShowFillTheDetailsAlert(true)
            setTimeout(()=>{
                setShowFillTheDetailsAlert(false)
            },2000)
        }
    }

    return (
        <main id="queries" className="w-full min-h-screen md:px-7 px-4 py-5">
            <div className={`fixed z-50 h-full w-full right-0 ${openMoreQueries ? 'top-0' : 'top-[100%]'} flex items-center justify-center
            bg-black/30 backdrop-blur-md transition-all duration-200 ease-in-out`}>
                <div className="relative m-auto lg:w-[40%] md:w-[60%] border-[1px] border-gray-300/50 sm:w-[80%] sm:max-h-[85%] 
                h-full w-full sm:rounded-3xl bg-white pb-3 overflow-hidden 
                scrollbar-none flex flex-col">
                    <div className="flex py-2 pb-1 sticky top-0 bg-white backdrop-blur-lg gap-3 px-2 border-b-[1px] border-gray-300">
                        <div 
                        onClick={()=>{
                            setOpenMoreQueries(false);
                        }}
                        className="p-2 hover:bg-gray-200 cursor-pointer transition-all duration-200 ease-in-out rounded-full">
                            <IoMdClose className="h-5 w-5 cursor-pointer text-black"/>
                        </div>
                        <h1 className="text-xl mt-1 text-gray-800 font-semibold">Students Queries</h1>
                    </div>
                    <div className="w-full h-full overflow-y-auto scrollbar-none md:px-3 py-3 gap-2 flex flex-col">
                        {
                            queries?.map((query,j)=>{
                                return(
                                    <QueryCardSmall query={query} j={j} key={j} addReply={addReply} loading={replyLoading} />
                                )    
                            })
                        }
                    </div>
                </div>
            </div>

            <div className={`fixed bottom-5 ${showFillTheDetailsAlert ? 'right-5' : '-right-[100%]'}
            bg-blue-600 transition-all duration-200 text-sm ease-in-out text-white px-3 py-2 rounded-lg border-[1px] border-gray-300`}>
                Please fill in all the required details.
            </div>
            <h1 className="text-3xl font-semibold text-black text-center leading-none">Having any queries?</h1>
            <p className="text-md text-gray-800 text-center">Post your queries here, we will reply within 24 hours.</p>
            <form onSubmit={(e)=>{e.preventDefault()}} class="w-full max-w-xl mx-auto flex flex-col mt-2">
                <div className="w-full grid grid-cols-2 gap-3 md:px-3 px-1">
                    <div className="w-full group overflow-hidden rounded-lg flex flex-col border-[1px] border-gray-300">
                        <div className="p-2 peer">
                            <input type="text" className="bg-transparent outline-none w-full text-md text-gray-800"
                            placeholder="Enter your name"
                            value={name} onChange={(e)=>{if(!loading) setName(e.target.value)}}
                            /> 
                        </div>
                        <div className="w-full bg-gray-300 peer-focus-within:bg-blue-600 transition-all duration-200 ease-in-out group-hover:bg-blue-600 h-[2px]"/>
                    </div>
                    <div className="w-full group overflow-hidden rounded-lg flex flex-col border-[1px] border-gray-300">
                        <div className="p-2 peer">
                            <input type="email" className="bg-transparent outline-none w-full text-md text-gray-800"
                            placeholder="Enter your mail ID"
                            value={email} onChange={(e)=>{if(!loading) setEmail(e.target.value)}}
                            /> 
                        </div>
                        <div className="w-full bg-gray-300 peer-focus-within:bg-blue-600 transition-all duration-200 ease-in-out group-hover:bg-blue-600 h-[2px]"/>
                    </div>
                </div>
                <div className="mt-2 w-full md:px-3 px-1">
                    <div className="w-full group overflow-hidden rounded-lg flex flex-col border-[1px] border-gray-300">
                        <div className="p-2 peer">
                            <textarea className="resize-none h-[100px] bg-transparent outline-none w-full text-md text-gray-800"
                            placeholder="Enter your queries here"
                            value={commentText} onChange={(e)=>{if(!loading) setCommentText(e.target.value)}}
                            /> 
                        </div>
                        <div className="w-full bg-gray-300 peer-focus-within:bg-blue-600 transition-all duration-200 ease-in-out group-hover:bg-blue-600 h-[3px]"/>
                    </div>
                </div>
                <button
                onClick={checkAndAddQuery}
                className={`text-white rounded-lg px-7 py-2 mt-2 mx-1 hover:bg-blue-700 bg-blue-600 text-lg`}>{loading ? <span className="loader1"/> :'Submit'}</button>
            </form>

            <div className="flex flex-col max-w-xl md:px-3 px-1 mt-4 mx-auto">
                <h1 className='text-xl font-semibold text-gray-800 mb-3 text-center'>Submitted queries</h1>
                <div className="flex flex-col gap-2">
                    {
                        queries?.map((query,j)=>{
                            if(j<2){
                                return(
                                    <QueryCard query={query} j={j} key={j} addReply={addReply} loading={replyLoading} />
                                )
                            }
                        })
                    }
                </div>   
                <h1 
                onClick={()=>setOpenMoreQueries(true)}
                className="flex items-center gap-1 cursor-pointer hover:text-sky-500 ml-2 text-sm mt-2 text-sky-600">
                    More Queries <RiArrowRightDoubleLine className="h-4 w-4"/> 
                </h1>     
            </div>

        </main>
    )
}
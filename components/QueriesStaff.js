"use client"

import {useEffect,useState} from 'react';
import {createQuery,getAllQueries,updateRepliesById} from '../utils/ApiRoutes';
import axios from 'axios'
import QueryCardStaff from './QueryCardStaff';
import QueryCardSmall from './QueryCardSmall';
import {RiArrowRightDoubleLine} from 'react-icons/ri';
import {IoMdClose} from 'react-icons/io';

export default function QueriesStaff(){
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
        <main className="w-full min-h-screen md:px-7 px-1 py-2">
            
            <div className="flex flex-col max-w-xl md:px-3 px-1 mt-4 mx-auto">
                <div className="flex flex-col gap-2">
                    {
                        queries?.map((query,j)=>{
                            return(
                                <QueryCardStaff query={query} j={j} key={j} addReply={addReply} loading={replyLoading} />
                            )
                        })
                    }
                </div>       
            </div>

        </main>
    )
}
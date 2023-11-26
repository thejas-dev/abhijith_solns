"use client"

import {useState,useEffect} from 'react';
import {login} from '../../utils/ApiRoutes';
import axios from 'axios';
import StaffComponent from '../../components/StaffComponent';

export default function Home() {
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('');
	const [loading,setLoading] = useState(false);
	const [loggedIn,setLoggedIn] = useState(false);
	const [screenLoading,setScreenLoading] = useState(true);

	const loginStaff = async() => {
		const {data} = await axios.post(login,{
			email,password
		})
		if(data?.status){
			localStorage.setItem('abhijithStaff',JSON.stringify({email,password}));
			setLoggedIn(true);
		}else{
			alert("Email or password is incorrect")
		}
	}

	const checkAndLoginStaff = async() => {
		if(email.length > 2){
			loginStaff()
		}
	}

	const loginByHistory = async() => {
		const credentials = JSON.parse(localStorage.getItem("abhijithStaff"));
		const {data} = await axios.post(login,credentials);
		if(data?.status){
			localStorage.setItem('abhijithStaff',JSON.stringify(credentials));
			setScreenLoading(false);
			setLoggedIn(true);
		}else{
			setScreenLoading(false);
		}
	}

	useEffect(()=>{
		if(localStorage.getItem('abhijithStaff')){
			loginByHistory();
		}else{
			setScreenLoading(false);
		}
	},[])

	if(screenLoading){
		return (
			<main className="w-full flex items-center flex-col gap-5 min-h-screen bg-gray-50 justify-center">
				<span className="loader"/>
				<h1 className="text-xl font-semibold text-blue-600 animate-pulse">Loading...</h1>
			</main>
		)
	}

	if(loggedIn){

		return (
			<StaffComponent />
		)
	}

	return (
		<main className="h-screen w-full flex items-center justify-center bg-[url('https://i0.wp.com/pallavaggarwal.in/wp-content/uploads/2019/12/embedded-hardware-reviews-1.jpg')] bg-center bg-cover">
			<div className="p-3 rounded-lg border-gray-300 border-[1px] md:w-[40%] sm:w-[60%] xs:w-[75%] w-[90%] bg-gray-700/70">
				<h1 className="text-[23px] font-semibold text-gray-200">Staff Login</h1>
				<div className="w-full my-2 bg-gray-300 h-[1.2px]"/>
				<form 
				onSubmit={(e)=>{e.preventDefault();checkAndLoginStaff()}}
				className="mt-1 px-2 flex flex-col pt-5 pb-3">
					<div className="w-full flex items-center flex-col gap-5">
	                    <div className="flex flex-col gap-3 w-full">
	                        <h1 className="text-lg text-gray-200 leading-none leading-none">Email</h1>
	                        <div className="bg-gray-800/70 rounded-lg border-[1px] p-2 
	                        hover:border-blue-400 hover:border-[1.1px] focus-within:border-blue-300 border-gray-300">
	                            <input type="text" placeholder="Enter email" value={email}
	                            onChange={(e)=>setEmail(e.target.value)}
	                            className="text-md font-normal text-gray-200 w-full 
	                            bg-transparent outline-none 
	                            placeholder:text-gray-300 "/>
	                        </div>
	                    </div>
	                    <div className="flex flex-col gap-3 w-full">
	                        <h1 className="text-lg leading-none text-gray-200">Password</h1>
	                        <div className="bg-gray-800/70 rounded-lg border-[1px] p-2 
	                        hover:border-blue-400 hover:border-[1.1px] focus-within:border-blue-300 border-gray-300">
	                            <input type="password" placeholder="Enter password" value={password}
	                            onChange={(e)=>setPassword(e.target.value)}
	                            className="text-md font-normal text-gray-200 w-full 
	                            bg-transparent outline-none 
	                            placeholder:text-gray-300 "/>
	                        </div>
	                    </div>
	                </div>
	                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 mt-4 
	                rounded-lg py-2">{loading ? <span className="loader1"/> : 'Login'}</button>
				</form>	
			</div>
		</main>

	)
}
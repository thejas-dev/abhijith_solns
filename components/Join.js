"use client"
import {useState,useEffect} from 'react';
import {createRegister} from '../utils/ApiRoutes';
import axios from 'axios';
import {motion} from 'framer-motion'

export default function Join(){
    const [schoolOrCollege,setSchoolOrCollege] = useState('School')
    const [trainingOrInternship,setTrainingOrInternship] = useState('Training')
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [instituteName,setInstituteName] = useState('');
    const [number,setNumber] = useState('');
    const [yearOfStudy,setYearOfStudy] = useState('');
    const [areaOfTraining,setAreaOfTraining] = useState('');
    const [singleOrGroup,setSingleOrGroup] = useState('');
    const [loading,setLoading] = useState(false);
    const [showFillTheDetailsAlert,setShowFillTheDetailsAlert] = useState(false);
    const [displayThankYou,setDisplayThankYou] = useState(false);

    const SubmitTheForm = async() => {
        setLoading(true)
        const {data} = await axios.post(createRegister,{
            email,
            name,
            number,
            trainingOrInternship,
            areaOfTraining,
            singleOrGroup,
            schoolOrCollege,
            yearOfStudy,
            instituteName
        }) 
        if(data.status){

            setEmail('');setNumber('');setName('');setTrainingOrInternship('Training');
            setAreaOfTraining('');setSingleOrGroup('Single student');setSchoolOrCollege('School');
            setInstituteName('');
            setDisplayThankYou(true)
            setLoading(false)
        }else{
            setLoading(false);
            alert("Something went wrong!")
        }
    }

    const checkAndSubmit = () => {
        if(name.length > 0 && email.length > 1 && number.length > 3 && areaOfTraining.length > 1 && instituteName.length > 1){
            SubmitTheForm()
        }else{
            setShowFillTheDetailsAlert(true)
            setTimeout(()=>{
                setShowFillTheDetailsAlert(false)
            },2000)
        }
    }

    useEffect(()=>{
        if(displayThankYou){
            document.getElementById('thank-you-msg').scrollIntoView({
                behavior:"smooth",
                block:"center"
            })
            setTimeout(()=>{
                setDisplayThankYou(false)
            },[10000])
        }
    },[displayThankYou])

    return (
        <main id="register" className="w-full min-h-screen px-7 py-5">
           {/*} <div className="w-full flex items-center justify-center h-full top-0 left-0 
            fixed bg-black/30 backdrop-blur-md">
                <div className="p-3 rounded-lg border-gray-300 border-[1px] bg-white z-50">
                </div>
            </div>*/}
            <div className={`fixed bottom-5 ${showFillTheDetailsAlert ? 'right-5' : '-right-[100%]'}
            bg-blue-600 transition-all duration-200 text-sm ease-in-out text-white px-3 py-2 rounded-lg border-[1px] border-gray-300`}>
                Please fill in all the required details.
            </div>
            <h1 className="text-3xl font-semibold text-black text-center leading-none">Enroll by here</h1>
            <p className="text-md text-gray-800 text-center">Internship and training. 15% Discount for group enrollment. 10% Discount for goverments school students.</p>
            <form 
            onSubmit={(e)=>{e.preventDefault();checkAndSubmit()}}
            className="mt-8 max-w-3xl md:px-4 mx-auto flex flex-col gap-3">
                <div className="w-full flex items-center md:flex-row flex-col gap-3">
                    <motion.div 
                    initial={{
                        opacity:0,
                        scale:0.3
                    }}
                    whileInView={{
                        opacity:1,
                        scale:1
                    }}
                    transition={{
                        duration:0.7
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1 w-full">
                        <h1 className="text-lg leading-none leading-none text-black">Name <span className="text-red-600">*</span></h1>
                        <div className="bg-gray-50 rounded-lg border-[1px] p-2 
                        hover:border-blue-600 hover:border-[1.1px] focus-within:border-blue-500 border-gray-300">
                            <input type="text" placeholder="Enter your name" value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className="text-md font-normal text-gray-800 w-full 
                            bg-transparent outline-none 
                            placeholder:text-gray-300 "/>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{
                        opacity:0,
                        scale:0.3
                    }}
                    whileInView={{
                        opacity:1,
                        scale:1
                    }}
                    transition={{
                        duration:0.7
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1 w-full">
                        <h1 className="text-lg leading-none text-black">Email <span className="text-red-600">*</span></h1>
                        <div className="bg-gray-50 rounded-lg border-[1px] p-2 
                        hover:border-blue-600 hover:border-[1.1px] focus-within:border-blue-500 border-gray-300">
                            <input type="email" placeholder="Enter your email" value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="text-md font-normal text-gray-800 w-full 
                            bg-transparent outline-none 
                            placeholder:text-gray-300 "/>
                        </div>
                    </motion.div>
                </div>
                <div className="w-full flex items-center md:flex-row flex-col gap-3">
                    <motion.div 
                    initial={{
                        opacity:0,
                        scale:0.3
                    }}
                    whileInView={{
                        opacity:1,
                        scale:1
                    }}
                    transition={{
                        duration:0.7
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1 w-full">
                        <h1 className="text-lg leading-none text-black">Contact number <span className="text-red-600">*</span></h1>
                        <div className="bg-gray-50 rounded-lg border-[1px] p-2 
                        hover:border-blue-600 hover:border-[1.1px] focus-within:border-blue-500 border-gray-300">
                            <input type="tele" max={10} min='2' placeholder="Enter your number" value={number}
                            onChange={(e)=>setNumber(e.target.value)}
                            className="text-md font-normal text-gray-800 w-full 
                            bg-transparent outline-none 
                            placeholder:text-gray-300 "/>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{
                        opacity:0,
                        scale:0.3
                    }}
                    whileInView={{
                        opacity:1,
                        scale:1
                    }}
                    transition={{
                        duration:0.7
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1 w-full">
                        <h1 className="text-lg leading-none text-black">Training or Internship <span className="text-red-600">*</span></h1>
                        <div className="w-full bg-gray-50 rounded-lg border-[1px] hover:border-blue-600 hover:border-[1.1px]
                        border-gray-300 px-3 py-2 cursor-pointer rounded-lg flex items-center gap-2">
                            <select id="" value={trainingOrInternship} onChange={(e)=>setTrainingOrInternship(e.target.value)}
                            className="text-md font-normal text-gray-800 w-full 
                            bg-transparent outline-none 
                            placeholder:text-gray-300 cursor-pointer">
                                <option value="Training">Training</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>
                    </motion.div>    
                </div>
                <div className="w-full flex items-center md:flex-row flex-col gap-3">
                    <motion.div 
                    initial={{
                        opacity:0,
                        scale:0.3
                    }}
                    whileInView={{
                        opacity:1,
                        scale:1
                    }}
                    transition={{
                        duration:0.7
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1 w-full">
                        <h1 className="text-lg leading-none text-black">Area of training required <span className="text-red-600">*</span></h1>
                        <div className="bg-gray-50 rounded-lg border-[1px] p-2 
                        hover:border-blue-600 hover:border-[1.1px] focus-within:border-blue-500 border-gray-300">
                            <input type="text" placeholder="Eg:- Arduino programming" value={areaOfTraining}
                            onChange={(e)=>setAreaOfTraining(e.target.value)}
                            className="text-md font-normal text-gray-800 w-full 
                            bg-transparent outline-none 
                            placeholder:text-gray-300 "/>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{
                        opacity:0,
                        scale:0.3
                    }}
                    whileInView={{
                        opacity:1,
                        scale:1
                    }}
                    transition={{
                        duration:0.7
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1 w-full">
                        <h1 className="text-lg leading-none text-black">Single or Group registration <span className="text-red-600">*</span></h1>
                        <div className="w-full bg-gray-50 rounded-lg border-[1px] hover:border-blue-600 hover:border-[1.1px]
                        border-gray-300 px-3 py-2 cursor-pointer rounded-lg flex items-center gap-2">
                            <select id="" value={singleOrGroup} onChange={(e)=>setSingleOrGroup(e.target.value)}
                            className="text-md font-normal text-gray-800 w-full 
                            bg-transparent outline-none 
                            placeholder:text-gray-300 cursor-pointer">
                                <option value="Single student">Single student</option>
                                <option value="Group of students">Group of students</option>
                            </select>
                        </div>
                    </motion.div>

                </div>


                <div className="w-full flex items-center md:flex-row flex-col gap-3">
                    <motion.div 
                    initial={{
                        opacity:0,
                        scale:0.3
                    }}
                    whileInView={{
                        opacity:1,
                        scale:1
                    }}
                    transition={{
                        duration:0.7
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1 w-full">
                        <h1 className="text-lg leading-none text-black">School or College <span className="text-red-600">*</span></h1>
                        <div className="w-full bg-gray-50 rounded-lg border-[1px] hover:border-blue-600 hover:border-[1.1px]
                        border-gray-300 px-3 py-2 cursor-pointer rounded-lg flex items-center gap-2">
                            <select id="" value={schoolOrCollege} onChange={(e)=>setSchoolOrCollege(e.target.value)}
                            className="text-md font-normal text-gray-800 w-full 
                            bg-transparent outline-none 
                            placeholder:text-gray-300 cursor-pointer">
                                <optgroup label="School">
                                    <option value="Government School">Government School</option>
                                    <option value="Private School">Private School</option>
                                    <option value="CBSE School">CBSE School</option>
                                </optgroup>
                                <optgroup label="College">
                                    <option value="College">College</option>
                                </optgroup>
                            </select>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                    initial={{
                        opacity:0,
                        scale:0.3
                    }}
                    whileInView={{
                        opacity:1,
                        scale:1
                    }}
                    transition={{
                        duration:0.7
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1 w-full">
                        <h1 className="text-lg leading-none text-black">Year of study/class <span className="text-red-600">*</span></h1>
                        <div className="w-full bg-gray-50 rounded-lg border-[1px] hover:border-blue-600 hover:border-[1.1px]
                        border-gray-300 px-3 py-2 cursor-pointer rounded-lg flex items-center gap-2">
                            <select id="" value={yearOfStudy} onChange={(e)=>setYearOfStudy(e.target.value)}
                            className="text-md font-normal text-gray-800 w-full 
                            bg-transparent outline-none 
                            placeholder:text-gray-300 cursor-pointer">
                                {
                                    schoolOrCollege === 'College'?
                                    <>
                                    <optgroup label="College">
                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                    </optgroup>
                                    </>
                                    :
                                    <>
                                    <optgroup label="School">
                                        <option value="6th">6th</option>
                                        <option value="7th" default>7th</option>
                                        <option value="8th">8th</option>
                                        <option value="9th">9th</option>
                                        <option value="10th">10th</option>
                                        <option value="11th">11th</option>
                                        <option value="12th">12th</option>
                                    </optgroup>
                                    </>
                                }
                                
                            </select>
                        </div>
                    </motion.div>
                </div>
                <div className="w-full flex items-center md:flex-row flex-col gap-3">
                    <motion.div 
                    initial={{
                        opacity:0,
                        scale:0.3
                    }}
                    whileInView={{
                        opacity:1,
                        scale:1
                    }}
                    transition={{
                        duration:0.7
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-1 w-full">
                        <h1 className="text-lg leading-none text-black">Name of school or college <span className="text-red-600">*</span></h1>
                        <div className="bg-gray-50 rounded-lg border-[1px] p-2 
                        hover:border-blue-600 hover:border-[1.1px] focus-within:border-blue-500 border-gray-300">
                            <input type="text" placeholder="Enter your school or college name" value={instituteName}
                            onChange={(e)=>setInstituteName(e.target.value)}
                            className="text-md font-normal text-gray-800 w-full 
                            bg-transparent outline-none 
                            placeholder:text-gray-300 "/>
                        </div>
                    </motion.div>
                </div>

                <button className="w-[80%] px-7 py-2 rounded-lg text-white font-semibold text-lg 
                mx-auto mt-3 border-gray-300 border-[1px] bg-blue-500 hover:bg-blue-600">
                    {
                        loading ? 
                        <span className="loader1"/>
                        :
                        'Submit'
                    }
                </button>
                {
                    displayThankYou &&
                    <h1 id="thank-you-msg" className="md:text-[15px] text-sm text-center font-semibold text-gray-700">Thank you for completing the registration form, our respective staff will contact you within <span className="text-blue-500">24 hours</span>.</h1>
                }
            </form>
            <div className="max-w-2xl mx-auto h-[1.2px] bg-gray-300 mt-6"/>
        </main>
    )
}
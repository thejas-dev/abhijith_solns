"use client"
import {motion} from 'framer-motion'

export default function ProvideSection(){

    return (
        <main className="w-full bg-center bg-[url('https://hdqwalls.com/download/raspberry-pi-logo-h0-1920x1080.jpg')]">
            <div className="w-full flex flex-col h-full bg-black/40 md:px-5 px-4 py-7">
                <h1 className="text-4xl mt-2 font-semibold text-white text-center">Our Approach</h1>
                <div className="w-full mt-3 flex md:flex-row flex-col md:gap-8">
                    <div className="md:w-[50%] w-full flex items-center gap-1 md:px-10">
                        <motion.div 
                        className="flex flex-col gap-7 md:px-7 py-3">
                            <motion.div 
                            initial={{
                                opacity:0
                            }}
                            whileInView={{
                                opacity:1,
                            }}
                            transition={{
                                duration:0.5
                            }}                            
                            className="md:px-4 px-3 flex flex-col py-3 hover:bg-black/50 transition-all 
                            duration-200 ease-in-out cursor-pointer bg-black/40 border-[1px] 
                            border-gray-400 rounded-lg pt-4">
                                <h1 className="text-lg p-0 leading-none font-semibold text-white">Individual Development</h1>
                                <div className="w-[120px] bg-blue-500 h-[2px]"/>
                                <p className="mt-3 text-md text-gray-200">
                                Embark on a transformative journey as we guide you to Ignite Your Potential 
                                Through Personalized Growth. Our courses are crafted to cater to your unique
                                strengths, fostering not just knowledge but also personal and professional 
                                development.
                                </p>
                            </motion.div>
                            <motion.div 
                            initial={{
                                opacity:0
                            }}
                            whileInView={{
                                opacity:1,
                            }}
                            transition={{
                                duration:0.5
                            }}                            
                            className="md:px-4 px-3 flex flex-col py-3 hover:bg-black/50 transition-all 
                            duration-200 ease-in-out cursor-pointer bg-black/40 border-[1px] 
                            border-gray-400 rounded-lg pt-4">
                                <h1 className="text-lg p-0 leading-none font-semibold text-white">Interactive Learning</h1>
                                <div className="w-[120px] bg-blue-500 h-[2px]"/>
                                <p className="mt-3 text-md text-gray-200">
                                Immerse yourself in an educational experience that goes beyond the ordinary 
                                with Immersive Education and Hands-On Learning. Our courses are designed to 
                                actively involve you in the learning process, ensuring a deeper understanding 
                                of embedded systems.
                                
                                </p>
                            </motion.div>
                            
                        </motion.div>
                    </div>
                    <div className="md:w-[50%] w-full flex items-center gap-1 md:px-10">
                        <motion.div
                        
                        className="flex flex-col gap-7 md:px-7 py-3">
                            <motion.div 
                            initial={{
                                opacity:0
                            }}
                            whileInView={{
                                opacity:1,
                            }}
                            transition={{
                                duration:0.5
                            }}
                            className="md:px-4 px-3 flex flex-col py-3 hover:bg-black/50 transition-all 
                            duration-200 ease-in-out cursor-pointer bg-black/40 border-[1px] 
                            border-gray-400 rounded-lg pt-4">
                                <h1 className="text-lg p-0 leading-none font-semibold text-white">Group Activities</h1>
                                <div className="w-[120px] bg-blue-500 h-[2px]"/>
                                <p className="mt-3 text-md text-gray-200">
                                Engage in a dynamic learning community where you Collaborate, 
                                Innovate, and Thrive Together. Through group activities and 
                                collaborative projects, discover the power of shared ideas and 
                                diverse perspectives and express your creativity by group activities.
                                </p>
                            </motion.div>
                            <motion.div 
                            initial={{
                                opacity:0
                            }}
                            whileInView={{
                                opacity:1,
                            }}
                            transition={{
                                duration:0.5
                            }}
                            className="md:px-4 px-3 flex flex-col py-3 hover:bg-black/50 transition-all 
                            duration-200 ease-in-out cursor-pointer bg-black/40 border-[1px] 
                            border-gray-400 rounded-lg pt-4">
                                <h1 className="text-lg p-0 leading-none font-semibold text-white">Individual Attention</h1>
                                <div className="w-[120px] bg-blue-500 h-[2px]"/>
                                <p className="mt-3 text-md text-gray-200">
                                At ABHIJITH Electronic Solution, Your Success is Our Primary Focus. 
                                Benefit from a learning environment where individual attention is not 
                                just a promise but a commitment. Our expert instructors are dedicated 
                                to guiding you through every step.
                                </p>
                            </motion.div>
                            
                        </motion.div>
                    </div>
                    
                    
                </div>
            
            </div>
            
        </main>

    )
}
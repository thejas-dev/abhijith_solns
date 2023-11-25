
export default function Queries(){


    return (
        <main className="w-full h-screen px-7 py-5">
            <h1 className="text-3xl font-semibold text-black text-center leading-none">Having any queries?</h1>
            <p className="text-md text-gray-800 text-center">Post your queries here, we will reply within 24 hours.</p>
            <form class="w-full max-w-xl mx-auto flex flex-col mt-2">
                <div className="w-full grid grid-cols-2 gap-3 px-3">
                    <div className="w-full group overflow-hidden rounded-lg flex flex-col border-[1px] border-gray-300">
                        <div className="p-2 peer">
                            <input type="text" className="bg-transparent outline-none w-full text-md text-gray-800"
                            placeholder="Enter your name"
                            /> 
                        </div>
                        <div className="w-full bg-gray-300 peer-focus-within:bg-blue-600 transition-all duration-200 ease-in-out group-hover:bg-blue-600 h-[2px]"/>
                    </div>
                    <div className="w-full group overflow-hidden rounded-lg flex flex-col border-[1px] border-gray-300">
                        <div className="p-2 peer">
                            <input type="email" className="bg-transparent outline-none w-full text-md text-gray-800"
                            placeholder="Enter your mail ID"
                            /> 
                        </div>
                        <div className="w-full bg-gray-300 peer-focus-within:bg-blue-600 transition-all duration-200 ease-in-out group-hover:bg-blue-600 h-[2px]"/>
                    </div>
                </div>
                <div className="mt-2 w-full px-3">
                    <div className="w-full group overflow-hidden rounded-lg flex flex-col border-[1px] border-gray-300">
                        <div className="p-2 peer">
                            <textarea className="resize-none h-[120px] bg-transparent outline-none w-full text-md text-gray-800"
                            placeholder="Enter your queries here"
                            /> 
                        </div>
                        <div className="w-full bg-gray-300 peer-focus-within:bg-blue-600 transition-all duration-200 ease-in-out group-hover:bg-blue-600 h-[2px]"/>
                    </div>
                </div>
                <button className="text-white rounded-lg px-7 py-2 mt-2 mx-3 bg-blue-600 text-lg">Submit</button>
            </form>

            <div className="flex flex-col max-w-2xl mt-4 mx-auto">
                <h1 className='text-xl font-semibold text-gray-800 text-center'>Student's queries</h1>
                
            </div>

        </main>
    )
}
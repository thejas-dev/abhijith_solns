import {FaLinkedin} from 'react-icons/fa';
import {BiLogoGmail} from 'react-icons/bi';
import {IoMdCall} from 'react-icons/io';

export default function Footer() {
	// body...

	return (
		<footer id="contact" class="relative bg-gray-200/70 pt-8 pb-6">
		  <div class="container mx-auto px-4">
		    <div class="flex flex-wrap text-left lg:text-left">
		      <div class="w-full lg:w-6/12 px-4">
		        <h4 class="text-3xl fonat-semibold text-blueGray-700">Let&apos;s keep in touch!</h4>
		        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
		          Contact us on any of these platforms, we respond 1-2 business days.
		        </h5>
		        <div class="mt-6 lg:mb-0 mb-6">
		           	<a href="https://www.linkedin.com/in/indumathi-sivanandham-80b91b97/" target="_blank"><button class="bg-white text-blue-600 shadow-lg p-2 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
		            <FaLinkedin className="h-full w-full"/></button></a>
		            <a href="mailto:indumathi@gmail.com" target="_blank"><button class="bg-white text-orange-400 shadow-lg p-2 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
		            <BiLogoGmail className="h-full w-full"/></button></a>
		            <button class="bg-white text-blue-800 shadow-lg p-2 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
		            <IoMdCall className="h-full w-full"/>
		          </button>
		        </div>
		      </div>
		      <div class="w-full lg:w-6/12 px-4">
		        <div class="flex flex-wrap items-top mb-6">
		          <div class="w-full lg:w-4/12 px-4 ml-auto">
		            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
		            <ul class="list-unstyled">
		              <li>
		                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#aboutus">About Us</a>
		              </li>
		              <li>
		                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#register">Internship</a>
		              </li>
		              <li>
		                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#queries">Queries</a>
		              </li>
		              <li>
		              </li>
		            </ul>
		          </div>
		          
		        </div>
		      </div>
		    </div>
		    <hr class="my-6 border-blueGray-300"/>
		    <div class="flex flex-wrap items-center md:justify-between justify-center">
		      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
		        <div class="text-sm text-blueGray-500 font-semibold py-1">
		          Copyright © <span id="get-current-year">2023</span><span href="" class="text-blue-500 hover:text-sky-600" target="_blank"> Abhijith
		          <span href="https://www.creative-tim.com?ref=njs-profile" class="text-blueGray-500 hover:text-blueGray-800"> Electronic</span>.</span>
		        </div>
		      </div>
		    </div>
		  </div>
		</footer>
	)
}
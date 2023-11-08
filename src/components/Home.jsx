 import React from 'react'
 import hi from '../images/hi.png';
 import {AiOutlineRight} from "react-icons/ai";
 import {Link} from 'react-scroll'
 export default function Home() {
   return (
     <div name="Home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">
        <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full px-4">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold">
                I'm an aspiring Full Stack Developer  
                </h2>
                <p className="py-4 text-gray-500 max-w-md">
                I'm proficient in Data Structures and Algorithms. I'm exploring web technologies like HTML, CSS, JavaScript, React, and Tailwind, with an aspiration to become a Full Stack Developer. Check out my projects and skills in this portfolio!
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-500 to-yellow-400">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        <AiOutlineRight size={17} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={hi} className="rounded-2xl mx-auto w-2/3 md:w-full" alt=""/>
            </div>
        </div>
     </div>
   )
 }
 
import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import {Link} from 'react-scroll';
import My_Resume from "../images/My_resume.pdf"
export default function Navbar() {
    const [nav , setNav] = useState(false);
    const links=[
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        }
    ];
  return (
    <div className="flex justify-between items-centre w-full h-20 px-4 py-6 text-white bg-black fixed">
        <div>
            <h1 className="text-5xl capitalize font-signature ml-2">Tirtha</h1>
        </div>
        <ul className="hidden md:flex">
             {links.map(({id,link}) =>(
                <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
             ))}
             <a href={My_Resume} target="_blabk">
             <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                resume
             </li>
             </a>
             <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
             <Link to='contact' smooth duration={500}>contact</Link>
             </li>
        </ul>
        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {!nav ? <FaBars size={30}/> : <FaTimes size={30}/>}
        </div>
        {nav && (
        <ul className="flex flex-col justify-centre items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-600">
                {links.map(({id , link}) => (<li key={id} className="px-4 cursor-pointer capitalize text-4xl py-6"><Link onClick={()=>setNav(!nav)}to={link} smooth duration={500}>{link}</Link></li>))}
                <a href="https://docs.google.com/document/d/1Q-WIcmT8qptMBJF4nEK-izARISEMLjwY8lL-Nx_gcao/edit">
                    <li className="px-4 cursor-pointer capitalize text-4xl py-6">
                        resume
                    </li>
                </a>
                <li className="px-4 cursor-pointer capitalize text-4xl py-6">
                    <Link onClick={()=>setNav(!nav)} to='contact' smooth duration={500}>contact</Link>
                </li>
        </ul>
        )}
    </div>
  );
};

 

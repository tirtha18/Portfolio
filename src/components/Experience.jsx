import React from 'react'
import html from "../images/html.png";
import css from '../images/css.png';
import react from '../images/react.png';
import gh from '../images/gh.png';
import tailwind from '../images/tailwind.png';
import js from '../images/js.png';

export default function Experience() {
    const experiences=[
        {
            id : 1,
            src : html,
            title : 'HTML',
            style : 'shadow-orange-500'
        },
        {
            id : 2,
            src : css,
            title : 'CSS',
            style : 'shadow-blue-500'
        },
        {
            id : 3,
            src : js,
            title : 'JavaScript',
            style : 'shadow-yellow-500'
        },
        {
            id : 1,
            src : react,
            title : 'REACT',
            style : 'shadow-blue-500'
        },
        {
            id : 1,
            src : tailwind,
            title : 'Tailwind',
            style : 'shadow-cyan-500'
        },
        {
            id : 1,
            src : gh,
            title : 'GitHub',
            style : 'shadow-gray-500'
        }

    ]
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to to-black justify-center w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-ful text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">There are the technologies which i have worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {
                    experiences.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                          <img src={src} alt="html" className="w-20 mx-auto" />
                          <p className="mt-4">{title}</p>
                        </div>
                      ))
                }
            </div>
        </div>
    </div>
  )
}

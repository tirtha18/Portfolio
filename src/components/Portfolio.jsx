import React from 'react'
import reactParallax from "../images/reactParrallax.png";
import reactSmooth from "../images/reactSmooth.png";
import resNav from "../images/resNav.png";
import resSide from "../images/resSide.png";
import sortingV from "../images/sortingV.png";
import weatherApp from "../images/weatherApp.png";
export default function Portfolio() {
  const portfolios =[
    {
      id: 1,
      src: weatherApp,
      rep: "https://github.com/tirtha18/Sorting-Visualizer.git"

    },
    {
      id: 2,
      src: reactSmooth,
      rep: "https://github.com/tirtha18/Sorting-Visualizer.git"
    },
    {
      id: 3,
      src: reactParallax,
      rep: "https://github.com/tirtha18/Sorting-Visualizer.git"
    },
    {
      id: 4,
      src: resNav,
      rep: "https://github.com/tirtha18/Sorting-Visualizer.git"
    },
    {
      id: 5,
      src: sortingV,
      rep: "https://github.com/tirtha18/Sorting-Visualizer.git"
    },
    {
      id: 6,
      src: resSide,
      rep: "https://github.com/tirtha18/Sorting-Visualizer.git"
    }
  ]
  return (
    <div  name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out my work right here!</p>
        </div>

        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {
            portfolios.map(({id,src,rep}) => (<div key={id} className="shadow-md shadow-gray-500">
            <a href={rep} target="_blank" rel="noopener noreferrer">
              <img className="hover:scale-110 duration-300 rounded-md cursor-pointer" src={src} alt="portfoliopic" />
            </a>
          </div>))
          }
          
        </div>
                                                                                                                                                                 
      </div>
    </div>
  )
}

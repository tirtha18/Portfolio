import React from 'react'
import weatherApp from "../images/weatherApp.png";
import CodeXl from "../images/CodeXL.png";
import Tictactoe from "../images/Tictactoe.png";
import Betterme from "../images/betterme.png";
import Powerapp from "../images/powerapp.png";
export default function Portfolio() {
  const portfolios =[
    {
      id: 1,
      src: CodeXl,
      rep: "https://github.com/tirtha18/Code.-XL"

    },
    {
      id: 2,
      src: Betterme,
      rep: "https://github.com/tirtha18/BetterMe"
    },
    {
      id: 3,
      src: Tictactoe,
      rep: "https://github.com/tirtha18/tictactoe"
    },
    {
      id: 4,
      src: weatherApp,
      rep: "https://github.com/tirtha18/weather_tracker"
    },
    {
      id: 5,
      src: Powerapp,
      rep: "https://github.com/tirtha18/powerapp"
    },
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

import React from "react";
import hi from "../images/hi.png";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-scroll";
export default function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            I'm an aspiring Full Stack Developer
          </h2>
          <p className="py-4 text-gray-500 max-w-md">
            I am an aspiring software developer skilled in{" "}
            <span className="font-bold text-gray-400">C++</span>,{" "}
            <span className="font-bold text-gray-400">Java</span>,{" "}
            <span className="font-bold text-gray-400">Python</span>, and{" "}
            <span className="font-bold  text-gray-400">JavaScript</span>. I have experience
            with <span className="font-bold  text-gray-400">React.js</span>,{" "}
            <span className="font-bold text-gray-400">Tailwind CSS</span>,
            <span className="font-bold text-gray-400">Bootstrap</span>,{" "}
            <span className="font-bold text-gray-400">Express.js</span>,{" "}
            <span className="font-bold text-gray-400">Node.js</span>, and{" "}
            <span className="font-bold text-gray-400">Flask</span>, and I'm proficient in
            <span className="font-bold text-gray-400">MySQL</span> and{" "}
            <span className="font-bold text-gray-400">MongoDB</span>. My projects include a
            placement preparation app, a healthcare app, a weather tracking
            website, and an interactive game. Check out my projects and skills
            in this portfolio!
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-500 to-yellow-400"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <AiOutlineRight size={17} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={hi}
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

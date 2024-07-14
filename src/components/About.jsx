import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About
          </p>
        </div>
        <p className="text-white mt-20">
          Hello! I'm Tirtha Biswas from Kolkata, West Bengal, currently pursuing
          a degree in Electrical (Power) Engineering at Jadavpur University.
          With a passion for software development, I have honed my skills in
          various programming languages such as C++, Java, Python, and
          JavaScript. I am well-versed in front-end and back-end frameworks
          including React.js, Tailwind CSS, Bootstrap, Express.js, Node.js, and
          Flask. My education at Jadavpur University has equipped me with a
          solid foundation in engineering principles and computer science,
          allowing me to grasp complex concepts and apply them effectively in
          practical scenarios. Additionally, I actively engage in competitive
          programming, showcasing my problem-solving abilities on platforms like
          CodeChef and LeetCode, which has further sharpened my coding skills
          and logical thinking.
        </p>
        <br />
        <p className="text-white">
          Throughout my academic journey, I have undertaken several projects
          that highlight my technical expertise and creativity. Notably, I
          developed Code XL, a MERN application designed to assist students in
          placement preparation by allowing users to upload and track SDE/DSA
          practice sheets, create customized mock tests, and engage in community
          discussions. Another significant project is the BetterMe Healthcare
          App, an AI-powered application providing personalized healthcare
          solutions, including disease prediction, diet/workout plans,
          appointment booking, and more. Additionally, I created a Weather
          Tracking Website using React.js and the OpenWeather API to provide
          real-time weather updates, and an interactive Tic Tac Toe Game that
          incorporates engaging animations. These projects reflect my commitment
          to leveraging technology to solve real-world problems and my eagerness
          to continuously learn and grow in the field.
        </p>
      </div>
    </div>
  );
}

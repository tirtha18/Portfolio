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
          Hello! I’m Tirtha Biswas from Kolkata, West Bengal, currently pursuing
          a degree in Electrical (Power) Engineering at Jadavpur University. I
          am a passionate full-stack developer with expertise in various
          programming languages, including C++, Java, Python, and JavaScript. I
          am proficient in front-end and back-end frameworks such as React.js,
          Tailwind CSS, Bootstrap, Express.js, Node.js, and Flask. My education
          at Jadavpur University has provided me with a strong foundation in
          engineering principles and computer science, enabling me to understand
          and apply complex concepts effectively in practical scenarios. I am
          also an active participant in competitive programming on platforms
          like CodeChef and LeetCode, where I showcase my problem-solving skills
          and logical thinking. Does this capture everything you wanted to
          convey? Feel free to let me know if you’d like any adjustments!
        </p>
        <br />
        <p className="text-white">
          Throughout my academic journey, I have undertaken several projects
          that showcase my technical expertise and creativity. One of my notable
          projects is Code XL, a MERN application designed to assist students in
          placement preparation. This platform allows users to upload and track
          SDE/DSA practice sheets, create customized mock tests, and engage in
          community discussions. Another significant project is the BetterMe
          Healthcare App, an AI-powered application that provides personalized
          healthcare solutions. It includes features such as disease prediction,
          diet and workout plans, appointment booking, and more. Additionally, I
          developed a Weather Tracking Website using React.js and the
          OpenWeather API to provide real-time weather updates. I also created
          an interactive Tic Tac Toe Game that incorporates engaging animations.
          These projects reflect my commitment to leveraging technology to solve
          real-world problems and my eagerness to continuously learn and grow in
          the field. Does this version work for you? Let me know if there’s
          anything else you’d like to add or modify!
        </p>
      </div>
    </div>
  );
}

import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/a305886b-e31c-4f88-a3fa-79972b308ae6"
            className="flex flex-col w-full md:w-1/2"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none my-4"
            ></input>
            <textarea
              placeholder="Enter your message!"
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-r  from-yellow-500 to-yellow-400 mx-auto flex items-center rounded-md hover:scale-110 duration-300 px-6 py-3 my-6">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

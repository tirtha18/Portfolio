// SocialLinksSlider.js
import React from 'react';
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import resume from "../images/resume.png"
const SocialLinksSlider = () => {
  const socialLinks = [
    { id: 1, name: 'Twitter', url: 'https://www.linkedin.com/in/tirtha-biswas-594581230/',src: linkedin},
    { id: 2, name: 'Instagram', url: 'https://www.instagram.com/_tirtha_18/',src: instagram},
    { id: 3, name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100079907761236',src: facebook},
    { id: 4, name: 'Twitter', url: 'https://twitter.com/TirthaBiswas18',src: twitter},
    { id: 5, name: 'Resume', url: 'https://drive.google.com/drive/folders/1OyYI5Ppvf-topt82CluP5Ycl-Mx5Km_Z?usp=sharing',src: resume}
  ];

  return (
    <div className="flex overflow-x-auto space-x-4 p-4 justify-center items-center bg-gray-800">
      {socialLinks.map(({id, name, url, src}) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center hover:scale-125 duration-300"
        >
          <span className="sr-only text-white">{name}</span>
          <img src={src} alt= "nopic"/>
        </a>
      ))}
    </div>
  );
};

export default SocialLinksSlider;

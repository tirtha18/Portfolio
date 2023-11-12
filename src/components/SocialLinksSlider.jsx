
import React from 'react';
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import github from "../images/github.png"
const SocialLinksSlider = () => {
  const socialLinks = [
    { id: 1, url: 'https://www.linkedin.com/in/tirtha-biswas-594581230/',src: linkedin},
    { id: 2, url: 'https://www.instagram.com/_tirtha_18/',src: instagram},
    { id: 3, url: 'https://www.facebook.com/profile.php?id=100079907761236',src: facebook},
    { id: 4, url: 'https://twitter.com/TirthaBiswas18',src: twitter},
    { id: 5, url: 'https://github.com/tirtha18',src: github}
  ];

  return (
    <div className="flex overflow-x-auto space-x-4 p-4 justify-center items-center bg-gray-800">
      {socialLinks.map(({id, url, src}) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className= "flex-shrink-0 w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center hover:scale-125 duration-300 "
        >
          <img src={src} alt= "nopic"/>
        </a>
      ))}
    </div>
  );
};

export default SocialLinksSlider;

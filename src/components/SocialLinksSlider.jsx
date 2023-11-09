// SocialLinksSlider.js
import React from 'react';
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import resume from "../images/resume.png"
const SocialLinksSlider = () => {
  const socialLinks = [
    { id: 1, url: 'https://www.linkedin.com/in/tirtha-biswas-594581230/',src: linkedin},
    { id: 2, url: 'https://www.instagram.com/_tirtha_18/',src: instagram},
    { id: 3, url: 'https://www.facebook.com/profile.php?id=100079907761236',src: facebook},
    { id: 4, url: 'https://twitter.com/TirthaBiswas18',src: twitter},
    { id: 5, url: 'https://documentcloud.adobe.com/gsuiteintegration/index.html?state=%7B%22ids%22%3A%5B%2214Mlsk00lmHhJZ0aX8CB7SMbynEAQC_76%22%5D%2C%22action%22%3A%22open%22%2C%22userId%22%3A%22104446117698915010531%22%2C%22resourceKeys%22%3A%7B%7D%7D',src: resume}
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

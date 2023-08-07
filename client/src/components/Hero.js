import React,{useState} from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {images } from '../assets/hero-images/HeroImages'

const Hero = () => {

    let len = images.length;
  
    const [defaultImage, setDefaultImage] = useState(images[0]) 
  // let randomNo = Math.floor(Math.random() * (len + 1)); 
  const [randomNo, setRandomNo] = useState( Math.floor(Math.random() * (len + 1)))
    
      const handleLeftArrow = () => {
        if (randomNo === 0) {
          setRandomNo(len - 1);
         
        } else {
          setRandomNo(randomNo - 1);
        }
         setDefaultImage(images[randomNo]); 
      };
  const handleRightArrow = () => {
    if (randomNo === len - 1) {
      setRandomNo(0);
    } else {
      setRandomNo(randomNo + 1);
    }
     setDefaultImage(images[randomNo]); 
  };
 

  // let currentImage = images[randomNo] 
  // console.log(currentImage.img);  

  return (
    <div className="hero-section">
      <img className="hero-img" src={defaultImage.img} alt="" /> 
      <FaAngleLeft onClick={handleLeftArrow} className="angle-icon-left" />
      <FaAngleRight onClick={handleRightArrow} className="angle-icon-right" />
    </div>
  );
}

export default Hero
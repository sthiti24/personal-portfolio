import React from 'react'
import {Parallax,ParallaxProvider} from "react-scroll-parallax"
import reactLogo from '../images/atom.png'
import cssLogo from "../images/css-3.png"
import jsLogo from "../images/js.png"
import htmlLogo from "../images/html-5.png"
import meImage from "../images/meImage.jpg"
import './about.css'

export default function About(){


    return(
        <div className="about">
    
            <ParallaxProvider>
            <Parallax
          translateX={['0px', '0px']}
          scale={[1.2, 0.8]}
          rotate={[0, 0]}
          easing="easeInQuad"
          className='about-title'
           >
            About
          </Parallax>
          <Parallax  translateZ={['0px', '0px']}
          scale={[1.2, 0.8]}
          rotate={[0, 0]}
          easing="easeInQuad" 
          className="about-content">

          <div className="about-image">
            <img src={meImage} alt=" " 
            style={{position:"relative",maxWidth:"100%",maxHeight:"100%",zIndex:"-1",borderRadius:"50%"}}/>
           </div>

          <div className='about-text' >I am thrilled to showcase my journey as a passionate and dedicated student pursuing a B.Tech degree in  Information Technology at IIIT Bhubaneswar. From the moment I embarked on my academic
           journey, I realized that web development was my true calling. I have always been captivated by the creative possibilities and the ability to bring ideas to life through the power of code.
           Through my coursework and personal projects, I have gained a strong foundation in frontend technologies and have honed my skills to create immersive and user-friendly web experiences.
           In my quest for knowledge and growth, I have delved into various programming languages, frameworks, and tools relevant to frontend development. Proficient in HTML, CSS, and JavaScript,
            I have also familiarized myself with popular libraries and frameworks like React. 
           By combining these skills, I have been able to design and develop responsive websites that not only look visually appealing but also provide seamless navigation and engaging interactions.
           </div>
          
          </Parallax>
          <Parallax
          translateX={['0px', '0px']}
          scale={[1, 0.5]}
          rotate={[0, 0]}
          easing="easeInQuad"
           style={{fontSize:"50px",width:"100%"}}>
          <div className="about-skills">
            
            <h3>My Skillsets</h3>
            
           <div className="about-skillsLogo" >
               <img src={htmlLogo} alt="" />
               <img src={cssLogo} alt=""   />
               <img src={jsLogo} alt=""    />
               <img src={reactLogo} alt="" />
           </div>
          </div> 
          </Parallax>
           
            </ParallaxProvider>

        </div>
    )
}
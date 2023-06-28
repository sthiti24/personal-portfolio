import React from 'react'
import {Parallax,ParallaxProvider} from "react-scroll-parallax"
import {Avatar} from "@mui/material"
export default function About(){


    return(
        <div style={{backgroundColor:"#031838",height:"auto",overflowX:"0",color:"white",
                    display:"flex",alignItems:"center", flexDirection:"column"}}
        >
            <ParallaxProvider>
            <Parallax
          translateX={['0px', '0px']}
          scale={[1, 0.5]}
          rotate={[0, 0]}
          easing="easeInQuad"
           style={{fontSize:"50px"}}>
            About me.
          </Parallax>
          <Parallax  translateZ={['0px', '0px']}
          scale={[1, 0.3]}
          rotate={[0, 0]}
          easing="easeInQuad" style={{fontSize:"20px"}}>
          I am thrilled to showcase my journey as a passionate and dedicated student pursuing a B.Tech degree in Information Technology at IIIT Bhubaneswar. 
          From the moment I embarked on my academic journey, I realized that web development was my true calling. I have always been captivated by the creative possibilities and the ability to bring ideas to life through the power of code.
           Through my coursework and personal projects, I have gained a strong foundation in frontend technologies and have honed my skills to create immersive and user-friendly web experiences.
           In my quest for knowledge and growth, I have delved into various programming languages, frameworks, and tools relevant to frontend development. Proficient in HTML, CSS, and JavaScript, I have also familiarized myself with popular libraries and frameworks like React. 
           By combining these skills, I have been able to design and develop responsive websites that not only look visually appealing but also provide seamless navigation and engaging interactions.
          </Parallax>
          <Parallax
          translateX={['0px', '0px']}
          scale={[1, 0.5]}
          rotate={[0, 0]}
          easing="easeInQuad"
           style={{fontSize:"50px"}}>
            <div style={{display:"flex",alignItems:"center",
            justifyContent:"center",flexDirection:"row"}}>
            <Avatar
              sx={{ bgcolor: "orange" }}
              alt="Remy Sharp"
              src="/broken-image.jpg">React</Avatar>
            <Avatar
               sx={{ bgcolor: "pink"}}
               alt="Remy Sharp"
               src="/broken-image.jpg"/>
         </div>
          </Parallax>
           
            </ParallaxProvider>

        </div>
    )
}
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import reactLogo from "../images/atom.png";
import cssLogo from "../images/css-3.png";
import jsLogo from "../images/js.png";
import htmlLogo from "../images/html-5.png";
import meImage from "../images/meImage.jpg";
import typescript from "../images/typescript-icon.png";
import express from "../images/icons8-express-js-160.png";
import firebase from "../images/firebase-icon.png";
import mongodb from "../images/mongodb-icon.png";
import nodejs from "../images/node-js-icon.png";
import java from "../images/java-icon.jpg";
import postman from "../images/postman-icon.png";
import sql from "../images/sql-icon.png";
import python from "../images/python-icon.jpg";
import prisma from "../images/prisma-icon.png";
import cpp from "../images/cpp-icon.png";
import c from "../images/c-icon.png";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <ParallaxProvider>
        <Parallax
          translateX={["0px", "0px"]}
          scale={[1.2, 0.8]}
          rotate={[0, 0]}
          easing="easeInQuad"
          className="about-title"
        >
          About
        </Parallax>
        <Parallax
          translateZ={["0px", "0px"]}
          scale={[1.2, 0.8]}
          rotate={[0, 0]}
          easing="easeInQuad"
          className="about-content"
        >
          <div className="about-image">
            <img
              src={meImage}
              alt=" "
              style={{
                position: "relative",
                maxWidth: "100%",
                maxHeight: "100%",
                zIndex: "-1",
                borderRadius: "50%",
              }}
            />
          </div>

          <div className="about-text">
            I am thrilled to showcase my journey as a passionate and dedicated
            student pursuing a B.Tech degree in Information Technology at IIIT
            Bhubaneswar. From the moment I embarked on my academic journey, I
            realized that web development was my true calling. I have always
            been captivated by the creative possibilities and the ability to
            bring ideas to life through the power of code. Through my coursework
            and personal projects, I have gained a strong foundation in frontend
            technologies and have honed my skills to create immersive and
            user-friendly web experiences. In my quest for knowledge and growth,
            I have delved into various programming languages, frameworks, and
            tools relevant to frontend development. Proficient in HTML, CSS, and
            JavaScript, I have also familiarized myself with popular libraries
            and frameworks like React. By combining these skills, I have been
            able to design and develop responsive websites that not only look
            visually appealing but also provide seamless navigation and engaging
            interactions.
          </div>
        </Parallax>
        <Parallax
          translateX={["0px", "0px"]}
          scale={[1, 0.5]}
          rotate={[0, 0]}
          easing="easeInQuad"
          style={{ fontSize: "50px", width: "100%" }}
        >
          <div className="about-skills">
            <h3>My Skillsets</h3>

            <div className="about-skillsLogo">
              <div>
                <img src={htmlLogo} alt="" />
                <img src={cssLogo} alt="" />
                <img src={jsLogo} alt="" />
                <img src={reactLogo} alt="" />
              </div>
              <br></br>
              <div>
                <img src={typescript} alt="" />
                <img src={express} alt="" />
                <img src={mongodb} alt="" />
                <img src={firebase} alt="" />
              </div>
              <br></br>
              <div>
                <img src={nodejs} alt="" />
                <img src={java} alt="" />
                <img src={cpp} alt="" />
                <img src={c} alt="" />
              </div>
              <br></br>
              <div>
                <img src={prisma} alt="" />
                <img src={postman} alt="" style={{ width: "180px" }} />
                <img src={python} alt="" />
                <img src={sql} alt="" />
              </div>
            </div>
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

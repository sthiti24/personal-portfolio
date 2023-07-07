import React from "react";
import './home.css'
import 'animate.css';
import homePage1 from '../images/1874.jpg'
import {ParallaxBanner,ParallaxProvider,ParallaxBannerLayer} from 'react-scroll-parallax'
import {Typography,Button} from "@mui/material"
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import cv from './sthitiCVfinal.pdf'
import { saveAs } from "file-saver";

export default function Home(){
    
    const [text] = useTypewriter({
        words: [' Web Devloper',' Tech Enthusiast',' Nature Lover'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80
    })

    function saveFile(){
        saveAs(cv,"sthiti pragyan cv")
    }
      
    return(
< div style={{}}>
          
      <ParallaxProvider>
          <ParallaxBanner className="parallax-banner">
              <ParallaxBannerLayer image={homePage1} speed={-30} />
              <ParallaxBannerLayer style={{display:"flex",justifyContent:"center",
              alignItems:"center",flexDirection:"column",color:"white"}}>
                <Typography variant="h5">HI THERE. I'M</Typography>
                <h1 className="typo">sthiti.</h1>
                <Typography variant="h3"><span>{text}</span><span><Cursor /></span></Typography>
                <Button variant="contained" style={{marginTop:"20px"}} onClick={saveFile}>Download Resume</Button>
              </ParallaxBannerLayer>
              </ParallaxBanner>
          </ParallaxProvider>
          
        </div>
    )
}
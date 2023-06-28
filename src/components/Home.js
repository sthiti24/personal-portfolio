import React from "react";
import './home.css'
import 'animate.css';
import homePage1 from '../images/homePage1.jpg'
import {ParallaxBanner,ParallaxProvider,ParallaxBannerLayer} from 'react-scroll-parallax'
import {Typography,Button} from "@mui/material"

export default function Home(){
    
      
    return(
< div style={{}}>
          
      <ParallaxProvider>
          <ParallaxBanner className="parallax-banner">
              <ParallaxBannerLayer image={homePage1} speed={-30} />
              <ParallaxBannerLayer style={{display:"flex",justifyContent:"center",
              alignItems:"center",flexDirection:"column",color:"white"}}>
                <Typography variant="h5">HI THERE. I'M</Typography>
                <h1 className="typo">sthiti.</h1>
                <Typography variant="h5">Creative Front-End Web Devloper</Typography>
                <Button variant="contained" style={{marginTop:"20px"}}>Download Resume</Button>
              </ParallaxBannerLayer>
              </ParallaxBanner>
          </ParallaxProvider>
        </div>
    )
}
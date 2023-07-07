import React from 'react'
import {RiArrowUpSLine} from "react-icons/ri"
const ScrollToTop = () => {

  function toTop(){
    window.scrollTo({top:0,left:0,behavior:'smooth'})
  }
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
     <div style={{fontSize:"2.4rem",width:"3.5rem",height:"3.5rem",
      backgroundColor:"blue",boxShadow:"2px 5px 10px black",borderRadius:"50%",
      position:"fixed",bottom:"3rem",right:"4rem",zIndex:"999",display:"flex",
      justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
        <button onClick={toTop} style={{backgroundColor:"transparent",
        border:"none",color:"white",fontSize:"40px",width:"100%"}}
        ><RiArrowUpSLine /></button>
     </div>
    </div> 
  )
}


export default ScrollToTop;
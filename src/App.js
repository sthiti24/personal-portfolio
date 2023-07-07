import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import './App.css';
import {Link} from "react-scroll"
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Blob from './components/Blob';
import {GiRocketThruster} from "react-icons/gi"
import {FaBars, FaTimes} from "react-icons/fa"
import {TbLetterS,TbLetterP} from 'react-icons/tb'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';


export default function App(){

  const [click, setClick] = useState(false)

  function closeMobileMenu(){
      setClick(false)
  }

  function handleClick(){
      setClick((prevClick) => (!prevClick))
  }

  


  return(
      <div className='App'>
        <Blob />
         <nav className='navbar'>
          <Blob />
                <div className='navbar-container container' >
                    <div className='navbar-logo' >
                    <TbLetterS className='navbar-icon1'
                          onClick={closeMobileMenu}
                           /><TbLetterP className='navbar-icon2'
                           onClick={closeMobileMenu}
                            />
                         <span style={{ fontFamily: "'Manrope', sans-serif",
                         wordSpacing: "10px", letterSpacing: "-1px"}}>sthiti.</span>
                    </div>

                    <div className='menu-icon'
                    onClick={handleClick}
                    >
                      {click? <FaTimes style={{color:"white"}}/>: <FaBars style={{color:"white"}}/>}  
                    </div> 

                    <ul className={click?"nav-menu active":"nav-menu"}>
                         <li >
                            <Link to='home' smooth={true} onFocus={-100}
                            duration={500} className={({isActive})=>
                            "nav-links"+(isActive?" activated" : "")}
                            onClick={closeMobileMenu} >
                                Home
                             </Link>
                        </li>
                        <li >
                            <Link  to='about' smooth={true} onFocus={-100}
                            duration={700} className={({isActive})=>
                            "nav-links"+(isActive?" activated" : "")}
                            onClick={closeMobileMenu}>
                                About
                             </Link>
                        </li>
                        <li >
                            <Link to='project' activeClass='activated'
                            smooth={true} onFocus={-100}
                            duration={900} className={({isActive})=>
                            "nav-links"+(isActive?" activated" : "")}
                            onClick={closeMobileMenu}>
                                Project
                             </Link>
                        </li>
                        <li >
                            <Link to='contact' smooth={true} onFocus={-100}
                            duration={1100} className={({isActive})=>
                            "nav-links"+(isActive?" activated" : "")}
                            onClick={closeMobileMenu}>
                                Contact
                             </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <main>
              <ScrollToTop />
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="project"><Project /></div>
              <div id="contact"><Contact /></div>
            </main>
            <footer>
                <Footer />
            </footer>
      </div>

  )
}




import React from 'react';
import './NavComponent.css'
import { Link, NavLink } from 'react-router-dom';
import {GiRocketThruster} from "react-icons/gi"
import {FaBars, FaTimes} from "react-icons/fa"
// import {IconContext} from "react-icons/lib"

export default function NavComponent(){

    const [click, setClick] = React.useState(false)

    function closeMobileMenu(){
        setClick(false)
    }

    function handleClick(){
        setClick((prevClick) => (!prevClick))
    }
    return(
        <div>
            <nav className='navbar'>
                <div className='navbar-container container'>
                    <Link to = '/' className='navbar-logo'>
                        <GiRocketThruster className='navbar-icon'
                          onClick={closeMobileMenu}
                           />
                          STHITZ
                    </Link>

                    <div className='menu-icon'
                    onClick={handleClick}
                    >
                      {click? <FaTimes style={{color:"white"}}/>: <FaBars style={{color:"white"}}/>}  
                    </div>
                    <ul className={click?"nav-menu active":"nav-menu"}>
                        <li>
                            <NavLink to='/' className={({isActive})=>
                             "nav-links"+(isActive?" activated" : "")}
                             onClick={closeMobileMenu}>
                                Home
                             </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/about" className={({isActive})=>
                             "nav-links"+(isActive?" activated" : "")}
                             onClick={closeMobileMenu}>
                                About
                             </NavLink>
                        </li>
                        <li>
                            <NavLink to='/project' className={({isActive})=>
                             "nav-links"+(isActive?" activated" : "")}
                             onClick={closeMobileMenu}>
                                Project
                             </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className={({isActive})=>
                             "nav-links"+(isActive?" activated" : "")} 
                              onClick={closeMobileMenu}>
                                Contact
                             </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}




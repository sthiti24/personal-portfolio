import React from 'react'
import NavComponent from './NavComponent'
import Blob  from './Blob';
import Home from './Home'
import About from './About'
import Project from './Project'
import Contact from './Contact'

const Layout = () => {
  return (
    <div>
      <NavComponent />
      <Blob />
      {/* <Scroll /> */}
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  )
}
export default Layout;

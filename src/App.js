import React, { Children } from 'react';
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider, Routes,Route,
Link, Outlet, BrowserRouter} from "react-router-dom";
import './App.css';
// import Pageloader from './components/Pageloader';
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Layout from './components/Layout';


export default function App(){
  return(
      <BrowserRouter >
     
      <Routes>
        <Route path= "/" element= {<Layout/>}></Route>
        <Route path= "/about" element= {<About/>}></Route>
        <Route path= "/project" element= {<Project />}></Route>
        <Route path= "/contact" element= {<Contact />}></Route>
      
      </Routes>
      
      </BrowserRouter>
  )
}




import React from "react";
import './nav.css'



function Navbar(){
    
    return(
        <div>
            <nav className="nav-bar" >    
            <ul>
            <li><a href="#intro">Intro</a></li>
            <li><a href="#features">Key features</a></li>
            <li><a href="#get">Getting started</a></li>
             <li><a href="#choose">Why choose ReactJS</a></li>
         
        </ul></nav>
        
        </div>
    )

}
export default Navbar
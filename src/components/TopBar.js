import React from "react";
import logo from './logo/logo.jpg';
import './TopBar.css';




const TopBar= () => {
    return(
        <div  className= "topBarContainer">
            <span>
               <a className="topBarLinks"   href="tel: 000-000-0000"> 
                   <i className="glyphicon glyphicon-earphone"/>000-000-0000 </a>
               <a  className="topBarLinks" href="index.js">
                   <img className="logo" src={logo}  alt="logo" /> </a>         
            </span>

         </div>
  )
}
export default TopBar;



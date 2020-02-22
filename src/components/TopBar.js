import React from "react";
import logo from './logo/logo.jpg';




const TopBar= () => {
    const TopBarContainerStyle= {
            boxSizing: 'border-box',
            borderTop:'1px solid rgba(230, 229, 229, 1)',
            borderBottom:'1px solid rgba(230, 229, 229, 1)',
            height:'40px',
            display:'flex',
            
           
          };


      const TopBarLinks= {
        display:'inline-block',
        border:'1px solid black',
        float:'right',
        marginRight:'20px',
        marginLeft:'200px',
        marginTop:'5px', 
        textDecoration:'none',
      }    

    const LogoStyle={
        width:'100px',
        height:'30px',
        border:'0px',
       
    };     
    
return(
<div  style= {TopBarContainerStyle}>
  <span>
  <a style={TopBarLinks}   href="tel: 000-000-0000"> 
               <i className="glyphicon glyphicon-earphone"/>000-000-0000 </a>
  <a  style={TopBarLinks} href="index.js">
                <img style={LogoStyle} src={logo}  alt="logo" /> </a>         
    </span>

  </div>
  )
}


export default TopBar;



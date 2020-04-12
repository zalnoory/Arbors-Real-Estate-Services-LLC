import React from 'react';
import TopBar from "./components/TopBar.js";
import Content from "./components/Content.js";



export default class ArborsApp extends React.Component{
  render(){
    
       return(  
         <div style={{
                      minHeight: '100vh',
                      position: 'relative',
                     boxSizing:'border-box',
                     backgroundColor: 'rgb (255, 255, 255)',
                     fontFamily:'Poppins,sansSerif',
                     fontSize:'12px',
                   }}
                   > 
                 <TopBar/>  
                 <Content/>

                  <div className="footer">
                        <p>Footer</p>
                  </div>
                  
          </div>        
          );
        }
}




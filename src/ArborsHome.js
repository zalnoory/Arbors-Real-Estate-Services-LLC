import React from 'react';
import TopBar from "./components/TopBar.js";
import Content from "./components/Content.js";



export default class ArborsHome extends React.Component{
  render(){
       return(  
         <div style={{
                      minHeight: '100vh',
                      position: 'relative',
                     boxSizing:'border-box',
                     backgroundColor: 'rgb (255, 255, 255)',
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




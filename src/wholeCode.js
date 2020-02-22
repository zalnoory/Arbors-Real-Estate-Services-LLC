import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  logo from './logo/logo.jpg';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


function TopBar(){
    return( 
        <ul className="top-bar">
  <li className="tel"><a href="tel: 214-335-3849"> 
               <i className="glyphicon glyphicon-earphone"/>214-335-3849 </a></li>
  
  <li class="left"><a href="index.js" class="arbors">
                              <img className="logo" src={logo}  alt="logo" />
                              {/* style={{width:'120px',height:'40px',border:'0px'}}  */}
                              </a></li>
        </ul>

    )
}

// function MainNav() {
//     return(
//         <ul className="main-nav">
//            <li><a href="#home" class="home">Home</a></li>
//            <li><a href="#home" class="resources">Resources</a></li>
                 
           
//            <li><a href="#contact">Contact</a></li>                   
//            <li><a class="active" href="#about">About</a></li>
           
//         </ul>
        
//     );
// }

class ArborsHomePage extends React.Component{
         render(){
               return(  
              <div className="site-container">
                   <div className="top-bar-container">
                        <TopBar/>
         {/* <TelNum />                      */}
                       </div>
                   {/* <div className="main-nav-container">
                         <MainNav/>
                       </div>

                   <div className="content">
                         <h2>CSS Template</h2>
                         <p>A topnav, content and a footer.</p>
                       </div>

                    <div className="footer">
                          <p>Footer</p>
                       </div> */}


              </div>
             )
          }
    }

ReactDOM.render(<ArborsHomePage />, document.getElementById('root'));


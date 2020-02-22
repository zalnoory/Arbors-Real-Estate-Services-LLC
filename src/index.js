import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from "./components/TopBar.js";


class ArborsHomePage extends React.Component{
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
             

                  <div className="content">
                        <h2>CSS Template</h2>
                        <p>A topnav, content and a footer.</p>
                  </div>

                  <div className="footer">
                        <p>Footer</p>
                  </div>
            </div>
          );
        }
}
ReactDOM.render(<ArborsHomePage />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from "./components/TopBar.js";
import Content from "./components/Content.js";

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
                   <Content/>
                 

                  <div className="footer">
                        <p>Footer</p>
                  </div>
            </div>
          );
        }
}
ReactDOM.render(<ArborsHomePage />, document.getElementById('root'));
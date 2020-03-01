import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {NavList, NavListItem, NavAnchor , HomeAnchor, Row, Col,} from './NavBar.styles';
import About from './About';
import Contact from './Contact';
import Resources from './Resources';
import Home from './Home';


const NavBar= ()=> { 
  
      const navItems= [
        {name:'Resources', compoPath:'/resources'},
        {name:'Contact', compoPath:'/contact'},
        {name:'About', compoPath:'/about'},
        {name:'Home', compoPath:'/home'},
       
       
        
       
        ];
             
    return (
        <Row>
        <Col size={1} >

 {/* https://reacttraining.com/react-router/web/example/basic
 installed react-router-dom. */}
      <Router>
        {/*populating NavBar dynamically  */}
        {navItems.map((item, i)=> {
                return (
                 
                   <NavList key={i}>
                         <NavListItem>
                               <Link style={{textDecoration:"none"}} to= {item.compoPath} class="resources">
                               <NavAnchor> {item.name} </NavAnchor>
                              </Link>
                    </NavListItem>
  
                    </NavList>
                 
            )})}
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {/* <IndexRoute component = {Home} />  figure later*/} 
            <Route path="/resources" component= {Resources} />
            <Route path="/contact" component= {Contact} />
            <Route path="/about" component= {About}/>
            <Route path="/home"  component ={Home} />
              {/* <Home/>
            </Route> */}
          </Switch>
      </Router>
          </Col>
        </Row>
         )
      }
    
  {/* NavBar ends here............................................/  */}
  
  export default NavBar
  
  {/* class Home extends React.Component { 
    render(){
    return <h2>Home</h2>;
   }
  }
  
class About extends React.Component { 
  render(){
    return <h2>About</h2>;
   }
   }
  
  
   class Contact extends React.Component { 
     render(){
     return <h2>Contact</h2>;
    }
  }
  
   class Resources extends React.Component { 
     render(){
     return <h2>Resources</h2>;
    }
  }
   */}
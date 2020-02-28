import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {NavList, NavListItem, NavAnchor , HomeAnchor} from './NavBar.styles';
import About from './About';
import Contact from './Contact';
import Resources from './Resources';

export default class NavBar extends React.Component { 
    render(){
  
      const navItems= [
        {name:'Home', compoPath:'/',},
        {name:'About', compoPath:'/about',},
        {name:'Contact', compoPath:'/Contact',},
        {name:'Resources', compoPath:'/Resources',},
        ];
             
    return (
// https://reacttraining.com/react-router/web/example/basic
// installed react-router-dom.
      <Router>
        <div>
          {/*populating NavBar dynamically  */}
        {navItems.map((item, i)=> {
                return (
                  <nav>
                   <NavList key={i}>
                         <NavListItem>
                               <Link style={{textDecoration:"none"}} to= {item.compoPath} class="resources">
                               <NavAnchor> {item.name} </NavAnchor>
                              </Link>
                    </NavListItem>
  
                    </NavList>
                 </nav>
            )})}
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/resources">
              <Resources/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
         )
    }
  
    }
  // NavBar ends here............................................/ 
  
  
  
  class Home extends React.Component { 
    render(){
    return <h2>Home</h2>;
   }
  }
  
  // class About extends React.Component { 
  //   render(){
  //   return <h2>About</h2>;
  //  }
  // }
  
  
  // class Contact extends React.Component { 
  //   render(){
  //   return <h2>Contact</h2>;
  //  }
  // }
  
  // class Resources extends React.Component { 
  //   render(){
  //   return <h2>Resources</h2>;
  //  }
  // }
  
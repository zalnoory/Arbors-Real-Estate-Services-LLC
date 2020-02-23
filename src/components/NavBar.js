import React from 'react'
// import './css/Content.css';
import {NavList, NavListItem, NavAnchor, HomeAnchor} from './NavBar.styles';

const NavBar = () => {
    return(
        <div className="nav-container">
          <NavList>
          <NavListItem>
                  <NavAnchor href="index.js" class="resources">
                   Resources
                     </NavAnchor>
            </NavListItem>

          <NavListItem>
                 <NavAnchor class="active" href="#about">
                  About
                  </NavAnchor>
               </NavListItem>

          <NavListItem>
                  <NavAnchor href="#contact">
                   Contact
                   </NavAnchor>
                </NavListItem>

          <NavListItem>
                  <HomeAnchor href="index.js" class="home">
                    Home
                     </HomeAnchor>
               </NavListItem>
            

               
               
            </NavList>
         </div>
    )
}

export default NavBar;
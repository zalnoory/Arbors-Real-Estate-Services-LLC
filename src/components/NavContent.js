import React from 'react'
import './css/Content.css';
import {NavList, NavListItem, NavAnchor, HomeAnchor} from './NavContent.styles';

const NavContent = () => {
    return(
        <div className="nav-container">
          <NavList>

            <NavListItem>
                  <HomeAnchor href="index.js" class="home">
                    Home
                     </HomeAnchor>
            </NavListItem>

            <NavListItem>
                  <NavAnchor href="index.js" class="resources">
                   Resources
                     </NavAnchor>
            </NavListItem>

               <NavListItem>
                  <NavAnchor href="#contact">
                   Contact
                     </NavAnchor>
               </NavListItem>

               <NavListItem>
                 <NavAnchor class="active" href="#about">
                  About
                  </NavAnchor>
               </NavListItem>
               
            </NavList>
         </div>
    )
}

export default NavContent;
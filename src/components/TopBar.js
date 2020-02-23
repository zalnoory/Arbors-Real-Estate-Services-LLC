import React from 'react';
import logo from './logo/logo.jpg';
import { TopBarContainer, TopBarLinks, StyledLogo, LinkContainer } from './TopBar.styles';

const TopBar = () => {
  return (
    <TopBarContainer>
         <LinkContainer>
              <TopBarLinks href="index.js">
                    <StyledLogo className="logo" src={logo} alt="logo" />{' '}
              </TopBarLinks>
         </LinkContainer>

         <LinkContainer>
              <TopBarLinks href="tel: 000-000-0000">
                     <i className="glyphicon glyphicon-earphone" />
                                 000-000-0000{' '}
              </TopBarLinks>
        
        </LinkContainer>
    </TopBarContainer>
  )
}
export default TopBar

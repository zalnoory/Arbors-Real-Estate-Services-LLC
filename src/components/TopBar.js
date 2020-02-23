import React from 'react';
import logo from './logo/logo.jpg';
import { TopBarContainer,RowStyle, TopBarLinks, StyledLogo, LinkContainer } from './TopBar.styles';

const TopBar = () => {
  return (
    <TopBarContainer>
    <RowStyle class="row">
         <LinkContainer class="column">
              <TopBarLinks href="index.js">
                    <StyledLogo className="logo" src={logo} alt="logo" />{' '}
              </TopBarLinks>
         </LinkContainer>

         <LinkContainer class="column">
              <TopBarLinks href="tel: 000-000-0000">
                     <i className="glyphicon glyphicon-earphone" />
                                 000-000-0000{' '}
              </TopBarLinks>
        
        </LinkContainer>
        </RowStyle>
    </TopBarContainer>
  )
}
export default TopBar

import React from 'react'
import logo from './logo/logo.jpg'
import { TopBarContainer, TopBarLinks, StyledLogo } from './TopBar.styles'

const TopBar = () => {
  return (
    <TopBarContainer>
      <span>
        <TopBarLinks href="tel: 000-000-0000">
          <i className="glyphicon glyphicon-earphone" />
          000-000-0000{' '}
        </TopBarLinks>
        <TopBarLinks href="index.js">
          <StyledLogo className="logo" src={logo} alt="logo" />{' '}
        </TopBarLinks>
      </span>
    </TopBarContainer>
  )
}
export default TopBar

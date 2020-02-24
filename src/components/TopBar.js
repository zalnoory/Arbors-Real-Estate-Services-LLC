import React from 'react';
import logo from './logo/logo.jpg';
import { Grid,Row,Col,TopBarLinks,StyledLogo} from './TopBar.styles';

const TopBar = () => {
  return (
    <Grid>
      <Row>
         <Col size={1} collapse= "xs">
            
                 <TopBarLinks href="index.js">
                     <StyledLogo className="logo" src={logo} alt="logo" />{' '}
                  </TopBarLinks>
             
         </Col>

         <Col size={1}>
              
                   <TopBarLinks href="tel: 000-000-0000">
                      <i className="glyphicon glyphicon-earphone" />
                                 000-000-0000{' '}
                    </TopBarLinks>
          
        
          </Col>
      </Row>
    </Grid>
  )
}
export default TopBar

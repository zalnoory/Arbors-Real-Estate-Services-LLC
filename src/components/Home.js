import React from 'react'
import {Container,ChildContainer,Form, } from './NavBar.styles';
import PropTypes from 'prop-types';

class Home extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
         
        };
    }
    
    render(){
        return(
      <Container>
       <ChildContainer>
       <Form>
      
    <p style={{textAlign:'center'}}>FIND A HOME</p>
    <div>
     <input type="text" placeholder=" Search By City" /><input type="text"/><input type="text"/><input type="text"/>
     </div>
       </Form>
       </ChildContainer>
       </Container>

        )
    }}

 
    
export default Home;

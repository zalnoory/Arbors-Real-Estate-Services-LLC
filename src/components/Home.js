import React from 'react'
import {Container,ChildContainer,Form, } from './NavBar.styles';
import NavBar from './NavBar.js';

class Home extends React.Component{
    
    
    
    render(){
        return(
      <Container>
       <ChildContainer>
       <Form>
      
    <p style={{textAlign:'center'}}>FIND A HOME</p>
     <input type="text"/><input type="text"/><input type="text"/><input type="text"/>
       </Form>
       </ChildContainer>
       </Container>

        )
    }}

 
    
export default Home;

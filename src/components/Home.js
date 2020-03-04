import React from 'react'
import {Container,ChildContainer,Form, } from './NavBar.styles';
import NavBar from './NavBar.js';
// import img from './photo-1556955112-28cde3817b0a.jpeg';
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

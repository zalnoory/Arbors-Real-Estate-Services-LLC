import React from 'react';
import NavBar from './NavBar.js';
import styled from 'styled-components'


// const NavBarCompart= styled.div`

// `

export default class Content extends React.Component { 
  render(){
    
  return (
    <div className= "content-container">
      <div>
    <NavBar/>
    </div>
  </div>
  )
}
}
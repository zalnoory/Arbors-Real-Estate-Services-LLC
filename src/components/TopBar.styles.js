import styled from 'styled-components'

export const TopBarContainer = styled.div`
  box-sizing: border-box;
  border-top: 1px solid rgba(230, 229, 229, 1);
  border-bottom: 1px solid rgba(230, 229, 229, 1);
  height: 40px;
  display: flex;
`


export const LinkContainer= styled.div`
box-sizing: border-box;
display:flex;
width:50%;
border:1px solid red;

`


export const TopBarLinks = styled.a`
  display: block;
  border: 1px solid black;
 
  margin-right: 20px;
  margin-left: 200px;
  margin-top: 5px;
  text-decoration: none;
`

export const StyledLogo = styled.img`
  width: 100px;
  height: 30px;
  border: 0px;
`

import styled from 'styled-components'


export const NavList= styled.ul`
list-style-type: none;
margin:auto;
padding: 0;
text-align: center; 
`

export const NavListItem = styled.li`
display: inline-block;
 padding: 10px; 
 float:right;
`

export const NavAnchor = styled.a`
color:#333; 
text-decoration: none;

&:hover{
    color: #718817fe;
    font-weight: bold;
    text-decoration:none;
}
`




// export const NavAnchor= styled.a`
// color:#333; 
// text-decoration: none;

// &:hover{
//     color: #718817fe;
//     font-weight: bold;
//     text-decoration:none;
// }
// `


export const HomeAnchor= styled.a`
color: #718817fe;
font-weight: bold;
&:hover{
    color:#333;
    font-weight: bold;
    text-decoration:none;
}
`

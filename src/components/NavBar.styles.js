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

// Reference:https://medium.com/swlh/create-a-responsive-grid-with-react-flexbox-styled-components-f7a55f607480
export const Row= styled.div`
display: flex;
border:2px solid yellow;
`;


export const Col= styled.nav`

flex:${(props)=> props.size};

border:1px solid red;
`;
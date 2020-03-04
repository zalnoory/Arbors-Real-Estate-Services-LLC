import styled from 'styled-components';
import img from './stephen-leonardi-Al9Cl-b7EFU-unsplash.jpg'/* Photo by Stephen Leonardi https://unsplash.com/@stephenleo1982 on Unsplash.com  .*/ ;





/*.... NavBar Main Container....*/
// Reference:https://medium.com/swlh/create-a-responsive-grid-with-react-flexbox-styled-components-f7a55f607480
export const Row= styled.div`
display: flex;
border:2px solid yellow;
`;


export const Col= styled.nav`

flex:${(props)=> props.size};

// border:1px solid red;
`;
/*....NavBar Main Container end....*/


/*..... NavBar styling......*/

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

// export const HomeAnchor= styled.a`
// color: #718817fe;
// font-weight: bold;
// &:hover{
//     color:#333;
//     font-weight: bold;
//     text-decoration:none;
// }
// `
/*.....NavBar styling end......*/ 


/* Home.js styling starts here*/

export const Container= styled.div`
position: relative;
width: auto;
height: 450px;
margin-top:30px;

&:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 0.7;
    border: 1px white;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
 `
export const ChildContainer= styled.div`
position: relative; 
z-index: 2;
`

export const Form= styled.form`
        background: gray;
        font-size:10px;
        color: white;
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        margin-top: 160px;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%) 

`

// export const Container= styled.form`
// position: relative;
// width: auto;
// height: 450px;

// &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     z-index: 1;
//     opacity: 0.8;
//     border: 1px white;
//     background-image: url(${img});
//     background-repeat: no-repeat;
//     background-size: cover;
//  `
// export const ChildContainer= styled.div`
// position: relative; 
// z-index: 2;
// `




export const Paragraph= styled.p`

margin-top: 160px;
background: grey;
position: absolute;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%);

`
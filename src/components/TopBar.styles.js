import styled from 'styled-components'

export const Grid = styled.div`
  box-sizing: border-box;
  border-top: 1px solid rgba(230, 229, 229, 1);
  border-bottom: 1px solid rgba(230, 229, 229, 1);
  height:40px;
`;

export const Row= styled.div`
display: flex;
`;


const media={
  /* Extra small devices (phones, 600px and down) */
  xs:(styles)=> `
  @media only screen and (max-width: 600px) {
    ${styles}
  }
  `,
}


export const Col= styled.div`

flex:${(props)=> props.size};

${(props)=> props.collapse && media[props.collapse](`
display: none;
`)};

border:1px solid red;
height:35px;

`;


export const TopBarLinks = styled.a`
  display: block;
  border: 1px solid black;
  margin-right: 20px;
  margin-left: 200px;
  margin-top: 5px;
  text-decoration: none;
`;

export const StyledLogo = styled.img`
  width: 100px;
  height: 30px;
  border: 0px;
`;

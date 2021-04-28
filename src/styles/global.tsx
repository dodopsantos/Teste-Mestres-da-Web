import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    outline: 0;
    box-sizing: border-box;
  }

  h1 {
    /* font-family: Marvel; */
  }

  h2, h3, h4, h5 {
    font-family: Axiforma;
  }

  p, span {
    font-family: AxiformaLight;
  }

  body {    
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};    
  }
`

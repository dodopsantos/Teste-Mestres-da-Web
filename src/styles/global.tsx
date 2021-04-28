import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    outline: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: Axiforma;
    src: local(Axiforma), url(../assets/fontes/Kastelov-AxiformaBold.otf);
  }

  @font-face {
    font-family: Marvel;
    src: local(Marvel), url(../assets/fontes/MarvelRegular-Dj83.ttf);
  }

  @font-face {
    font-family: AxiformaThin;
    src: local(AxiformaThin), url(../assets/fontes/Kastelov-AxiformaThin.otf);
  }

  h1 {
    /* font-family: Marvel; */
  }

  h2, h3, h4, h5 {
    /* font-family: Axiforma; */
  }

  p, span {
    /* font-family: AxiformaThin; */
  }

  body {    
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};    
  }
`

import { createGlobalStyle } from 'styled-components'

import Marvel from '../assets/fontes/Marvel.ttf'
import Axiforma from '../assets/fontes/Kastelov-AxiformaBold.otf'
import AxiformaThin from '../assets/fontes/Kastelov-AxiformaThin.otf'
import AxiformaLight from '../assets/fontes/Kastelov-AxiformaLight.otf'

export default createGlobalStyle`
    @font-face {
        font-family: 'Marvel';
        src: url('${Marvel}');
    }
    @font-face {
        font-family: Axiforma;
        src: url('${Axiforma}');
    }
    @font-face {
        font-family: AxiformaLight;
        src: url('${AxiformaLight}');
    }
    @font-face {
        font-family: AxiformaThin;
        src: url('${AxiformaThin}');
    }    
`

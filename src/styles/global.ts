import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    body{
        background-color: ${props => props.theme.colors};
        font-size: 16px;
        color: ${props=> props.theme.colors.secundary};
        font-family: ${props=>props.theme.fonts[0]};
    }
`;
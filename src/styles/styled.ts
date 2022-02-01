import styled from "styled-components"

export const Themee = styled.div`
    background-color: ${props => props.theme.colors.backgoround};
    min-height: 100vh;
    font-family: ${props=>props.theme.fonts[0]};
`
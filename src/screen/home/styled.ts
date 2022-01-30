import styled from "styled-components";

interface dark {
    DarkMode:boolean
}

export const ListMoview = styled.div`
    margin-top: 5vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const Main = styled.div<dark>`
background-color: ${props => props.DarkMode ? props.theme.colors.bgdark : props.theme.colors.bgwhite};
`

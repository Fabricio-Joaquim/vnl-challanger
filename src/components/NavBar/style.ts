import styled from "styled-components";

export const Mainwrapper = styled.div`
    display: grid;
    padding-top: 1rem;
    margin-bottom: 3rem;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width:786px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Input = styled.input`
    height: 60px;
    width: 60%;
    border-radius: 20px;
    padding-left: 5px;
    font-size: ${props => props.theme.fontSizes.small};
    background-color: ${props => props.theme.colors.secundary};
    color:${props => props.theme.colors.backgoround};
    margin-inline: auto;
`;

export const Button = styled.button`
    height: 70px;
    width: 120px;
    border-radius: 24px;
    background-color: ${props=>props.theme.colors.secundary};
    color: ${props=>props.theme.colors.backgoround};
    cursor: pointer;
    margin-left: 1rem;

`;


export const Logo = styled.h3`
    cursor:pointer;
    margin-left:10px;
    font-size: ${props => props.theme.fontSizes.large};
    font-weight: bold;
`;

export const SubWrapper = styled.div`
display: flex;
`
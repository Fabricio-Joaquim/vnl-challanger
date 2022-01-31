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
    }
`;

export const Input = styled.input`
    height: 60px;
    width: 60%;
    border-radius: 20px;
    margin-inline: auto;
`;

export const Button = styled.button`
    height: 70px;
    width: 120px;
    border-radius: 24px;
    background-color: ${props=>props.theme.colors.backgoround};
    color: ${props=>props.theme.colors.secundary};
    cursor: pointer;
    margin-left: 1rem;

`;

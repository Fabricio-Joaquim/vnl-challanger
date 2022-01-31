import styled from "styled-components"

export const Mainwrapper = styled.div`
    display:flex;
    flex-direction:column;

    text-align: center;
    span{
        font-family: ${props=> props.theme.fonts[0]};
        font-size: ${props=>props.theme.fontSizes.medium};
    }
    p{
        font-family: ${props=> props.theme.fonts[0]};
        font-size: ${props=>props.theme.fontSizes.small};
    }
    h2{
        font-size: ${props => props.theme.fontSizes.large};
        margin-bottom: 1rem;
    }
`;

export const Back = styled.div`
    display:flex;
    flex-direction:column;
    cursor:pointer;
    justify-content: center;
`;

export const Subwrapper = styled.section`

    img{
        height: 70%;
        width: 50%;
        margin: 0 auto;
        display: flex;
        border-radius: 20px;
        @media (max-width: 867px) {
            height: 100%;
            width: 90%;
        }
    }

    

`;
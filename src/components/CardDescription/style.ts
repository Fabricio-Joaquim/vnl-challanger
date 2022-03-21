import styled from "styled-components";

export const Head = styled.div`
    img{
        border: 1px outset ${props => props.theme.colors.secundary};
    };

    h2{
        font-size: ${props => props.theme.fontSizes.large};
        font-weight: Bold;
        @media (max-width:786px) {
            margin-top:4vh
        }
    };

    p{
        margin-top: 5px;
    }
`;

export const TextDescription = styled.section`
    border: 3px outset ${props => props.theme.colors.secundary};
    border-radius: 12px;
    width: 60%;
    align-content:center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 4vh;
    margin-bottom: 4vh;
    padding: 20px;
    span{
        margin-top: 12px;
        margin-bottom: 5px;
        text-transform: capitalize;
        font-weight: lighter;    
    }
    a{
        text-decoration: solid;
        color: ${props => props.theme.colors.secundary};
        font-weight: bolder;
            
    }
    @media (max-width:786px) {
        width: 80%;
        }
`;

export const SubDescription = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    justify-content:space-around;
    width:100%;
        @media (max-width:786px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

div{
    display:flex;
    flex-direction:column;
}
`;


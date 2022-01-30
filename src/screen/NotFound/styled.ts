import styled from "styled-components"
import {Link} from "react-router-dom"
export const Mainwrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        font-size: 40px;
        color:red;
    }
`;

export const MLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
`;
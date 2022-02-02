import { Button } from './../../components/NavBar/style';
import styled from "styled-components";
import { Pagination } from '@mui/material';

export const ListMoview = styled.div`
    margin-top: 5vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const Main = styled.div`
    width: 100%;
`;


export const MyPagination = styled(Pagination)`
    justify-content: center;
    display:flex;
    color:white;
    .MuiPagination-ul{
        button{
            background-color: ${props => props.theme.colors.secundary};
            color:${proprs => proprs.theme.colors.backgoround}
        }
    }

    @media (max-width:786px) {
        margin: auto;
        flex-wrap:nowrap;
        display: flex;
        max-width: 360px;
        .MuiPagination-ul{
            flex-wrap: nowrap;
            display: flex;
            li{
                width: 41px;
            }
        }
}
    
`;
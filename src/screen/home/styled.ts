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

`;


export const MyPagination = styled(Pagination)`
    justify-content: center;
    display:flex;
    color:white;
`;
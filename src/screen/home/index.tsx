import React from 'react';
import { useGlobalContext } from "../../context";
import ListCard from "../../components/ListCard/";
import * as S from "./styled"
import NavBar from "../../components/NavBar"
import { Pagination } from '@mui/material';

const Home = () => {
    const { Page, handlePage, MaxPage } = useGlobalContext()
    return (
        <S.Main> 
            <NavBar/>
            <Pagination size='large' page={Page} count={MaxPage} style={{justifyContent:"center", display:"flex"}} onChange={handlePage}/>
            <S.ListMoview>
                <ListCard />
            </S.ListMoview>
        </S.Main>)
};

export default Home

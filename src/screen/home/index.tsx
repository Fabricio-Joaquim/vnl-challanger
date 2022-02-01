import React from 'react';
import { useGlobalContext } from "../../context";
import ListCard from "../../components/ListCard/";
import * as S from "./styled"
import NavBar from "../../components/NavBar"

const Home = () => {
    const { Page, handlePage, MaxPage, Search, Render } = useGlobalContext()
    return (
        <S.Main> 
            <NavBar/>
                {Render?"Busca por  : "+Search:""}
            <S.MyPagination size='large' page={Page} count={MaxPage} onChange={handlePage}/>
            <S.ListMoview>
                <ListCard />
            </S.ListMoview>
        </S.Main>
        )
};

export default Home

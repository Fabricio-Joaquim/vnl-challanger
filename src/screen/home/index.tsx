import React from 'react';
import { useGlobalContext } from "../../context";
import ListCard from "../../components/ListCard/";
import * as S from "./styled"
import NavBar from "../../components/NavBar"

const Home = () => {
    const { DarkMode } = useGlobalContext()
    return (
        <S.Main DarkMode={DarkMode}> 
            <title>Home</title>                    
            <NavBar/>
            <S.ListMoview>
                <ListCard />
            </S.ListMoview>
        </S.Main>)
};

export default Home

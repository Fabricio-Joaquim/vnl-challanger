/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import { useGlobalContext } from "../../context";
import ListCard from "../../components/ListCard/";
import * as S from "./styled"
const Home = () => {
    const { setUser } = useGlobalContext()

    return (<div>
        <input type="text" onChange={event => setUser(event.target.value)} />

        <S.ListMoview>
            <ListCard />
        </S.ListMoview>


    </div>)
};

export default Home




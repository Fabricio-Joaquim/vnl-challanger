import React from 'react';
import { useGlobalContext } from "../../context";
import * as S from "./styled";
import { IListMovies } from "../../context/types"
import { Link } from 'react-router-dom';
const ListCard = () => {
    const { ListMovies } = useGlobalContext()
    return (
        <>
            {
                ListMovies.map((item: IListMovies) =>
                <Link to={`Description/${item.id}`} key={item.id}>
                    <S.Mainwrapper  img={item.poster_path} >
                    </S.Mainwrapper>
                    </Link> )
            }

        </>
    )

};

export default ListCard
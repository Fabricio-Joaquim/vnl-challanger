import React from 'react';
import { useGlobalContext } from "../../context";
import * as S from "./styled";
import { IListMovies } from "../../context/types"
const ListCard = () => {
    const { ListMovies } = useGlobalContext()
    return (
        <>
            {
                ListMovies.map((item: IListMovies) =>
                    <S.Mainwrapper key={item.id} img={item.poster_path} >
                        <div><span>                       </span>
                        </div>
                    </S.Mainwrapper>
                )
            }

        </>
    )

};

export default ListCard
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
                <S.MyLink to={`Description/${item.id}`} key={item.id}>
                    <S.Mainwrapper  img={item.poster_path}>
                    <S.Item>
                        <p>Ver mais</p>
                        <S.Descriscao>
                           <span>Pontuação:</span>
                           {item.vote_average}<br/>
                            Nome: {item.title}<br/>
                            Popularidade: {item.popularity} pontos<br/>
                        </S.Descriscao>
                    </S.Item>    
                    </S.Mainwrapper>
                    </S.MyLink>
                )
            }
        </>
    )
};

export default ListCard
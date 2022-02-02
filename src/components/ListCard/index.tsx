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
                        <p></p>
                        <S.Descriscao>
                            <span>Título:</span> {item.title.toUpperCase()}
                            <span>Pontuação:</span>{item.vote_average}
                            <span>Popularidade:</span> {item.popularity} pontos
                            <span>Sinopse:</span>
                            <section>{item.overview || "Sinopse não disponível"}</section>
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
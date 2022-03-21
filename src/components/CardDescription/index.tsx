import React from 'react';
import { IDescription } from "../../screen/Description/types"
import * as S from "./style"
import { newDate } from "../../util/functions"
type AppProps = {
    Description: IDescription;
}

const CardDescription = ({ Description }: AppProps) => {
    return (
        <>
            <S.Head>
                <h2> {Description.title}</h2>
                <img src={Description.backdrop_path} alt="" loading='lazy'/>
                <p>{Description.tagline}</p>
            </S.Head>
            <S.TextDescription>
                <S.SubDescription>
                    <div>
                        <span>Página Oficial:</span>{<a href={Description.homepage}>Link</a>}
                    </div>
                    <div>
                        <span>Data de Lançamento: </span><p> {newDate(Description.release_date)}</p>
                    </div>
                    <div>
                        <span>Gênero: </span><p> {Description.genres?.map((item, index) => Description.genres.length !== index + 1 ? item?.name + ", " : item?.name + "")}</p>
                    </div>
                    <div>
                        <span>Número de Votos: </span>{<p>{Description.vote_count}</p>}
                    </div>
                    <div>
                        <span>Idiomas: </span><p> {Description?.spoken_languages?.map((item, index) => Description?.spoken_languages.length !== index + 1 ? item?.name + ", " : item?.name + "")}</p>
                    </div>
                    <div>
                        <span>Média de Votos: </span>{<p>{Description.vote_average}</p>}
                    </div>
                </S.SubDescription>
                <span style={{ alignSelf: "center" }}>Sinopse: </span><p> {Description.overview}</p>
            </S.TextDescription>
        </>
    );
};

export default CardDescription


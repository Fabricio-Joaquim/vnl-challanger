import React from 'react';
import * as S from "./styled"
import { FaRegSadTear } from "react-icons/fa";
const NotFound = () => {
    return <S.Mainwrapper>
        <FaRegSadTear size={300} color="red" />
        <h1>
            Página Não Encontrada
        </h1>
        <S.MLink to="/">
            Voltar para Página Inicial
        </S.MLink>
    </S.Mainwrapper>;
};

export default NotFound
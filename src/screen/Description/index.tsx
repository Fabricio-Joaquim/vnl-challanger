/*eslint-disable*/

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MoviesRequest from '../../services/MoviesRequest'
import { MdArrowBack } from "react-icons/md"
import { IDescription } from "./types"
import * as S from "./styled"
import Switch from '../../components/Switch'
import CardDescription from "../../components/CardDescription"
const Description = () => {
    const { id } = useParams()
    const [Descript, setDescript] = useState<IDescription>({})
    useEffect(() => {
        async function a() {
            setDescript(await MoviesRequest.getDescriptionMovie(Number(id)))
        }
        a()
    }, [])
    return (
        <S.Mainwrapper>
            <S.Bar>
                <S.Back>
                    <MdArrowBack size={50} onClick={() => history.back()} />
                </S.Back>
                <Switch />
            </S.Bar>
            <S.Subwrapper>
                <CardDescription Description={Descript} />
            </S.Subwrapper>
        </S.Mainwrapper>
    );
};

export default Description
/*eslint-disable*/

import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MoviesRequest from '../../services/MoviesRequest'
import { MdArrowBack } from "react-icons/md"
import {IDescription} from "./types"
import {newDate} from "../../util/functions"
import * as S from "./styled"
const Description = () => {
    const {id} = useParams()
    const [Descript, setDescript] =  useState<IDescription>({})
    useEffect(()=>{
       async function a (){
            setDescript(await MoviesRequest.getDescriptionMovie(Number(id)))
        }
        a()
    },[])
    return (
        <S.Mainwrapper>
            <S.Back>
                <MdArrowBack size={50} onClick={()=>history.back()}/>
            </S.Back>
        <S.Subwrapper>
        <h2>
            {Descript.title}
            </h2>
            <img src={Descript.backdrop_path}/>
            {<a href={Descript.homepage}> 
            Página Oficial
        </a> 
            }
            <p>
            <span>Data de Lançamento:</span><br/>{ newDate(Descript.release_date)  }
            </p>
            <br/>
            <p>
            <span>
                Gêneros:<br/>
            </span> {Descript.genres?.map((item,index)=> Descript.genres.length!=index+1? item?.name+", ":item?.name+"") }
            </p>
            <br/>
            <p>
         <span>
             Sinopse:
            </span>   
             <br/>{Descript.overview}
            </p>

</S.Subwrapper>
    </S.Mainwrapper>
    );
};

export default Description
/*eslint-disable*/

import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MoviesRequest from '../../services/MoviesRequest'
import { MdArrowBack } from "react-icons/md"
import {IDescription} from "./types"
import {newDate} from "../../util/functions"
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
    <div style={{display:"flex", flexDirection:"column"}}>
        <div style={{display:"flex", flexDirection:"column", cursor:"pointer"}}>
        <MdArrowBack size={50} onClick={()=>history.back()}/>
        Volta
        </div>
        {<a href={Descript.homepage}> 
            Página Oficial
        </a> 
            }
{ newDate(Descript.release_date)  }
 Genero: {Descript.genres?.map((item)=>item?.name) }
    </div>
    );
};

export default Description
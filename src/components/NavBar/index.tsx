/*eslint-disable*/
import React from 'react'
import { useGlobalContext } from '../../context'
import SwitchButton from '../Switch'
import * as S from "./style"
const NavBar = () => {
    
    const {handleSearch, Search} = useGlobalContext()
  return (
  <nav>
            <S.Mainwrapper>
              <h3 onClick={()=>location.reload()} style={{cursor:"pointer", marginLeft:10}}>
              HOME
              </h3>
              <div>
                <S.Input type="text" value={Search} onChange={handleSearch}/>
                <S.Button>Buscar</S.Button>
              </div>
                <SwitchButton />
            </S.Mainwrapper>

  </nav>);
};

export default NavBar
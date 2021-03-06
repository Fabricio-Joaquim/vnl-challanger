import React from 'react'
import { useGlobalContext } from '../../context'
import SwitchButton from '../Switch'
import * as S from "./style"
const NavBar = () => {
    const {handleSearch, Search, buttonClick} = useGlobalContext()
    // eslint-disable-next-line no-restricted-globals
    const home = ()=>location.reload()
    return (
      <nav>
        <S.Mainwrapper>
          <S.Logo onClick={home}>
            HOME
          </S.Logo>
          <S.SubWrapper>
            <S.Input type="text"
              value={Search}
              alt="digite para encontrar um filme"
              placeholder="Buscar por título"
              onChange={handleSearch}/>
            <S.Button onClick={buttonClick}>Buscar</S.Button>
          </S.SubWrapper>
          <SwitchButton />
        </S.Mainwrapper>
      </nav>
    );
};

export default NavBar
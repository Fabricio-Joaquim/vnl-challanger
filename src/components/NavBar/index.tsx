import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import SwitchButton from '../Switch';
const NavBar = () => {
    
    const {handleSearch} = useGlobalContext()
    
  return (
  <nav>
            <div style={{ display: "flex", marginTop: "1rem", alignItems: "center", justifyContent: 'space-around' }}>
                <input type="text" onChange={handleSearch}/>
                <SwitchButton />
            </div>

  </nav>);
};

export default NavBar
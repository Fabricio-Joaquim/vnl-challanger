import React from 'react'
import { useGlobalContext } from '../../context'
import { Slider, Switch, Moon } from "./styled"
export const SwitchButton = () => {

    const { handleBG, DarkMode } = useGlobalContext()


    return (<>
    <div style={{flexDirection:"row", display:"flex", marginLeft: "auto"}}>
        <Switch>
            <input type="checkbox" checked={DarkMode} onChange={handleBG} />
            <Slider />
        </Switch>
       <Moon size={30}/>
    </div>

    </>

    );
};







export default SwitchButton
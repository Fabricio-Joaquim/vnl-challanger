import React from 'react'
import { useGlobalContext } from '../../context'
import { Slider, Switch, Moon,Mainwrapper } from "./styled"
export const SwitchButton = () => {

    const { handleBG, DarkMode } = useGlobalContext()

    return (
    <>
    <Mainwrapper>
        <Switch>
            <input type="checkbox" checked={DarkMode} onChange={handleBG} />
            <Slider />
        </Switch>
       <Moon size={30}/>
    </Mainwrapper>
    </>
    );
};

export default SwitchButton
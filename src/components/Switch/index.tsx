import React from 'react'
import { useGlobalContext } from '../../context'
import { Slider, Switch, Moon } from "./styled"

export const SwitchButton = () => {

    const { handleBG, DarkMode } = useGlobalContext()


    return (<>

        <Switch>
            <input type="checkbox" checked={DarkMode} onChange={handleBG} />
            <Slider />
        </Switch>
        <svg version="1.1" id="Layer_1_1_" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 16 16" style={{ height: 30 }}>
            <path d="M8,16c1.257,0,2.442-0.298,3.5-0.815C8.838,13.886,7,11.161,7,8s1.838-5.886,4.5-7.185C10.442,0.298,9.257,0,8,0
	C3.582,0,0,3.582,0,8S3.582,16,8,16z"/>
            <path d="M14,3c0,1.105-0.895,2-2,2c1.105,0,2,0.895,2,2c0-1.105,0.895-2,2-2C14.895,5,14,4.105,14,3z" />
            <path d="M10,6c0,1.105-0.895,2-2,2c1.105,0,2,0.895,2,2c0-1.105,0.895-2,2-2C10.895,8,10,7.105,10,6z" />
            <path d="M13,13c0-1.105,0.895-2,2-2c-1.105,0-2-0.895-2-2c0,1.105-0.895,2-2,2C12.105,11,13,11.895,13,13z" />
        </svg>

    </>

    );
};







export default SwitchButton
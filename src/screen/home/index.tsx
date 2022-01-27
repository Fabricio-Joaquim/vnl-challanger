/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useGlobalContext } from "../../context";
import api from '../../services/request';

const Home = () => {
    const { user, setUser } = useGlobalContext()
    const [State, setState] = useState<any>([])
    useEffect(() => {

        async function any() {
            console.log(await api.message())

        }
        any()
    }, [])
    console.log(State)
    return (<div>
        <input type="text" onChange={event => setUser(event.target.value)} />
        <br />

        <br />
        {user}
    </div>)
};

export default Home




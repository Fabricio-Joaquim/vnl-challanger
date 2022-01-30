import React from 'react';

export const changeTheme = () => {
    return;
};

/* import React, { useState, useEffect } from "react"


export default function changeTheme(key: any, initialState: any) {
    const [Local, setLocal] = useState<any>(
        () => {
            const local = localStorage.getItem(key)
            if (local) {
                return JSON.parse(local)
            } else {
                return initialState
            }
        }
    );
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(key, Local))
    }, [key, Local]);

    return [Local, setLocal]
};
 */
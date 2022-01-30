/*eslint-disable*/
import React,{useEffect, }from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "../screen/home"
import Descrition from "../screen/Description"
import NotFound from "../screen/NotFound"
export const Routers = () => {

    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="Description/:id" element={<Descrition />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
};

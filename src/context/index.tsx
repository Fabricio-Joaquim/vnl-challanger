import React, { useEffect, useState } from "react";
import MoviesRequest from "../services/MoviesRequest";
import apiMovie from '../services/MoviesRequest';
import { IListMovies, IContext } from "./types"

export const Context = React.createContext<IContext>({});

export const ContextProvider = (props: any) => {
  const subQuery = "https://image.tmdb.org/t/p/w500"
  const [DarkMode, setDarkMode] = useState<boolean>(false);
  const [ListMovies, setListMovies] = useState<IListMovies[]>([])
  const [Search, setSearch] = useState("")
  const handleBG = () => setDarkMode(!DarkMode)
  const handleSearch = (event:HTMLInputElement)=>setSearch(event.value)
  useEffect(() => {
    async function any() {
      const { results } = await apiMovie.getListMovies()
      let aux: any = []
      results.map((item: IListMovies) =>
        aux.push({ ...item, poster_path: subQuery + item.poster_path }))
      setListMovies(aux)
      /* const user = await MoviesRequest.SearchMovie("homem")
console.log(user)  */
}
    any()
  }, [])

  console.log(Search,1)

  
  return (
    <Context.Provider value={{ DarkMode, ListMovies, handleBG, handleSearch }}>
      {props.children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => React.useContext(Context);
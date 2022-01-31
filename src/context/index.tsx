import React, { useEffect, useState, useMemo, ChangeEvent } from "react";
import MoviesRequest from "../services/MoviesRequest";
import apiMovie from '../services/MoviesRequest';
import { IListMovies, IContext } from "./types"

export const Context = React.createContext<IContext>({});

export const ContextProvider = (props: any) => {
  const subQuery = "https://image.tmdb.org/t/p/w500"
  const [DarkMode, setDarkMode] = useState<boolean>(false);
  const [ListMovies, setListMovies] = useState<IListMovies[]>([])
  const [Page, setPage] = useState(1)
  const [Search, setSearch] = useState("")
  const MaxPage = 500;
  const handleBG = () => setDarkMode(!DarkMode)
  const handleSearch = (event:ChangeEvent<HTMLInputElement>)=>setSearch(event.target.value)
  const handlePage = (_: any,value: React.SetStateAction<number>)=>setPage(value)
  useEffect(() => {
    
    async function any() {
      const { results } = await apiMovie.getListMovies(Page)
      let aux: any = []
      results.map((item: IListMovies) =>
        aux.push({ ...item, poster_path: subQuery + item.poster_path }))
      setListMovies(aux)
            /*        const user = await MoviesRequest.SearchMovie("homem")
      console.log(user,"user")   */

}
    any()
  }, [Page])

  console.log(Search)

  return (
    <Context.Provider value={{ DarkMode, ListMovies, handleBG,Search, handleSearch, Page, MaxPage,  handlePage }}>
      {props.children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => React.useContext(Context);
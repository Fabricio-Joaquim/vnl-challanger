import React, { useEffect, useState, ChangeEvent } from "react";
import MoviesRequest from "../services/MoviesRequest";
import apiMovie from '../services/MoviesRequest';
import { IListMovies, IContext } from "./types"

export const Context = React.createContext<IContext>({});

export const ContextProvider = (props: any) => {
  const subQuery = "https://image.tmdb.org/t/p/w500"
  const [DarkMode, setDarkMode] = useState<boolean>(false);
  const [ListMovies, setListMovies] = useState<IListMovies[]>([])
  const [Page, setPage] = useState(1)
  const [Render, setRender] = useState(false)
  const [Search, setSearch] = useState("")
  const [MaxPage, setMaxPage]= useState(500);
  const handleBG = () => setDarkMode(!DarkMode)
  const handleSearch = (event:ChangeEvent<HTMLInputElement>)=>setSearch(event.target.value)
  const handlePage = (_: any,value: React.SetStateAction<number>)=>setPage(value)
  const buttonClick = ()=>{ setRender(true);SearchMovie(Search, Page).then((arr:any)=>{setListMovies(arr[0]); setMaxPage(arr[1])})}
  
  async function any() {
    const { results } = await apiMovie.getListMovies(Page)
    let aux: any = []
    results.map((item: IListMovies) =>
      aux.push({ ...item, poster_path: subQuery + item.poster_path }))
    setListMovies(aux)
  }
    async function SearchMovie(query:string, Page:number){
      return await MoviesRequest.SearchMovie(query, Page) 
    }
  
  useEffect(() => {
    if(!Render){
      any()
    }else{
      SearchMovie(Search, Page).then((arr:any)=>{setListMovies(arr[0]); setPage(1)})
    }
  }, [Page, Render]);

  return (
    <Context.Provider value={{ 
      DarkMode,
      ListMovies,
      handleBG,
      Search,
      handleSearch,
      Page,
      MaxPage,
      buttonClick,
      handlePage, 
      Render
      }}>
      {props.children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => React.useContext(Context);
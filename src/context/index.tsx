import React, { SetStateAction, useEffect, useState } from "react";
import apiMovie from '../services/MoviesRequest';
import { IListMovies } from "./types"
interface User {
  user?: string
  setUser?: React.Dispatch<SetStateAction<string>> | null;
  ListMovies?: IListMovies[]
}

export const Context = React.createContext<User>({});

export const ContextProvider = (props: any) => {
  const subQuery = "https://image.tmdb.org/t/p/w500"
  const [user, setUser] = useState("vvvvvv");
  const [ListMovies, setListMovies] = useState<IListMovies[]>([])
  const handle = (event: HTMLInputElement) => setUser(event.value)

  useEffect(() => {
    async function any() {
      const { results } = await apiMovie.message()
      let aux: any = []
      results.map((item: IListMovies) =>
        aux.push({ ...item, poster_path: subQuery + item.poster_path }))
      setListMovies(aux)
    }
    any()
  }, [])

  return (
    <Context.Provider value={{ user, setUser, ListMovies }}>
      {props.children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => React.useContext(Context);
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface User {
  user?: string
  setUser?: React.Dispatch<SetStateAction<string>> | null;
}

export const Context = React.createContext<User>({});

export const ContextProvider = (props: any) => {
  const [user, setUser] = useState("vvvvvv");
  const handle = (event: HTMLInputElement) => setUser(event.value)

  return (
    <Context.Provider value={{ user, setUser }}>
      {props.children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => React.useContext(Context);
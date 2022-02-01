import React from 'react';
import { ThemeProvider } from "styled-components";
import Theme from "./styles"
import { Reset } from 'styled-reset'
import { Routers } from './Router';
import Global from "./styles/global"
import { useGlobalContext } from './context';
import {Themee} from "./styles/styled"
function App() {

  const {DarkMode} = useGlobalContext()

  return (
    <ThemeProvider theme={DarkMode?Theme.dark:Theme.light}>   
      <Reset />
        <Global/>
        <Themee>
          <Routers />
        </Themee>
    </ThemeProvider>
  );
}

export default App;

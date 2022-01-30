import React from 'react';
import { ThemeProvider } from "styled-components";
import { ContextProvider } from './context';
import Home from "./screen/home/index"
import theme from "./style"
import { Reset } from 'styled-reset'
import { Routers } from './Router';

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Reset />
        <Routers />
      </ThemeProvider>
    </ContextProvider>

  );
}

export default App;

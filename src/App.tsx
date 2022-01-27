import React from 'react';
import { ThemeProvider } from "styled-components";
import { ContextProvider } from './context';
import Home from "./screen/home/index"
import theme from "./style"
import { Reset } from 'styled-reset'

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </ContextProvider>

  );
}

export default App;

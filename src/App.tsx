import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { ContextProvider } from './context';
import theme from "./style"
import { Reset } from 'styled-reset'
import { Routers } from './Router';
import Global from "./styles/global"
function App() {

  const Themee = styled.div`
    background-color: ${props => props.theme.colors.backgoround};
    min-height: 100vh;
    font-family: ${props=>props.theme.fonts[0]};
  `

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>   
        <Reset />
        <Global/>
        <Themee>
        <Routers />
        </Themee>
      </ThemeProvider>
    </ContextProvider>

  );
}

export default App;

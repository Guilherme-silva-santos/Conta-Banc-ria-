import React from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/tema";

import Cabecalho from "./Components/Cabecalho";
import ContainerRapper from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTema } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme"
import { useState } from "react";

function App() {

  const [tema, setTema] = useState(true);
  const toggleTema = () => {
    setTema((tema)=> !tema)
  }

  return (    
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>

      <GlobalStyle/>
      <Cabecalho />
      <ContainerRapper />

    </ThemeProvider>
  );
}

export default App;

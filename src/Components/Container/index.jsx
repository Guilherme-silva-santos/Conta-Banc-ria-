import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";
import {Conteudo} from "./style";
import { Container } from "./style";
import Extrato from "../Extrato";

const ContainerRapper = () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato/>
      </Conteudo  >
    </Container>
  );
};

export default ContainerRapper;

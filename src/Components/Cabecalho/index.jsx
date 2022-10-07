import React from "react";
import { StyledHeader } from "./Style";
import {Logo} from "./Style";
import {BtnCabecalho} from "./Style";
import bank_logo from "../../assets/images/bank_logo.svg";

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary={true} href="https://google.com">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho  href="https://google.com">
          Sair
        </BtnCabecalho>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;

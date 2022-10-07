import styled from "styled-components";
import { CorPrimaria } from "../UI/Variaveis";

export const StyledHeader = styled.nav`
  background-color: ${CorPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

export const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => (props.primary ? "white" : CorPrimaria)}; // se for primaria a props sera white senao sera a var
  color :${(props) => (props.primary ? CorPrimaria : "white")};
 
`;

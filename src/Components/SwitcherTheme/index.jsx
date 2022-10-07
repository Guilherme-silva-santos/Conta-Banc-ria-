import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";

import { Icone } from "../UI";


const claro = <Icone src={ThemeOn} />
const escuro = <Icone src={ThemeOff} />

const DefineTema = ({tema}) => ( tema ? escuro : claro ) 

export default DefineTema;
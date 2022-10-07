import React from "react";
import styled from "styled-components";
import Iten  from "../Item";

const Items = styled.div`
    box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
    border-radius:10px;
    margin:2px 0;
    display: flex;
    align-items: center;
    justify-content:space-around;
    padding:10px;
    font-size:12px;

`

 const Item1 =  (props) => {
    return <Items>
        <Iten {... props}/>
        <span>{props.date}</span>
    </Items>
     
};

export default Item1;
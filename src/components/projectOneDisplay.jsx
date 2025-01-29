import React from "react";
import { useState } from "react";
import "./projectOne.css";

return(
<>
<div class="container" >   
        <div class="box left-box">
            <p onClick={display}>First Statement</p>
            <p onClick={display}>Second Statement</p>
            <p onClick={display}>Third Statement</p>
            <p onClick={display}>Fourth Statement</p>
        </div>
        <div class="box">
            <p id="result"></p>
        </div>
    </div>
</>
);
export function projectO(props){
    const[a,seta]=useState();

function display(a){
    b=document.getElementById('box').innerHTML=result;
}

}
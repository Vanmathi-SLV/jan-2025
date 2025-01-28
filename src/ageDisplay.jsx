import { useState } from "react";


export function AgeDisplay(props){
    const[data,setData]=useState("Test")
    const getValue=(a)=>{
       console.log(a.target.value)
       setData(a.target.value)
    }
    return (
    <>
    <p>You are {props.age} years old</p>
    <button onClick={()=>props.btnClick(data)}>Click</button>
    <input type="text" value={data} onChange={(e)=>getValue(e)}/>
    </>

    );
    
}
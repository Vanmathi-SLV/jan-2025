


import { Navigate } from "react-router-dom";
import { NewTest } from "../context/newContext";
import { useContext } from "react";




export function Auth({element,...rest}){
        const data=useContext(NewTest)
    return (
    <>
      {data.aunthenticated ? element:<Navigate to="/login"/> }
    </>

    );
    
}
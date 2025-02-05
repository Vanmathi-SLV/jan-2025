
import { Navigate } from "react-router-dom";
import { NewTest } from "../context/newContext";
import { useContext } from "react";



export function Login(){
        const data=useContext(NewTest)
        console.log(data,"HOMeee")
        if(data.aunthenticated){
            return(
                <Navigate to="/home"/>
            )
        }
    return (
    <>
      I am Login
      {/* <MyForm/> */}
      <button type="submit" onClick={data.toggleAunthenticated}>Login</button>
      {/* <Outlet/> */}
    </>

    );
    
}
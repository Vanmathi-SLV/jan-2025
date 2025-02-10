// import { Outlet } from "react-router-dom";
import { NewTest } from "../context/newContext";
// import { useContext } from "react";
import MyForm from "./MyForm";
import { Auth } from "../Hoc/Auth";


 function Home(){
        // const data=useContext(NewTest)
        // console.log(data,"HOMeee")
    return (
    <>
      I am Home
      <MyForm/>
      {/* <Outlet/> */}
    </>

    );
    
}
export default Home;
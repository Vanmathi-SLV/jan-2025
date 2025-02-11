// import { Outlet } from "react-router-dom";
// import { NewTest } from "../context/newContext";
// import { useContext } from "react";
import MyForm from "./MyForm";
// import { Auth } from "../Hoc/Auth";
import { NotesApi } from "../api/notesApi";


 function Home(){
        // const data=useContext(NewTest)
        // console.log(data,"HOMeee")
        const getValue= async()=>{
          const res=await NotesApi.getData();
          console.log(res,'Response In Home');
        }
    return (
    <>
      I am Home
      <MyForm/>
      <button onClick={getValue}>Get Value</button>
      {/* <Outlet/> */}
    </>

    );
    
}
export default Home;
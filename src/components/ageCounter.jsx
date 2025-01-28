import {useState} from "react";
import { AgeDisplay } from "../ageDisplay";

export function AgeCounter(props){
    const[age,setAge]=useState(30);
     function increaseAge(){
        setAge(age+1);
     }
     function testAge(data){
      console.log("From Parent",data);
     }

     console.log("rerender !");
     return(
        <div>
            <button onClick={increaseAge}>Increase age</button>
            <AgeDisplay age={age} btnClick={testAge}/>
        </div>
     );
}
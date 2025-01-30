import React,{useEffect, useState} from 'react';
import './child.css';
import  T from './test.module.css';
import axios from 'axios';

const Child = ({msg}) => {
    // console.log(msg, "props")
    //let data = 0;
    const[data,setData]=useState() 
    const Test= async()=> {console.log("btn") 
       // data++
    //    setData(data+1)
    const res= await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(res,res.data)
    setData(res.data)

    }

    useEffect(()=>{
        console.log("UseEffect Loaded");
        return(()=>{
             console.log("Child Unmounted")
        })
    },[data])

    return(
        <>
        Hello i am child {msg}
        <button className={T.btnclass} onClick={Test}>
            click me
        </button>
        {/* <p>
            {data}
        </p> */}
        {/* {
            // <ul>
           data && data.map((dt)=>
            <li key={dt.id}>
                <p>{
                  dt.title  
                }</p>
                 
            </li>
            ) 
        //    </ul>
        } */}
         <ul>

{data && data.map(item => (

  <li key={item.id}>

    <h3>{item.title}</h3>

    <p>{item.body}</p>

  </li>

))}

</ul>
        </>
    )
}

export default Child;
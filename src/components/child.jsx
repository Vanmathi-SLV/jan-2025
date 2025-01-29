import React,{useEffect, useState} from 'react';
import './child.css';
import  T from './test.module.css';

const Child = ({msg}) => {
    // console.log(msg, "props")
    //let data = 0;
    const[data,setData]=useState(0) 
    const Test=()=>{console.log("btn") 
       // data++
       setData(data+1)
    }

    useEffect(()=>{
        console.log("UseEffect Loaded");
        return(()=>{
             console.log("Child Unmounted")
        })
    },[data])

    return(
        <>
        Hello i am child {msg}--{data}
        <button className={T.btnclass} onClick={Test}>
            click me
        </button>
        <p>
            {data}
        </p>
        </>
    )
}

export default Child;
import React,{useEffect, useState} from 'react';
import './child.css';
import  T from './test.module.css';
import axios from '../api/instance';

const Child = ({msg}) => {
    // console.log(msg, "props")
    //let data = 0;
    const[data,setData]=useState()
    const[newdata,setNewData]= useState({})
    const Test= async()=> {console.log("btn") 
       // data++
    //    setData(data+1)

     

    }

    useEffect(()=>{
        console.log("UseEffect Loaded");
        const fetchData=async()=>{
        const res= await axios.get("/users")
        console.log(res,res.data)
        setData(res.data)
        }
        fetchData();
        return(()=>{
             console.log("Child Unmounted")
        })
    },[])

    const getValue=(e,property)=>{
        // console.log(e,property)
        let obj={...newdata}
        obj[property]=e.target.value
        setNewData(obj)
         
    }
    const handleSubmit= async()=>{
        console.log(newdata)
        const res= await axios.post('http://localhost:5000/users',newdata)
        console.log(res)
    }
    const handleUpdate=(id)=>{
         const findData=data.find((dt)=>dt.id==id)
         console.log(findData)
         axios.put(`http://localhost:5000/users/${id}`,{...findData,name:'newUpdatedName'})
    }
    
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:5000/users/${id}`)
    }
    

    return(
        <>
        Hello i am child {msg}
        <button className={T.btnclass} onClick={Test}>
            click me
        </button>
        <input type='text' onChange={(e)=>getValue(e,"name")} />
        <input type='email'onChange={(e)=>getValue(e,"email")} />
        <button type='submit' onClick={handleSubmit}>Add</button>
        
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

    <h3>{item.name}</h3>

    <p>{item.email}</p>
    <button type='submit' onClick={()=>handleUpdate(item.id)}>Update</button>
    <button type='submit' onClick={()=>handleDelete(item.id)}>Delete</button>

  </li>

))}

</ul>
        </>
    )
}

export default Child;
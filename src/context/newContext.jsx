import {  createContext, useState } from "react";

export const NewTest= createContext()
export const DataProvider=({children})=>{
    const [data,setData]=useState('test');
    const [aunthenticated,setAunthenticated]=useState(false)

    const toggledata=()=>{
        setData('new')
    }
    const toggleAunthenticated=()=>{
        setAunthenticated(true)
    }
    return(
        <NewTest.Provider value={{data,toggledata,aunthenticated,toggleAunthenticated}}>
            {children}
        </NewTest.Provider>
    )
}

// export default NewContext;
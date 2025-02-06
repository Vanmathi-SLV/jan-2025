import { useState,useMemo, memo } from "react";

const Expensive = ({data}) =>
{
    console.log("child renders")
    const [count,setCount]=useState(0);
    // const calculate=()=>{
    //          return items.reduce((a,b)=>{
    //         console.log("calculation")
    //         return a+b},0)
    // }
    const [items,setItems]=useState([2,4,5])
    const total= useMemo(()=>items.reduce((a,b)=>{
            console.log("calculation", count)
            return a+b},0),[items]);
    // const total = calculate();

    return(
        <><p>Total:{total}</p>
                  <button type="submit" onClick={()=>setItems([...items, 1])}>total Count</button>
          <p>Count:{count}</p>
          <button type="submit" onClick={()=>setCount(count+1)}>App Count</button>
        </>
        
    )
}

export default memo(Expensive);
// export default Expensive;
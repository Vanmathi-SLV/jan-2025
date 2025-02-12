import { createSlice } from "@reduxjs/toolkit"

const InitialState={
    counter:0
    
}
// const counterReducer=(state=InitialState,action)=>{
//      switch(action.type)  {
//         case 'Increment':
//               {
//                 ...state,
//                 count:state.count+1
//               }
//         case 'Decrement':
//             return{
//                 ...state,
//                 count:state.count-1
//               }
//      } 
// }
// export default counterReducer;


export const counterSlice=createSlice({
    name:'counter',
    initialState:InitialState,
    reducers:{
               Increment:(state)=>{
                state.count+=1
               },  
               Decrement:(state)=>{
                state.count-=1
               }
    }
})

export const{Increment,Decrement}=counterSlice.actions
export default counterSlice.reducer
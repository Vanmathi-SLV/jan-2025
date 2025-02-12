import { configureStore} from '@reduxjs/toolkit'
import  {counterSlice} from './Reducers/counter'

const store=configureStore ({
    reducer:{
        counter:counterSlice.reducer
    }
})

export default store;
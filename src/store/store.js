import { combineReducers} from 'redux';
import counterReducer from './Reducers/counter'

const rootReducer=combineReducers({
    counter:counterReducer
})
export default rootReducer



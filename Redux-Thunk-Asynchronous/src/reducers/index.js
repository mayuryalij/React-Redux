import { combineReducers } from "redux"
//It is a wrapper or a container which is used to hold the reducers together

const reducers = (state={},action) => {
    switch(action.type){
        case 'Not Empty': return {...state, NewState: action.payload}
        default: return state
    }
}

const rootReducer = combineReducers({
    reducers

})

export default rootReducer
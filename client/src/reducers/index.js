//root reduce brings togetjer sll reducers, like auth reducer error reducer, its a meetig place
//for all reducers
import  { combineReducers } from "redux"
import itemReducer from "./itemReducer";

export default combineReducers({
    item: itemReducer
})
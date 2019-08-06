//reducer is where the actual state goes, its where the actions are checked,
// actions file are dispatched to the reducer like a [payload like gotten froma fetch request from server, tthen dispatch to the reducer and reducer is used to add it to react componenets

import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from "../actions/types";

//in reducers, we have to handle and evaluate action types

const initialState = {
  //this is gonna be gotten from backend
  items: [],
  loading: false
};
// when action coes in the action in the argumenyt has a type attached to it, so a switch to evaluate type
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case DELETE_ITEMS:
      return {
        ...state, //below returns the values that are no the present id, the payload is the id
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ADD_ITEMS:
      return {
        //the previous state is gotten cos state is immutanble and can beadded to but not changed
          ...state,
          items: [action.payload,  ...state.items]
        //below returns the values that are no the present id, the payload is the id

      };
    case ITEMS_LOADING:
      return{
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

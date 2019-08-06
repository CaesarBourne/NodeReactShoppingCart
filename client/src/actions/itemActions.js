//this is where the action item is executed like fetching data fro database
//so d
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from "../actions/types";
const axios = require("axios");

//so this actio would be called from within our component that would trigger the ite type
export const getItems = () => dispatch=> {
dispatch(setItemsLoading());

axios
.get("/api/items")
.then( res=>  dispatch( {
  type: GET_ITEMS,
  payload: res.data
})
)
.catch(err=>{});
}


//this needs the id of the item to delete and also send a paylaod of the id
export const deleteItems = _id => dispatch => {
  axios
  .delete(`/api/items/${_id}`)
  .then(res => dispatch({
    type: DELETE_ITEMS,
    payload: _id
  }))
  .catch(()=>{

  });
  
};

//this needs the id of the item to delete and also send a paylaod of the id
export const addItem = item => dispatch => {
  
  axios
  .post("/api/items", item)
  .then(res => 
    dispatch( {
    type: ADD_ITEMS,
    payload: res.data
  }))
  .catch(()=>{

  })
  
};

export const setItemsLoading = ()=>{
  return {
    type: ITEMS_LOADING
  }
}

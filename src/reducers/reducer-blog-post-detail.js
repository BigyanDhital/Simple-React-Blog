import {  POST_SELECTED, SUBMIT_NEW_POST, DELETE_POST } from "../actions";
export default function(state =null, action) {
  switch (action.type) {
      case POST_SELECTED:
       console.log(action.payload.data);
      return action.payload.data;
     
      case SUBMIT_NEW_POST:
      
      return action.payload.data;
 
      case DELETE_POST:
      return state;
    default:
      return state;
  }
}

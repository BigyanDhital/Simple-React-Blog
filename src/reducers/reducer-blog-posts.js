import { ON_LOAD, SUBMIT_NEW_POST, DELETE_POST } from "../actions";
export default function(state = [], action) {
  switch (action.type) {
    case ON_LOAD:
      console.log(action.payload.data);
      return action.payload.data;
  
      case SUBMIT_NEW_POST:
      return [...state,action.payload.data];

      case DELETE_POST:
      return state;

    default:
      return state;
  }
}

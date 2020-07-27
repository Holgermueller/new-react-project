import authReducer from "./authReducer";
import listReducer from "./listReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  list: listReducer,
});

export default rootReducer;

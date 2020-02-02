import { combineReducers } from "redux";
import albumsReducer from "./albumsReducer";
import authReducer from "./authReducer";

export default combineReducers({
  albumsReducer,
  authReducer
});

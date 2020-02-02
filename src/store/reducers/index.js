import { combineReducers } from "redux";
import albumsReducer from "./albumsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  albums: albumsReducer,
  auth: authReducer
});

export default rootReducer;

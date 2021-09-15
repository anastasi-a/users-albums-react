import {combineReducers} from "redux";
import userReducer from "./users";
import albumReducer from "./albums";

export default combineReducers(
  {
    users: userReducer,
    albums: albumReducer
  }
);

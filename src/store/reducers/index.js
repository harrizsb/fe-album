import { combineReducers } from "redux";
import ui from "./ui";
import photos from "./photos";

export default combineReducers({
  ui,
  photos,
});

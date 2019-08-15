import { combineReducers } from "redux";
import configReducer from "./configReducer";
import statusReducer from "./statusReducer";

const rootReducer = combineReducers({
  config: configReducer,
  status: statusReducer
});
export default rootReducer;


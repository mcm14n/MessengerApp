import { combineReducers } from "redux";
import messages from "./messages";
import chatroom from "./chatroom";

export default combineReducers({ chatroom, messages });

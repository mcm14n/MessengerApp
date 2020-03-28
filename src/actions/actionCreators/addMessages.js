import { ADD_MESSAGE } from "../actions/addMessage";

export default function AddMessage(message) {
  return {
    type: ADD_MESSAGE,
    message: message
  };
}

export default function chatroom(state = "", action) {
  switch (action.type) {
    case "change chatroom":
      return action.chatroom;
    default:
      return state;
  }
}

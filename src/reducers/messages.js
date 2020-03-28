export default function messages(state = [], action) {
  switch (action.type) {
    case "add message":
      return [...state, action.message];
    default:
      return state;
  }
}

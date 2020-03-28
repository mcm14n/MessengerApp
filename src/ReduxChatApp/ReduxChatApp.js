import { connect } from "react-redux";
import AddMessage from "../actions/actionCreators/addMessages";
import ChatApp from "../components/ChatApp/ChatApp";

const mapStateToProps = state => {
  return {
    messages: state.messages,
    chatroom: state.chatroom
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMessageSubmit: message => dispatch(AddMessage(message))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatApp);

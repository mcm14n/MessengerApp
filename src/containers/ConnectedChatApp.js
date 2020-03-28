import { connect } from "react-redux";
import ChatApp from "../components/ChatApp/ChatApp";

const mapStateToProps = state => {
  return {
    chatroom: state.chatroom
  };
};

export default connect(mapStateToProps)(ChatApp);

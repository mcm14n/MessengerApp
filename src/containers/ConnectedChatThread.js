import { connect } from "react-redux";
import ChatThread from "../components/Chat/ChatThread";

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(ChatThread);

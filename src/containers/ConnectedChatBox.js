import { connect } from "react-redux";
import AddMessage from "../actions/actionCreators/addMessages";
import ChatBox from "../components/Chat/ChatBox";

const mapDispatchToProps = dispatch => {
  return {
    onSubmitMessage: msg => dispatch(AddMessage(msg))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ChatBox);

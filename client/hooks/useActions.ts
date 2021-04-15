import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../store/actions-creators/index";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};

// смысл хука вызывать actionCreator как обычные функ
// без dispatch()
// связывание ActionCreators и dispatch

import { combineReducers } from "redux";
import auth from "./auth";
import { bookListReducer } from "./books";
export default combineReducers({
	auth,
	bookList: bookListReducer,
});

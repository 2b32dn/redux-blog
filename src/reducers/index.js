import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import usersReducer from "./usersReducer";

// export default combineReducers({
//   replaceMe: () => 'hi there' // Dummy line to test the reducers
// })

export default combineReducers({
  posts: postReducer,
  users: usersReducer
});

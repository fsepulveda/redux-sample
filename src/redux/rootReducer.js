import { combineReducers } from "redux";
import posts from './reducers/posts';
import users from './reducers/users';

const rootReducer = combineReducers({
  posts, users
});

export default rootReducer;
// Root reducer setup
import { combineReducers } from 'redux-immutable'

import PostsReducer from './Posts'
import PostReducer from './Post'
const rootReducer = combineReducers({posts: PostsReducer, post: PostReducer });

export default rootReducer;

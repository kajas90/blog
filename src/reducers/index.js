// Root reducer setup
import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux';

import PostsReducer from './Posts'
const rootReducer = combineReducers({posts: PostsReducer });

export default rootReducer;

import initialState from './initialState';
import * as types from '../actions/actionTypes';
import { fromJS } from 'immutable'

const PostsReducer = (state = fromJS(initialState.posts), action) => {
  switch(action.type) {
    case types.GET_POSTS:
      return state.setIn(['list','status'], 'loading');
    case types.GET_POSTS_SUCCESS:
      return state.setIn(['list','status'], 'ready').mergeIn(['list','data'],action.posts);
    default:
      return state;
  }
};

export default PostsReducer;

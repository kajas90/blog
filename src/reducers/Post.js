import initialState from './initialState';
import * as types from '../actions/actionTypes';
import { fromJS } from 'immutable'

const PostReducer = (state = fromJS(initialState.post), action) => {
  switch(action.type) {
    case types.GET_POST_SUCCESS:
      return state
        .mergeIn(['data'], action.post)
        .setIn(['status'], 'ready');
    default:
      return state;
  }
};

export default PostReducer;

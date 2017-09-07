import initialState from './initialState';
import * as types from '../actions/actionTypes';
import { fromJS } from 'immutable'

const PostReducer = (state = fromJS(initialState.post), action) => {
  switch(action.type) {
    case types.SELECT_POST:
      return state.setIn(['data','id'], action.id);
    default:
      return state;
  }
};

export default PostReducer;

import initialState from './initialState';
import * as types from '../actions/actionTypes';
import { fromJS } from 'immutable'

import {findUsername} from '../regexes'

const PostReducer = (state = fromJS(initialState.post), action) => {
  switch(action.type) {
    case types.GET_POST_SUCCESS:
      return state
        .mergeIn(['data'], action.post)
        .setIn(['status'], 'ready');
    case types.ADD_COMMENT: {
      const result = findUsername.exec(action.text);
      let answerTo = null;
      if(result) {
        answerTo = state.getIn(['data', 'comments']).filter(item => item.get('author') === result[1]);
      }

      return state.updateIn(['data','comments'], comments => comments.push(fromJS({
        author: 'annonymous',
        id: Math.floor(Date.now() / 1000),
        postId: state.getIn(['data','id']),
        content: action.text,
        parent: answerTo ? answerTo.get(0).get('id') : 0
      })))
    }
    default:
      return state;
  }
};

export default PostReducer;

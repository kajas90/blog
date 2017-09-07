import { takeLatest, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { GET_POSTS } from 'actions/actionTypes'

import { getPostsError, getPostsSuccess } from 'actions/postsActions'


export function* refreshPostsSaga() {
  try {
    const response = yield call(() => fetch('http://localhost:3000/notes').then(response => response.json()));
    yield delay(1500);
    yield put(getPostsSuccess(response));
  } catch ({ name, message, stack, status }) {
    yield put(getPostsError({ name, message, stack, status }));
  }
}


export default function* PostsSaga() {
  yield takeLatest(GET_POSTS, refreshPostsSaga);
}

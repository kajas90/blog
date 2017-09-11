import { takeLatest, put, call, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { GET_POSTS, GET_POST } from 'actions/actionTypes'

import { getPostsError, getPostsSuccess, getPostSuccess, getPostError } from 'actions/postsActions'


export function* refreshPostsSaga() {
  try {
    const response = yield call(() => fetch('http://localhost:3000/notes').then(response => response.json()));
    yield delay(1500);
    yield put(getPostsSuccess(response));
  } catch ({ name, message, stack, status }) {
    yield put(getPostsError({ name, message, stack, status }));
  }
}

export function* getPostSaga(action) {
  try {
    const response = yield call(() => fetch(`http://localhost:3000/post?id=${action.id}`).then(response => response.json()));
    yield put(getPostSuccess(response));
  } catch ({ name, message, stack, status }) {
    yield put(getPostError({ name, message, stack, status }));
  }
}



export default function* PostsSaga() {
  yield all([takeLatest(GET_POSTS, refreshPostsSaga), takeLatest(GET_POST, getPostSaga)]);
}

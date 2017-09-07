import * as types from './actionTypes';

export const getPosts = () => ({
  type: types.GET_POSTS
})

export const getPostsError = (error) => ({
  type: types.GET_POSTS_ERROR,
  error
})

export const getPostsSuccess = (posts) => ({
  type: types.GET_POSTS_SUCCESS,
  posts
})


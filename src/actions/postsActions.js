import * as types from './actionTypes';

export const getPosts = () => ({
  type: types.GET_POSTS
})

export const getPostsError = (error) => ({
  type: types.GET_POSTS_ERROR,
  error
})

export const getPostsSuccess = (notes) => ({
  type: types.GET_POSTS_SUCCESS,
  posts
})


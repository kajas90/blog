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


export const getPost = id => ({
  type: types.GET_POST,
  id
})

export const selectPost = id => ({
  type: types.SELECT_POST,
  id
})

export const getPostError = (error) => ({
  type: types.GET_POST_ERROR,
  error
})

export const getPostSuccess = (post) => ({
  type: types.GET_POST_SUCCESS,
  post
})

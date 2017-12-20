import axios from 'axios'
import * as types from 'constants/posts-action'


const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=diownf0ewcdw'

export const fetchPosts = () => ({
  type: types.FETCH_POSTS,
  payload: axios.get(`${ROOT_URL}/posts${API_KEY}`),
})

export const fetchPost = id => ({
  type: types.FETCH_POST,
  payload: axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`),
})

export const resetActivePost = () => ({
  type: types.RESET_CURRENT_POST,
})


export const createPost = props => ({
  type: types.CREATE_POST,
  payload: axios.post(`${ROOT_URL}/posts${API_KEY}`, props),
})

export const createPostSuccess = activePost => ({
  type: types.SUCCESS_POST,
  payload: activePost,
})

export const createPostFailure = error => ({
  type: types.FAILURE_POST,
  payload: error,
})

export const resetNewPost = () => ({
  type: types.RESET_NEW_POST,
})

import {
  FETCH_POSTS,
  SUCCESS_POSTS,
  FAILURE_POSTS,

  FETCH_POST,
  SUCCESS_POST,
  FAILURE_POST,
  RESET_CURRENT_POST,

  CREATE_NEW_POST,
  SUCCESS_NEW_POST,
  FAILURE_NEW_POST,
  RESET_NEW_POST,
} from 'constants/posts-action'


const INITIAL_STATE = {
  postsList: {posts: [], error: null, loading: false},
  newPost: {post: null, error: null, loading: false},
  activePost: {post: null, error: null, loading: false},
}

export default (state = INITIAL_STATE, action) => {
  let error = null

  switch (action.type) {
    // posts
    case FETCH_POSTS:
      return { ...state, postsList: {posts: [], error: null, loading: true}}
    case SUCCESS_POSTS:
      return { ...state, postsList: {posts: action.payload, error: null, loading: false}}
    case FAILURE_POSTS:
      error = action.payload || {message: action.payload.message}
      return { ...state, postsList: {posts: null, error, loading: false}}

    // post
    case FETCH_POST:
      return { ...state, activePost: {post: null, error: null, loading: true}}
    case SUCCESS_POST:
      return { ...state, activePost: {post: action.payload, error: null, loading: false}}
    case FAILURE_POST:
      error = action.payload || {message: action.payload.message}
      return { ...state, activePost: {post: null, error, loading: false}}
    case RESET_CURRENT_POST:
      return { ...state, activePost: {post: null, error: null, loading: false}}

      // create new post
    case CREATE_NEW_POST:
      return {...state, newPost: {...state.newPost, loading: true}}
    case SUCCESS_NEW_POST:
      return {...state, newPost: {post: action.payload, error: null, loading: false}}
    case FAILURE_NEW_POST:
      error = action.payload || {message: action.payload.message}
      return {...state, newPost: {post: null, error, loading: false}}
    case RESET_NEW_POST:
      return {...state, newPost: {post: null, error: null, loading: false}}
    default:
      return state
  }
}

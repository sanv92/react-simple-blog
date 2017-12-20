import {
  FETCH_POSTS,
  FETCH_POST,
  RESET_CURRENT_POST,
  CREATE_POST,
  SUCCESS_POST,
  FAILURE_POST,
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
    case FETCH_POSTS:
      return { ...state, postsList: {posts: action.payload, error: null, loading: false} }
    case FETCH_POST:
      return { ...state, activePost: {posts: action.payload, error: null, loading: false} }
    case RESET_CURRENT_POST:
      return { ...state, activePost: {post: null, error: null, loading: false}}

      // create new post
    case CREATE_POST:
      return {...state, newPost: {...state.newPost, loading: true}}
    case SUCCESS_POST:
      return {...state, newPost: {post: action.payload, error: null, loading: false}}
    case FAILURE_POST:
      error = action.payload || {message: action.payload.message}

      return {...state, newPost: {post: null, error, loading: false}}
    case RESET_NEW_POST:
      return {...state, newPost: {post: null, error: null, loading: false}}
    default:
      return state
  }
}

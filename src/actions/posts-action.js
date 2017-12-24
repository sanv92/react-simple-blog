import axios from 'axios'
import * as types from 'constants/posts-action'


const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=diownf0ewcdw'

export const fetchPosts = () => (
  (dispatch) => {
    dispatch({
      type: types.FETCH_POSTS,
    })

    axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then((response) => {
        const responseStatus = 200

        if (response && response.status !== responseStatus) {
          dispatch({
            type: types.FAILURE_POSTS,
            payload: response.data,
          })
        }
        else {
          dispatch({
            type: types.SUCCESS_POSTS,
            payload: response.data,
          })
        }
      })
  }
)

export const fetchPost = id => (
  (dispatch) => {
    dispatch({
      type: types.FETCH_POST,
    })

    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then((response) => {
        const responseStatus = 200

        if (response && response.status !== responseStatus) {
          dispatch({
            type: types.FAILURE_POST,
            payload: response.data,
          })
        }
        else {
          dispatch({
            type: types.SUCCESS_POST,
            payload: response.data,
          })
        }
      })
  }
)

export const resetActivePost = () => ({
  type: types.RESET_CURRENT_POST,
})


export const createPost = (values, callback) => (
  (dispatch) => {
    dispatch({
      type: types.CREATE_NEW_POST,
    })

    axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
      .then((response) => {
        const responseStatus = 201
        const responseTimer = 1500

        // TODO: loading bar example
        setTimeout(() => {
          if (response && response.status !== responseStatus) {
            dispatch({
              type: types.FAILURE_NEW_POST,
              payload: response.data,
            })
          }
          else {
            dispatch({
              type: types.SUCCESS_NEW_POST,
              payload: response.data,
            })

            callback(response.data)
          }
        }, responseTimer)
      })
      .catch((error) => {
        dispatch({
          type: types.FAILURE_NEW_POST,
          payload: error,
        })
      })
  }
)

export const resetNewPost = () => ({
  type: types.RESET_NEW_POST,
})

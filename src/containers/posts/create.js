import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'

import PostsCreate from 'components/posts/create'
import { createPost, createPostSuccess, createPostFailure, resetNewPost } from 'actions/posts-action'


const responseStatus = 200
const responseTimer = 1500

const validate = (values) => {
  const errors = {title: null, categories: null, content: null}

  if (!values.title) {
    errors.title = 'Enter a username'
  }
  if (!values.categories) {
    errors.categories = 'Enter a categories'
  }
  if (!values.content) {
    errors.content = 'Enter a content'
  }

  return errors
}

const mapStateToProps = ({ posts }) => ({
  newPost: posts.newPost,
})

const mapDispatchToProps = dispatch => ({
  resetForm: () => {
    dispatch(resetNewPost())
  },

  validateAndCreatePost: values => dispatch(createPost(values))
    .then((response) => {
      setTimeout(() => { // TODO: loading bar example
        if (response.payload.response && response.payload.response.status !== responseStatus) {
          dispatch(createPostFailure(response.payload.response.data))
          throw new SubmissionError(response.payload.response.data)
        }

        dispatch(createPostSuccess(response.payload.data))
      }, responseTimer)
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'PostsCreateForm',
  fields: ['title', 'categories', 'content'],
  validate,
})(PostsCreate))

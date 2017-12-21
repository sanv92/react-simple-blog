import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import PostsCreate from 'components/posts/create'
import { createPost, resetNewPost } from 'actions/posts-action'


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

  validateAndCreatePost: values => dispatch(createPost(values)),
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'PostsCreateForm',
  fields: ['title', 'categories', 'content'],
  validate,
})(PostsCreate))

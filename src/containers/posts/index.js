import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PostsList from 'components/posts'
import { fetchPosts } from 'actions/posts-action'


const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchPosts }, dispatch)
)

const mapStateToProps = ({ posts }) => ({
  ...posts.postsList,
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)

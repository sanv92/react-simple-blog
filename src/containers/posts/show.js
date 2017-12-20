import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PostShow from 'components/posts/show'
import { fetchPost, resetActivePost } from 'actions/posts-action'


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchPost,
    resetPost: () => resetActivePost(),
  }, dispatch)
)

const mapStateToProps = ({ posts }) => ({
  post: posts.activePost,
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)
